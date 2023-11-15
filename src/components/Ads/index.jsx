import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setModalReviews } from "../../redux/store/slices/modalReducer";
import ModalReviews from "../ModalReviews";
import { useGetAdByIdQuery, useGetCommentsQuery } from "../../redux/API/adsAPI";
import { formatDate, formatSellsFrom, formatWordReview } from "../../utils/utils";
import { API_URL, NO_AVATAR, NO_IMAGE } from "../../utils/constants";
import classes from "./index.module.css";

const Ads = () => {
  const [openPhone, setOpenPhone] = React.useState(false);
  const navigate = useNavigate();
  const adId = Number(useParams()?.id);
  const dispatch = useDispatch();
  const modalReviews = useSelector((state) => state.modal.modalReviews);

  const { data, isLoading, error } = useGetAdByIdQuery(adId);
  const { data: comments } = useGetCommentsQuery(adId);
  console.log("DATA", data);

  const srcImage =
    data && data.images[0] ? API_URL + data.images[0].url : NO_IMAGE;
  const srcAvatar =
    data && data?.user?.avatar ? API_URL + data?.user?.avatar : NO_AVATAR;

  const goBack = () => navigate(-1);

  return (
    <>
      {modalReviews && <ModalReviews adId={adId} />}
      {isLoading ? (
        <div className={classes.artic}>
          <h3 className={classes.title}>Загружаем...</h3>
        </div>
      ) : data ? (
        <>
          <div className={classes.artic}>
            <div className={classes.article}>
              <div className={classes.left}>
                <div className={classes.fill_img}>
                  <div className={classes.back_arrow} onClick={goBack}></div>
                  <div className={classes.img}>
                    <img src={srcImage} alt="" />
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
                  <h3 className={classes.right__title}>{data.title}</h3>
                  <div className={classes.info}>
                    <p className={classes.date}>
                      {formatDate(data.created_on)}
                    </p>
                    <p className={classes.city}>{data.user.city}</p>
                    <div
                      onClick={() => dispatch(setModalReviews(true))}
                      className={classes.link}
                    >
                      {comments?.length > 0
                        ? comments.length + formatWordReview(comments.length)
                        : "Оставить первый отзыв"}
                    </div>
                  </div>
                  <p className={classes.price}>{data.price.toLocaleString()} ₽</p>
                  <button
                    className={classes.btn}
                    onClick={() => setOpenPhone(true)}
                  >
                    {openPhone ? "Позвонить" : "Показать телефон"}
                    {openPhone ? (
                      <span><a href={`tel:${data.user.phone}`}>{data.user.phone}</a></span>
                    ) : (
                      <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                    )}
                  </button>
                  <Link to={`/seller/${data.user.id}`}>
                    <div className={classes.author}>
                      <div className={classes.author__img}>
                        <img src={srcAvatar} alt="avatar" />
                      </div>
                      <div className={classes.cont}>
                        <p className={classes.name}>{data.user.name}</p>
                        <p className={classes.about}>
                          Продает товары с {formatSellsFrom(data.user.sells_from)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.container}>
            <h3 className={classes.title}>Описание товара</h3>
            <div className={classes.content}>
              <p className={classes.text}>{data.description ? data.description : "Нет описания"}</p>
            </div>
          </div>
        </>
      ) : (
        <div className={classes.artic}>
          <h3 className={classes.title}>Извините, произошла ошибка!</h3>
          <p>{error.message}</p>
        </div>
      )}
    </>
  );
};

export default Ads;
