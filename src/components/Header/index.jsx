import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class={classes.header}>
      <nav class={classes.nav}>
        <div class={classes.logo}>
          <Link to="/">
            <img class={classes.img} src="img/logo-mob.png" alt="logo" />
          </Link>
        </div>
        <button class={classes.btn_putAd} id="btputAd">
          Разместить объявление
        </button>
        <Link to="/profile">
          <button class={classes.btn_lk} id="btnlk">
            Личный кабинет
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
