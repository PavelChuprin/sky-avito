import React from "react";
import AdsSkeleton from "./AdsSkeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalReviews from "../ModalReviews";
import ModalEditAd from "../ModalEditAd";
import ImagesBlock from "../ImagesBlock";
import NoImagesBlock from "../NoImagesBlock";
import {
  setModalEditAd,
  setModalReviews,
} from "../../redux/store/slices/modalSlice";
import { getUser } from "../../userApi";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import {
  useDeleteAdMutation,
  useGetAdByIdQuery,
  useGetCommentsQuery,
} from "../../redux/API/adsAPI";
import { API_URL, NO_AVATAR } from "../../utils/constants";
import {
  formatDate,
  formatSellsFrom,
  formatTitle,
  formatWordReview,
} from "../../utils/utils";
import classes from "./index.module.css";

const Ads = () => {
  const [user, setUser] = React.useState(null);
  const [openPhone, setOpenPhone] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Снять с публикации");
  const adId = Number(useParams()?.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalReviews = useSelector((state) => state.modal.modalReviews);
  const modalEditAd = useSelector((state) => state.modal.modalEditAd);

  const { data, isLoading, error } = useGetAdByIdQuery(adId);
  const { data: comments } = useGetCommentsQuery(adId);
  const [deleteAd] = useDeleteAdMutation();

  const srcAvatar =
    data && data?.user?.avatar ? API_URL + data?.user?.avatar : NO_AVATAR;

  const imagesIn = data && data.images ? data.images : [];
  const convertImages = (imagesIn) => {
    return imagesIn.map((img) => img.url && API_URL + img.url);
  };
  const images = convertImages(imagesIn);

  React.useEffect(() => {
    const fetchData = () => {
      getUser(getTokenFromLocalStorage())
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const isMyAd = data?.user?.id === user?.id;

  const handleDeleteAd = async () => {
    if (data && data.id) {
      try {
        await deleteAd(data.id).unwrap();
        setButtonText("Удалено");
        setTimeout(() => navigate("/profile"), 500);
      } catch (error) {
        console.log(error);
        setButtonText("Ошибка");
      }
    }
  };

  return (
    <>
      {modalReviews && <ModalReviews adId={adId} />}
      {modalEditAd && <ModalEditAd ad={data} />}

      <>
        <div className={classes.artic}>
          <div className={classes.article}>
            {isLoading ? (
              <AdsSkeleton />
            ) : data ? (
              <>
                <div className={classes.left}>
                  {data && data.images.length > 0 ? (
                    <ImagesBlock images={images} />
                  ) : (
                    <NoImagesBlock />
                  )}
                </div>
                <div className={classes.right}>
                  <div className={classes.block}>
                    <h3 className={classes.right__title}>
                      {formatTitle(data.title)}
                    </h3>
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
                    <p className={classes.price}>
                      {data.price.toLocaleString()} ₽
                    </p>
                    {isMyAd ? (
                      <div>
                        <button
                          onClick={() => dispatch(setModalEditAd(true))}
                          className={classes.btn}
                        >
                          Редактировать
                        </button>
                        <button
                          className={classes.btn}
                          onClick={handleDeleteAd}
                        >
                          {buttonText}
                        </button>
                      </div>
                    ) : (
                      <button
                        className={classes.btn}
                        onClick={() => setOpenPhone(true)}
                      >
                        {openPhone ? "Позвонить" : "Показать телефон"}
                        {openPhone ? (
                          <span>
                            <a href={`tel:${data.user.phone}`}>
                              {data.user.phone}
                            </a>
                          </span>
                        ) : (
                          <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                        )}
                      </button>
                    )}

                    <Link to={`/seller/${data.user.id}`}>
                      <div className={classes.author}>
                        <div className={classes.author__img}>
                          <img src={srcAvatar} alt="avatar" />
                        </div>
                        <div className={classes.cont}>
                          <p className={classes.name}>{data.user.name}</p>
                          <p className={classes.about}>
                            Продает товары с{" "}
                            {formatSellsFrom(data.user.sells_from)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className={classes.title}>Извините, произошла ошибка!</h3>
                <p>{error.message}</p>
              </>
            )}
          </div>
        </div>

        <div className={classes.container}>
          <h3 className={classes.title}>Описание товара</h3>
          <div className={classes.content}>
            <p className={classes.text}>
              {data?.description
                ? data?.description
                : "Продавец не заполнил описание"}
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default Ads;
