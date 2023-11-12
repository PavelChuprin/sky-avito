import React from "react";
import { setModalReviews } from "../../store/slices/modalReducer";
import { useDispatch } from "react-redux";
import classes from "./index.module.css";

const ModalReviews = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div
            className={classes.back_arrow}
            onClick={() => dispatch(setModalReviews(false))}
          ></div>
          <h3 className={classes.title}>Отзывы о товаре</h3>
          <div
            className={classes.btn__close}
            onClick={() => dispatch(setModalReviews(false))}
          >
            <div className={classes.btn__close_line}></div>
          </div>
          <div className={classes.scroll}>
            <form className={classes.form} id="formNewArt" action="#">
              <div className={classes.form__block}>
                <label htmlFor="text">Добавить отзыв</label>
                <textarea
                  className={classes.area}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="5"
                  placeholder="Ваш отзыв"
                ></textarea>
              </div>
              <button className={classes.btn} id="btnPublish">
                Опубликовать
              </button>
            </form>
            <div className={classes.reviews}>
              <div className={classes.review}>
                <div className={classes.item}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className={classes.right}>
                    <p className={classes.name}>
                      Олег <span>14 августа</span>
                    </p>
                    <h5 className={classes.review__title}>Комментарий</h5>
                    <p className="review__text font-t">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.review}>
                <div className={classes.item}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className={classes.right}>
                    <p className={classes.name}>
                      Олег <span>14 августа</span>
                    </p>
                    <h5 className={classes.review__title}>Комментарий</h5>
                    <p className="review__text font-t">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.review}>
                <div className={classes.item}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className={classes.right}>
                    <p className={classes.name}>
                      Олег <span>14 августа</span>
                    </p>
                    <h5 className={classes.review__title}>Комментарий</h5>
                    <p className="review__text font-t">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.review}>
                <div className={classes.item}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className={classes.right}>
                    <p className={classes.name}>
                      Олег <span>14 августа</span>
                    </p>
                    <h5 className={classes.review__title}>Комментарий</h5>
                    <p className="review__text font-t">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalReviews;
