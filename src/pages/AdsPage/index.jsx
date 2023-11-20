import React from "react";
import Menu from "../../components/Menu";
import Ads from "../../components/Ads";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const AdsPage = () => {
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
      <main className={classes.main}>
        <div className={classes.container}>
          <Menu />
        </div>
        <Ads />
      </main>
    </>
  );
};

export default AdsPage;
