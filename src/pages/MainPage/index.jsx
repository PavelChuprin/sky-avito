import React from "react";
import SearchBlock from "../../components/SearchBlock";
import Cards from "../../components/Cards";
import classes from "./index.module.css";

const MainPage = () => {
  return (
    <>
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
