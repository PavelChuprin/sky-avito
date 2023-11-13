import React from "react";
import { Link } from "react-router-dom";
import { setModalAddNewAdv } from "../../store/slices/modalReducer";
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
            onClick={() => dispatch(setModalAddNewAdv(false))}
          >
            <img src="img/icon_01.png" alt="home" />
          </div>
        </Link>
        <div
          className={classes.img}
          onClick={() => dispatch(setModalAddNewAdv(true))}
        >
          <img src="img/icon_02.png" alt="home" />
        </div>
        <Link to="/profile">
          <div
            className={classes.img}
            onClick={() => dispatch(setModalAddNewAdv(false))}
          >
            <img src="img/icon_03.png" alt="home" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
