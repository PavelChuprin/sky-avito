import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.block}>
          <form className={classes.form} id="formLogIn" action="#">
            <div className={classes.logo}>
              <Link to="/">
                <img src="img/logo_modal.png" alt="logo" />
              </Link>
            </div>
            <input
              className={classes.input_login}
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className={classes.input_pass}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <Link to="/">
              <button className={classes.btn_enter} id="btnEnter">
                <a href="../index.html">Войти</a>{" "}
              </button>
            </Link>
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

export default LoginPage;
