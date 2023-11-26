import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModalAddNewAd } from "../../redux/store/slices/modalSlice";
import { useLogout } from "../../hooks/useLogout";
import classes from "./index.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/">
            <img className={classes.img} src="img/logo-mob.png" alt="logo" />
          </Link>
        </div>
        <button
          onClick={() => dispatch(setModalAddNewAd(true))}
          className={classes.btn_putAd}
        >
          Разместить объявление
        </button>
        <Link to="/profile">
          <button className={classes.btn_lk}>Личный кабинет</button>
        </Link>
        <button className={classes.btn_exit} onClick={handleLogout}>
          Выйти
        </button>
      </nav>
    </header>
  );
};

export default Header;
