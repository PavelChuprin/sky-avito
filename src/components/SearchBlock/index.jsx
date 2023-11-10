import React from "react";
import classes from "./index.module.css";

const SearchBlock = () => {
  return (
    <div className={classes.main}>
      <a className={classes.logolink} href="#" target="_blank">
        <img className={classes.logoimg} src="img/logo.png" alt="logo" />
      </a>
      <a className={classes.logomoblink} href="#" target="_blank">
        <img className={classes.logomobimg} src="img/logo-mob.png" alt="logo" />
      </a>
      <form className={classes.form} action="#">
        <input
          className={classes.text}
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <input
          className={classes.textmob}
          type="search"
          placeholder="Поиск"
          name="search-mob"
        />
        <button className={classes.btn}>Найти</button>
      </form>
    </div>
  );
};

export default SearchBlock;
