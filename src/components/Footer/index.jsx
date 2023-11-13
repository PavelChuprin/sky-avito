import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link to="/">
          <div className={classes.img}>
            <img src="img/icon_01.png" alt="home" />
          </div>
        </Link>
        <Link to="/">
          <div className={classes.img}>
            <img src="img/icon_02.png" alt="home" />
          </div>
        </Link>
        <Link to="/profile">
          <div className={classes.img}>
            <img src="img/icon_03.png" alt="home" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
