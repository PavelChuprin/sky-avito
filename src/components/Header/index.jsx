import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModalAddNewAdv } from "../../store/slices/modalReducer";
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
        <button
          onClick={() => dispatch(setModalAddNewAdv(true))}
          className={classes.btn_putAd}
          id="btputAd"
        >
          Разместить объявление
        </button>
        <Link to="/profile">
          <button className={classes.btn_lk} id="btnlk">
            Личный кабинет
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
