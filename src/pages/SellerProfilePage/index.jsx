import React from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import SellerBlock from "../../components/SellerBlock";
import ModalAddNewAdv from "../../components/ModalAddNewAdv";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const SellerProfilePage = () => {
  const modalAddNewAdv = useSelector((state) => state.modal.modalAddNewAdv);

  return (
    <>
      {modalAddNewAdv && <ModalAddNewAdv />}
      <Header />
      <main>
        <div className={classes.container}>
          <div className={classes.center__block}>
            <Menu />
            <h2 className={classes.h2}>Профиль продавца</h2>
            <SellerBlock />
            <h3 className={classes.title}>Товары продавца</h3>
          </div>
          <div className={classes.content}>
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
};

export default SellerProfilePage;
