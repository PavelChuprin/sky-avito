import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Card = ({ adv }) => {
  return (
    <div className={classes.item}>
      <Link to="adv">
        <div className={classes.card}>
          <div className={classes.image}>
            <img src={adv.images.url} alt={adv.title} />
          </div>
          <div className={classes.info}>
            <h3 className={classes.title}>{adv.title}</h3>
            <p className={classes.price}>{adv.price} ₽</p>
            <p className={classes.place}>{adv.user.city}</p>
            <p className={classes.date}>{adv.created_on}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
