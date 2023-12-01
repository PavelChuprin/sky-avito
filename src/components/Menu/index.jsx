import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./index.module.css";

const Menu = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.menu}>
      <Link to="/">
        <img className={classes.logo_img} src="/img/logo.png" alt="logo" />
      </Link>
      <div className={classes.form}>
        <button className={classes.btn} onClick={goBack}>
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default Menu;
