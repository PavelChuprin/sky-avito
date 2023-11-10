import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import classes from "./index.module.css";

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
