import React from "react";
import Card from "../Card";
import classes from "./index.module.css";

const Cards = () => {
  return (
    <div className={classes.cards}>
      {[...new Array(4)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Cards;
