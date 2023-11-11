import React from "react";
import classes from "./index.module.css";

const SellerBlock = () => {
  return (
    <div className={classes.main}>
    <div className={classes.content}>
    <div className={classes.seller}>
        <div className={classes.left}>
          <div className={classes.img}>
            <a href="" target="_self">
              <img src="#" alt="" />
            </a>
          </div>
        </div>
        <div className={classes.right}>
          <h3 className={classes.title}>Кирилл Матвеев</h3>
          <p className={classes.city}>Санкт-Петербург</p>
          <p className={classes.info}>Продает товары с августа 2021</p>

          <div className={classes.img__mob_block}>
            <div className={classes.img__mob}>
              <a href="" target="_self">
                <img src="#" alt="" />
              </a>
            </div>
          </div>

          <button className={classes.btn}>
            Показать&nbsp;телефон
            <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SellerBlock;
