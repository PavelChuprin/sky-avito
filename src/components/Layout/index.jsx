import React from "react";
import Header from "../Header";
import HeaderMain from "../HeaderMain";
import Footer from "../Footer";
import useAuth from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import classes from "./index.module.css";

const Layout = () => {
  const isAuth = useAuth();

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
