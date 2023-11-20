import React from "react";
import CardSkeleton from "./CardSkeleton";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { useGetAdsQuery } from "../../redux/API/adsAPI";
import { setFilterAds } from "../../redux/store/slices/filterReducer";
import classes from "./index.module.css";

const Cards = ({ sellerId }) => {
  const dispatch = useDispatch();
  const skeletons = [...new Array(8)].map((_, index) => (
    <CardSkeleton key={index} />
  ));

  const searchValue = useSelector((state) => state.filter.search);
  const filterAds = useSelector((state) => state.filter.filterAds);

  const { data, isLoading, error } = useGetAdsQuery(sellerId);

  React.useEffect(() => {
    dispatch(setFilterAds(data));
  }, [data]);

  return (
    <>
      {error && (
        <div className={classes.error}>
          Не удалось загрузить товары, попробуйте позже.
          <br />
          {error && <span>{error.message}</span>}
        </div>
      )}
      <div className={classes.cards}>
        {isLoading && skeletons}
        {data &&
          filterAds
            ?.filter((ad) => {
              if (ad.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
              } else {
                return false;
              }
            })
            .map((ad) => <Card key={ad.id} ad={ad} />)}
      </div>
    </>
  );
};

export default Cards;
