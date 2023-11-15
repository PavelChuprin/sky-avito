import React from "react";
import Header from "../../components/Header";
import HeaderMain from "../../components/HeaderMain";
import SearchBlock from "../../components/SearchBlock";
import Cards from "../../components/Cards";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import { useSelector } from "react-redux";
import { isAuth } from "../../utils/constants";
import classes from "./index.module.css";

const MainPage = () => {
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
      {isAuth ? <Header /> : <HeaderMain />}
      <main>
        <SearchBlock />
        <div className={classes.container}>
          <h2 className={classes.h2}>Объявления</h2>
          <div className={classes.content}>
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
