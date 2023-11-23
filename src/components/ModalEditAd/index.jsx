import React from "react";
import { useDispatch } from "react-redux";
import { setModalEditAd } from "../../redux/store/slices/modalSlice";
import classes from "./index.module.css";

const ModalEditAd = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.back_arrow}
          onClick={() => dispatch(setModalEditAd(false))}
        ></div>
        <h3 className={classes.title}>Редактировать объявление</h3>
        <div
          className={classes.btn__close}
          onClick={() => dispatch(setModalEditAd(false))}
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
              value="Ракетка для большого тенниса Triumph Pro STС Б/У"
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
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </textarea>
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
              value="2 200"
            />
            <div className={classes.input__price_cover}></div>
          </div>

          <button className={classes.btn} id="btnPublish">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditAd;
