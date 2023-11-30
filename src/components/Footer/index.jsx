import React from "react";
import { Link } from "react-router-dom";
import { setModalAddNewAd } from "../../redux/store/slices/modalSlice";
import { useDispatch } from "react-redux";
import classes from "./index.module.css";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link to="/">
          <div
            className={classes.img}
            onClick={() => dispatch(setModalAddNewAd(false))}
          >
            <img src="/img/icon_01.png" alt="add ad" />
          </div>
        </Link>
        <div
          className={classes.img}
          onClick={() => dispatch(setModalAddNewAd(true))}
        >
          <img src="/img/icon_02.png" alt="home" />
        </div>
        <Link to="/profile">
          <div
            className={classes.img}
            onClick={() => dispatch(setModalAddNewAd(false))}
          >
            <img src="/img/icon_03.png" alt="profile" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
