import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

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
