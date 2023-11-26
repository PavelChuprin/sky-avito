import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../../userApi";
import { validEmail, validPasswordLength } from "../../utils/constants";
import { setToken } from "../../redux/store/slices/tokenSlice";
import { getErrorMessage } from "../../utils/utils";
import { saveTokenToLocalStorage } from "../../utils/localStorage";
import classes from "./index.module.css";

const LoginPage = () => {
  const [error, setError] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Войти");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setError("");
    try {
      setButtonText("Выполняется вход...");
      await loginUser(data.email, data.password).then((res) => {
        saveTokenToLocalStorage(res);
        dispatch(
          setToken({
            access_token: res.access_token,
            refresh_token: res.refresh_token,
          })
        );
      });
      navigate("/profile");
    } catch (error) {
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
                required: "Поле email обязательно к заполнению",
                pattern: {
                  value: validEmail,
                  message: "Введите корректный email",
                },
              })}
            />
            {errors?.email && (
              <p className={classes.error_email}>
                {errors?.email?.message || "Error!"}
              </p>
            )}
            <input
              className={classes.input_pass}
              type="password"
              placeholder="Пароль"
              {...register("password", {
                required: "Поле password обязательно к заполнению",
                minLength: {
                  value: validPasswordLength,
                  message: `Пароль должен быть не менее ${validPasswordLength} символов`,
                },
              })}
            />
            {errors?.password && (
              <p className={classes.error_password}>
                {errors?.password?.message || "Error!"}
              </p>
            )}
            {error && <p className={classes.error_password}>{error}</p>}

            <button
              className={classes.btn_enter}
              type="submit"
              disabled={!isValid}
            >
              {buttonText}
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
