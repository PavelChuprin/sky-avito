import React from "react";
import axios from "axios";
import HeaderMain from "../../components/HeaderMain";
import SearchBlock from "../../components/SearchBlock";
import Cards from "../../components/Cards";
import classes from "./index.module.css";

const MainPage = () => {
  React.useEffect(() => {
    axios
      .get("http://localhost:8090/ads")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return (
    <>
      <HeaderMain />
      <main>
        <SearchBlock />
        <div className={classes.main__container}>
          <h2 className={classes.main__h2}>Объявления</h2>
          <div className={classes.main__content}>
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
