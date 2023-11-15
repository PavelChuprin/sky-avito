import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.h1}>Страница не найдена!</h1>

        <img
          className={classes.img}
          src="img/icon-not-found.png"
          alt="not-found"
        />
        <p className={classes.text}>
          Запрашиваемой страницы не существует. Возможно она была удалена или в
          запросе был указан неверный адрес.
        </p>
        <Link to="/">
          <button className={classes.btn}>Вернуться на главную</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
