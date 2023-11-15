import React from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import SellerBlock from "../../components/SellerBlock";
import ModalAddNewAd from "../../components/ModalAddNewAd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./index.module.css";

const SellerProfilePage = () => {
  const navigate = useNavigate();
  const modalAddNewAd = useSelector((state) => state.modal.modalAddNewAd);
  const sellerId = Number(useParams()?.id);

  const goBack = () => navigate(-1);

  return (
    <>
      {modalAddNewAd && <ModalAddNewAd />}
      <Header />
      <main>
        <div className={classes.container}>
          <div className={classes.center__block}>
            <Menu />
            <div className={classes.block_title}>
              <div className={classes.back_arrow} onClick={goBack}></div>
              <h2 className={classes.h2}>Профиль продавца</h2>
            </div>
            <SellerBlock sellerId={sellerId} />
            <h3 className={classes.title}>Товары продавца</h3>
          </div>
          <div className={classes.content}>
            <Cards sellerId={sellerId} />
          </div>
        </div>
      </main>
    </>
  );
};

export default SellerProfilePage;
