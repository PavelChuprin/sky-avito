import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Adv from "../../components/Adv";
import ModalAddNewAdv from "../../components/ModalAddNewAdv";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const AdvPage = () => {
  const modalAddNewAdv = useSelector((state) => state.modal.modalAddNewAdv);

  return (
    <>
      {modalAddNewAdv && <ModalAddNewAdv />}
      <Header />
      <main className={classes.main}>
        <div className={classes.container}>
          <Menu />
        </div>
        <Adv />
      </main>
    </>
  );
};

export default AdvPage;
