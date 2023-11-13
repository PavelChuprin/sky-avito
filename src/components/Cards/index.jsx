import React from "react";
import axios from "axios";
import Card from "../Card";
import classes from "./index.module.css";

const Cards = () => {
  const [advs, setAdvs] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8090/ads")
      .then(function (response) {
        setAdvs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    console.log(advs);
  }, []);

  return (
    <div className={classes.cards}>
      {advs.map((adv) => (
        <Card key={adv.id} adv={adv} />
      ))}
    </div>
  );
};

export default Cards;
