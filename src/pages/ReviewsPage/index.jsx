import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const ReviewsPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.block}>
          <div className={classes.content}>
            <h3 className={classes.title}>Отзывы о товаре</h3>
            <div className={classes.btn__close}>
              <Link to="/adv">
                <div className={classes.btn__close_line}></div>
              </Link>
            </div>
            <div className={classes.scroll}>
              <form className={classes.form} id="formNewArt" action="#">
                <div className={classes.form__block}>
                  <label for="text">Добавить отзыв</label>
                  <textarea
                    className={classes.area}
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
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
                      <h5 className={classes.title}>Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                      <h5 className={classes.title}>Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                      <h5 className={classes.title}>Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                      <h5 className={classes.title}>Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
