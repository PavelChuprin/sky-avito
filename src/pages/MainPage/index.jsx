import React from "react";
import HeaderMain from "../../components/HeaderMain";
import SearchBlock from "../../components/SearchBlock";
import Cards from "../../components/Cards";
import ModalAddNewAdv from "../../components/ModalAddNewAdv";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const MainPage = () => {
  const modalAddNewAdv = useSelector((state) => state.modal.modalAddNewAdv);

  return (
    <>
      {modalAddNewAdv && <ModalAddNewAdv />}
      <HeaderMain />
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
