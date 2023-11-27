import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModalReviews } from "../../redux/store/slices/modalSlice";
import {
  useCreateCommentMutation,
  useGetCommentsQuery,
} from "../../redux/API/adsAPI";
import { formatDate } from "../../utils/utils";
import { API_URL, NO_AVATAR } from "../../utils/constants";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import classes from "./index.module.css";

const ModalReviews = ({ adId }) => {
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const { data, isLoading, error } = useGetCommentsQuery(adId);
  const [createComment] = useCreateCommentMutation();

  const srcAvatar = data?.author?.avatar
    ? API_URL + data.author.avatar
    : NO_AVATAR;

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const [loading, setLoading] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Опубликовать");

  const handleChange = (e) => {
    setButtonText("Опубликовать");
    setLoading(true);
    setComment(e.target.value);
  };

  const onSubmit = async (newComment) => {
    if (comment !== "") {
      try {
        setLoading(true);
        setButtonText("Публикуется...");

        await createComment({
          adId,
          body: {
            text: newComment.text,
          },
        });

        setButtonText("Опубликовано ✔");
        window.location.reload();
        setTimeout(() => dispatch(setModalReviews(false)), 500);
        setComment("");
        setLoading(false);
      } catch (error) {
        setButtonText("Ошибка");
      }
    } else {
      setButtonText("Сообщение пустое");
    }
  };

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
            {isAuth ? (
              <form
                className={classes.form}
                onSubmit={handleSubmit(onSubmit)}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={classes.form__block}>
                  <label htmlFor="text">Добавить отзыв</label>
                  <textarea
                    {...register("text")}
                    className={classes.area}
                    cols="auto"
                    rows="5"
                    placeholder="Введите отзыв"
                    onChange={handleChange}
                    value={comment}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={!loading ? classes.btn : classes.btn_submit}
                >
                  {buttonText}
                </button>
              </form>
            ) : (
              <p className={classes.message}>
                Отзывы могут оставлять только{" "}
                <Link to="/login">
                  <span>авторизованные</span>
                </Link>{" "}
                пользователи
              </p>
            )}
            <div className={classes.reviews}>
              {isLoading ? (
                <p>Загружаем...</p>
              ) : data.length ? (
                data.map((review) => (
                  <div key={review.id} className={classes.review}>
                    <div className={classes.item}>
                      <div className={classes.left}>
                        <div className={classes.img}>
                          <img src={srcAvatar} alt="avatar" />
                        </div>
                      </div>
                      <div className={classes.right}>
                        <p className={classes.name}>
                          {review.author.name}{" "}
                          <span>{formatDate(review.created_on)}</span>
                        </p>
                        <h5 className={classes.review__title}>Комментарий</h5>
                        <p className={classes.text}>{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Нет отзывов</p>
              )}
              {error && (
                <p>
                  Произошла ошибка!{""}
                  {error.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalReviews;
