import React from "react";
import CardSkeleton from "./CardSkeleton";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { setAds } from "../../redux/store/slices/adsReducer";
import { useGetAdsQuery } from "../../redux/API/adsAPI";
import classes from "./index.module.css";

const Cards = ({ sellerId }) => {
  const dispatch = useDispatch();
  const skeletons = [...new Array(8)].map((_, index) => (
    <CardSkeleton key={index} />
  ));

  const { data: ads, isLoading, error } = useGetAdsQuery(sellerId);

  React.useEffect(() => {
    dispatch(setAds(ads));
  }, [ads]);

  return (
    <div className={classes.cards}>
      {isLoading ? (
        skeletons
      ) : ads ? (
        ads.map((ad) => <Card key={ad.id} ad={ad} />)
      ) : (
        <div className={classes.error}>
          Не удалось загрузить товары, попробуйте позже.{" "}
          {error && <span>{error.message}</span>}
        </div>
      )}
    </div>
  );
};

export default Cards;
