import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { validEmail, validPasswordLength } from "../../utils/constants";
import { useLoginMutation } from "../../redux/API/authAPI";
import { setToken } from "../../redux/store/slices/tokenSlice";
import { getErrorMessage } from "../../utils/utils";
import classes from "./index.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { data: userTokens }] = useLoginMutation();
  const [error, setError] = React.useState("");
  const [cookies, setCookie] = useCookies(["access", "refresh"]);

  React.useEffect(() => {
    if (userTokens) {
      setCookie("access", userTokens.access_token);
      setCookie("refresh", userTokens.refresh_token);

      dispatch(
        setToken({
          access_token: userTokens.access_token,
          refresh_token: userTokens.refresh_token,
        })
      );
    }
  }, [userTokens]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setError("");

    try {
      await login({ email: data.email, password: data.password });
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(getErrorMessage(error));
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.block}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.logo}>
              <Link to="/">
                <img src="img/logo_modal.png" alt="logo" />
              </Link>
            </div>
            <input
              className={classes.input_login}
              type="text"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: validEmail,
                  message: "Введите корректный email",
                },
              })}
            />
            {errors.email && (
              <p className={classes.error}>{errors.email.message}</p>
            )}
            <input
              className={classes.input_pass}
              type="password"
              placeholder="Пароль"
              {...register("password", {
                required: true,
                pattern: {
                  value: validPasswordLength,
                  message: `Пароль должен быть не менее ${validPasswordLength} символов`,
                },
              })}
            />
            {errors.password && (
              <p className={classes.error}>{errors.password.message}</p>
            )}
            {error && <p className={classes.error}>{error}</p>}
            <button className={classes.btn_enter} type="submit">
              Войти
            </button>
            <Link to="/signup">
              <button className={classes.btn_signup}>Зарегистрироваться</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
