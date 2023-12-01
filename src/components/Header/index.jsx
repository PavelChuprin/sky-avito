import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setModalAddNewAd,
  setModalExit,
} from "../../redux/store/slices/modalSlice";
import ToggleTheme from "../ToggleTheme";
import classes from "./index.module.css";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/">
            <img className={classes.img} src="img/logo-mob.png" alt="logo" />
          </Link>
        </div>
        <div className={classes.block}>
          <ToggleTheme />
          <button
            onClick={() => dispatch(setModalAddNewAd(true))}
            className={classes.btn_putAd}
          >
            Разместить объявление
          </button>
          <Link to="/profile">
            <button className={classes.btn_lk}>Личный кабинет</button>
          </Link>
          <button
            className={classes.btn_exit}
            onClick={() => dispatch(setModalExit(true))}
          >
            Выйти
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
