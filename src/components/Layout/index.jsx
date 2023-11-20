import React from "react";
import Header from "../Header";
import HeaderMain from "../HeaderMain";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { isAuth } from "../../utils/constants";
import classes from "./index.module.css";

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {isAuth ? <Header /> : <HeaderMain />}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
