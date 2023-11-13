import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <Link to="/">
        <img className={classes.logo_img} src="img/logo.png" alt="logo" />
      </Link>
      <form className={classes.form} action="#">
        <Link to="/">
          <button className={classes.btn} id="btnGoBack">
            Вернуться на&nbsp;главную
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Menu;
