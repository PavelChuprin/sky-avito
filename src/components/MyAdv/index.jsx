import React from "react";
import ModalReviews from "../ModalReviews";
import ModalEditAdv from "../ModalEditAdv";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalEditAdv,
  setModalReviews,
} from "../../store/slices/modalReducer";
import classes from "./index.module.css";

const MyAdv = () => {
  const dispatch = useDispatch();
  const modalReviews = useSelector((state) => state.modal.modalReviews);
  const modalEditAdv = useSelector((state) => state.modal.modalEditAdv);

  return (
    <>
      {modalReviews && <ModalReviews />}
      {modalEditAdv && <ModalEditAdv />}
      <div className={classes.artic}>
        <div className={classes.article}>
          <div className={classes.left}>
            <div className={classes.fill_img}>
              <div className={classes.img}>
                <img src="" alt="" />
              </div>
              <div className={classes.img__bar}>
                <div className={classes.img__bar_div}>
                  <img src="" alt="" />
                </div>
                <div className={classes.img__bar_div}>
                  <img src="" alt="" />
                </div>
                <div className={classes.img__bar_div}>
                  <img src="" alt="" />
                </div>
                <div className={classes.img__bar_div}>
                  <img src="" alt="" />
                </div>
                <div className={classes.img__bar_div}>
                  <img src="" alt="" />
                </div>
                <div className={classes.img__bar_div}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={classes.img__bar_mob}>
                <div className={classes.img__bar_mobcircleactive}></div>
                <div className={classes.img__bar_mobcircle}></div>
                <div className={classes.img__bar_mobcircle}></div>
                <div className={classes.img__bar_mobcircle}></div>
                <div className={classes.img__bar_mobcircle}></div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.block}>
              <h3 className={classes.right__title}>
                Ракетка для большого тенниса Triumph Pro STС Б/У
              </h3>
              <div className={classes.info}>
                <p className={classes.date}>Сегодня в 10:45</p>
                <p className={classes.city}>Санкт-Петербург</p>
                <div
                  className={classes.link}
                  onClick={() => dispatch(setModalReviews(true))}
                >
                  23 отзыва
                </div>
              </div>
              <p className={classes.price}>2 200 ₽</p>
              <div class={classes.btn__block}>
                <button
                  class={classes.btn_redact}
                  onClick={() => dispatch(setModalEditAdv(true))}
                >
                  Редактировать
                </button>
                <button class={classes.btn_remove}>Снять с публикации</button>
              </div>
              <div className={classes.author}>
                <div className={classes.author__img}>
                  <img src="" alt="" />
                </div>
                <div className={classes.cont}>
                  <p className={classes.name}>Кирилл</p>
                  <p className={classes.about}>Продает товары с августа 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <h3 className={classes.title}>Описание товара</h3>
        <div className={classes.content}>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyAdv;
