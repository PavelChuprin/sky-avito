import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";
import classes from "./index.module.css";

const HeaderMain = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/">
            <img className={classes.img} src="./img/logo-mob.png" alt="logo" />
          </Link>
        </div>
        <div className={classes.block}>
          <ToggleTheme />
          <Link to="/login">
            <button className={classes.btn}>Вход в личный кабинет</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMain;
