import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Adv from "../../components/Adv";
import classes from "./index.module.css";

const AdvPage = () => {
  return (
    <>
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
