import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Cards from "../../components/Cards";
import SettigsBlock from "../../components/SettingsBlock";
import ModalAddNewAdv from "../../components/ModalAddNewAdv";
import { useSelector } from "react-redux";
import classes from "./index.module.css";

const ProfilePage = () => {
  const modalAddNewAdv = useSelector((state) => state.modal.modalAddNewAdv);

  return (
    <>
      {modalAddNewAdv && <ModalAddNewAdv />}
      <Header />
      <main className="main">
        <div className={classes.container}>
          <div className={classes.center_block}>
            <Menu />

            <h2 className={classes.h2}>Здравствуйте, Антон!</h2>

            <div className={classes.profile}>
              <div className={classes.content}>
                <h3 className={classes.profile__title}>Настройки профиля</h3>
                <SettigsBlock />
              </div>
            </div>

            <h3 className={classes.main__title}>Мои товары</h3>
          </div>
          <div className={classes.main__content}>
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
