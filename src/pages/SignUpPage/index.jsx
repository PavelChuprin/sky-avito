import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getErrorMessage } from "../../utils/utils";
import { validEmail, validPasswordLength } from "../../utils/constants";
import { setToken } from "../../redux/store/slices/tokenSlice";
import { loginUser, registerUser } from "../../userApi";
import { saveTokenToLocalStorage } from "../../utils/localStorage";
import classes from "./index.module.css";

const SignupPage = () => {
  const [error, setError] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Зарегистрироваться");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setError("");
    try {
      setButtonText("Регистрируем...");
      const user = await registerUser({
        id: 0,
        email: data.email,
        password: data.password,
        name: data.name,
        surname: data.surname,
        city: data.city,
        phine: "",
        role: "user",
      });
      if (user)
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
                <img src="../img/logo_modal.png" alt="logo" />
              </Link>
            </div>
            <input
              className={classes.input}
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
              className={classes.input}
              type="password"
              placeholder="Пароль"
              {...register("password", {
                required: true,
                minLength: {
                  value: validPasswordLength,
                  message: `Пароль должен быть не менее ${validPasswordLength} символов`,
                },
              })}
            />
            {errors.password && (
              <p className={classes.error}>{errors.password.message}</p>
            )}
            <input
              className={classes.input}
              type="password"
              placeholder="Повторите пароль"
              {...register("confirmPassword", {
                required: true,
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || `Пароли не совпадают`;
                  },
                },
              })}
            />
            {errors.confirmPassword && (
              <p className={classes.error}>{errors.confirmPassword.message}</p>
            )}
            <input
              className={classes.input}
              type="text"
              placeholder="Имя (необязательно)"
              {...register("name")}
            />
            <input
              className={classes.input}
              type="text"
              placeholder="Фамилия (необязательно)"
              {...register("surname")}
            />
            <input
              className={classes.input}
              type="text"
              placeholder="Город (необязательно)"
              {...register("city")}
            />
            {error && <p className={classes.error}>{error}</p>}

            <button
              className={classes.btn_signup}
              type="submit"
              disabled={!isValid}
            >
              {buttonText}
            </button>
            <p className={classes.text}>
              Уже есть аккаунт?{" "}
              <Link to="/login">
                <span>Войти</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
