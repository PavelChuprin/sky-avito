import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import MyAdv from "../../components/MyAdv";
import classes from "./index.module.css";

const MyAdvPage = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.container}>
          <Menu />
        </div>
        <MyAdv />
      </main>
    </>
  );
};

export default MyAdvPage;
