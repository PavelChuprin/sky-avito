import React from "react";

import SearchBlock from "../../components/SearchBlock";
import Cards from "../../components/Cards";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const MainPage = () => {
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
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
