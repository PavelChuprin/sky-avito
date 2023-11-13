import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.block}>
          <form className={classes.form} id="formLogIn" action="#">
            <div className={classes.logo}>
              <Link to="/">
                <img src="../img/logo_modal.png" alt="logo" />
              </Link>
            </div>
            <input
              className={classes.input}
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
            />
            <input
              className={classes.input}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              className={classes.input}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              className={classes.input}
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <input
              className={classes.input}
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <input
              className={classes.input}
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />

            <Link to="/signup">
              <button className={classes.btn_signup} id="btnSignUp">
                <a href="signup.html">Зарегистрироваться</a>{" "}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
