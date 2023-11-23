import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/login">
          <button className={classes.btn}>
            Вход в личный кабинет
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderMain;
