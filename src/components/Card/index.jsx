import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { API_URL, NO_IMAGE } from "../../utils/constants";
import classes from "./index.module.css";

const Card = ({ ad }) => {
  const srcImage = ad.images[0] ? API_URL + ad.images[0].url : NO_IMAGE;
  const path = "/ads/" + ad.id;

  return (
    <div className={classes.item}>
      <Link to={path}>
        <div className={classes.card}>
          <div className={classes.image}>
            <img src={srcImage} alt={ad.title} />
          </div>
          <div className={classes.info}>
            <h3 className={classes.title}>{ad.title}</h3>
            <p className={classes.price}>{ad.price.toLocaleString()} ₽</p>
            <p className={classes.place}>{ad.user.city}</p>
            <p className={classes.date}>{formatDate(ad.created_on)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
