import React from "react";
import SellerSkeleton from "./SellerSkeleton";
import { useGetAdsQuery } from "../../redux/API/adsAPI";
import { API_URL, NO_AVATAR } from "../../utils/constants";
import { formatSellsFrom } from "../../utils/utils";
import classes from "./index.module.css";

const SellerBlock = ({ sellerId }) => {
  const [openPhone, setOpenPhone] = React.useState(false);
  const { data, isLoading, error } = useGetAdsQuery(sellerId);

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        {isLoading ? (
          <SellerSkeleton />
        ) : data ? (
          <div className={classes.seller}>
            <div className={classes.left}>
              <div className={classes.img}>
                <img
                  src={
                    data[0].user.avatar
                      ? API_URL + data[0].user.avatar
                      : NO_AVATAR
                  }
                  alt="avatar"
                />
              </div>
            </div>
            <div className={classes.right}>
              <h3 className={classes.title}>
                {" "}
                {data[0].user.name} {data[0].user.surname}
              </h3>
              <p className={classes.city}>{data[0].user.city}</p>
              <p className={classes.info}>
                Продает товары с {formatSellsFrom(data[0].user.sells_from)}
              </p>

              <div className={classes.img__mob_block}>
                <div className={classes.img__mob}>
                  <img
                    src={
                      data[0].user.avatar
                        ? API_URL + data[0].user.avatar
                        : NO_AVATAR
                    }
                    alt="avatar"
                  />
                </div>
              </div>
              <button
                className={classes.btn}
                onClick={() => setOpenPhone(true)}
              >
                {openPhone ? "Позвонить" : "Показать телефон"}
                {openPhone ? (
                  <span>
                    <a href={`tel:${data[0].user.phone}`}>
                      {data[0].user.phone}
                    </a>
                  </span>
                ) : (
                  <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                )}
              </button>
            </div>
          </div>
        ) : (
          <p>{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default SellerBlock;
