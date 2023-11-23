import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/store/slices/filterSlice";
import classes from "./index.module.css";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.search);

  return (
    <div className={classes.main}>
      <div className={classes.logolink}>
        <img className={classes.logoimg} src="img/logo.png" alt="logo" />
      </div>
      <div className={classes.logomoblink}>
        <img className={classes.logomobimg} src="img/logo-mob.png" alt="logo" />
      </div>
      <form className={classes.form} action="#">
        <input
          className={classes.text}
          type="search"
          placeholder="Поиск по названиям"
          name="search"
          value={searchValue}
          onChange={(event) => dispatch(setSearch(event.target.value))}
        />
        <input
          className={classes.textmob}
          type="search"
          placeholder="Поиск"
          name="search-mob"
          value={searchValue}
          onChange={(event) => dispatch(setSearch(event.target.value))}
        />
      </form>
    </div>
  );
};

export default SearchBlock;
