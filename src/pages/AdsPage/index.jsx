import React from "react";
import Menu from "../../components/Menu";
import Ads from "../../components/Ads";
import classes from "./index.module.css";

const AdsPage = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <Menu />
        </div>
        <Ads />
      </main>
    </>
  );
};

export default AdsPage;
