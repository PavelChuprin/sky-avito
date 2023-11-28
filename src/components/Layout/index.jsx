import React from "react";
import Header from "../Header";
import HeaderMain from "../HeaderMain";
import Footer from "../Footer";
import useAuth from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalExit from "../ModalExit";
import ModalAddNewAd from "../ModalAddNewAd";
import classes from "./index.module.css";

const Layout = () => {
  const isAuth = useAuth();
  const modalExit = useSelector((state) => state.modal.modalExit);
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
      {modalExit && <ModalExit />}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {isAuth ? <Header /> : <HeaderMain />}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
