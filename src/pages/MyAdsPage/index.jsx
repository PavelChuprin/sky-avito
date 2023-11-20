import React from "react";
import Menu from "../../components/Menu";
import MyAds from "../../components/MyAds";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const MyAdsPage = () => {
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
      <main className={classes.main}>
        <div className={classes.container}>
          <Menu />
        </div>
        <MyAds />
      </main>
    </>
  );
};

export default MyAdsPage;
