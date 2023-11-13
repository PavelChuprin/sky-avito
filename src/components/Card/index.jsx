import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className={classes.item}>
      <Link to="adv">
        <div className={classes.card}>
          <div className={classes.image}>
            <img src="img/pic5.jpg" alt="card" />
          </div>
          <div className={classes.info}>
            <h3 className={classes.title}>
              Ракетка для большого тенниса Triumph Pro ST
            </h3>
            <p className={classes.price}>2&nbsp;200&nbsp;₽</p>
            <p className={classes.place}>Санкт Петербург</p>
            <p className={classes.date}>Сегодня в&nbsp;10:45</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
