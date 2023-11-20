import React from "react";
import { useDispatch } from "react-redux";
import { setModalAddNewAd } from "../../redux/store/slices/modalReducer";
import classes from "./index.module.css";

const ModalAddNewAd = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.back_arrow}
          onClick={() => dispatch(setModalAddNewAd(false))}
        ></div>
        <h3 className={classes.title}>Новое объявление</h3>
        <div
          className={classes.btn__close}
          onClick={() => dispatch(setModalAddNewAd(false))}
        >
          <div className={classes.btn__close_line}></div>
        </div>

        <form className={classes.form} id="formNewArt" action="#">
          <div className={classes.block}>
            <label for="name">Название</label>
            <input
              className={classes.input}
              type="text"
              name="name"
              id="formName"
              placeholder="Введите название"
            />
          </div>
          <div className={classes.block}>
            <label for="text">Описание</label>
            <textarea
              className={classes.area}
              name="text"
              id="formArea"
              cols="auto"
              rows="10"
              placeholder="Введите описание"
            ></textarea>
          </div>
          <div className={classes.block}>
            <p className={classes.p}>
              Фотографии товара<span>не более 5 фотографий</span>
            </p>
            <div className={classes.bar__img}>
              <div className={classes.img}>
                <img src="" alt="" />
                <div className={classes.img_cover}></div>
              </div>
              <div className={classes.img}>
                <img src="" alt="" />
                <div className={classes.img_cover}></div>
              </div>
              <div className={classes.img}>
                <div className={classes.img_cover}></div>
                <img src="" alt="" />
              </div>
              <div className={classes.img}>
                <div className={classes.img_cover}></div>
                <img src="" alt="" />
              </div>
              <div className={classes.img}>
                <div className={classes.img_cover}></div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className={classes.block_price}>
            <label for="price">Цена</label>
            <input
              className={classes.input__price}
              type="text"
              name="price"
              id="formName"
            />
            <div className={classes.input__price_cover}></div>
          </div>

          <button className={classes.btn} id="btnPublish">
            Опубликовать
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalAddNewAd;
