import React from "react";
import { useDispatch } from "react-redux";
import { setModalEditAd } from "../../redux/store/slices/modalSlice";
import { NUMBER_OF_IMAGES, valid, validPrice } from "../../utils/constants";
import {
  useChangeAdDetailsMutation,
  useDeleteAdImageMutation,
  useUpdateAdImageMutation,
} from "../../redux/API/adsAPI";
import EditAdsImages from "../EditAdsImages";
import { useForm } from "react-hook-form";
import classes from "./index.module.css";

let updatedImagesArray = [...new Array(NUMBER_OF_IMAGES)];
let formData = [...new Array(NUMBER_OF_IMAGES)];
let urlArrayForDeleting = [];

const ModalEditAd = ({ ad }) => {
  const dispatch = useDispatch();

  const initialValue = {
    title: ad.title,
    description: ad.description,
    price: ad.price,
  };

  const [fieldValue, setFieldValue] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Сохранить");
  const [price, setPrice] = React.useState(ad?.price.toString() || "");
  const [deleting, setDeleting] = React.useState(false);

  const [changeAdDetails] = useChangeAdDetailsMutation();
  const [updateImage] = useUpdateAdImageMutation();
  const [deleteImage] = useDeleteAdImageMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleFieldChange = (e, field) => {
    setButtonText("Сохранить");
    setFieldValue((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleChangePrice = (e) => {
    const inputPriceValue = e.target.value;

    if (valid.test(inputPriceValue)) {
      e.target.value = inputPriceValue.replace(valid, "");
    }

    setPrice(e.target.value);
    setButtonText("Сохранить");
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setButtonText("Сохраняется...");

      await changeAdDetails({
        id: ad.id,
        body: {
          title: data.title,
          description: data.description,
          price: data.price,
        },
      });

      for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
        if (formData[i] && ad.id) {
          await updateImage({ id: ad.id, body: formData[i] });
        }
      }

      for (let i = 0; i < urlArrayForDeleting.length; i++) {
        if (deleting) {
          return;
        }

        setDeleting(true);

        try {
          await deleteImage({
            id: ad.id,
            imgUrl: urlArrayForDeleting[i],
          });
        } catch (error) {
          console.log(error);
          setLoading(false);
          setButtonText("Ошибка");
        }
        setDeleting(false);
      }

      setLoading(false);
      setButtonText("Сохранено");
      window.location.reload();
      setTimeout(() => dispatch(setModalEditAd(false)), 500);
    } catch {
      setLoading(false);
      setButtonText("Ошибка");
    }

    formData = formData.map((element) => undefined);
    updatedImagesArray = updatedImagesArray.map((element) => undefined);
    urlArrayForDeleting = [];
  };

  const isFormValid = fieldValue.title?.length && price.toString().length;

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

        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.block}>
            <label htmlFor="name">Название</label>
            <input
              {...register("title", {
                required: "Введите название",
              })}
              className={classes.input}
              type="text"
              placeholder="Введите название"
              value={fieldValue.title || ""}
              onChange={(e) => handleFieldChange(e, "title")}
              autoFocus
            />
            {errors.title && (
              <span className={classes.error}>{errors.title.message}</span>
            )}
          </div>
          <div className={classes.block}>
            <label htmlFor="description">Описание</label>
            <textarea
              {...register("description")}
              className={classes.area}
              cols="auto"
              rows="10"
              placeholder="Введите описание"
              value={fieldValue.description}
              onChange={(e) => handleFieldChange(e, "description")}
            />
          </div>
          <div className={classes.block}>
            <p className={classes.p}>
              Фотографии товара
              <span>не более {NUMBER_OF_IMAGES} фотографий</span>
            </p>
            <div className={classes.bar__img}>
              <EditAdsImages
                ad={ad}
                formData={formData}
                updatedImagesArray={updatedImagesArray}
                urlArrayForDeleting={urlArrayForDeleting}
              />
            </div>
          </div>
          <div className={classes.block_price}>
            <label htmlFor="price">Цена</label>
            <input
              {...register("price", {
                required: "Введите корректную цену",
                pattern: {
                  value: validPrice,
                  message: "Введите корректную цену",
                },
              })}
              className={classes.input__price}
              type="text"
              value={price}
              onChange={handleChangePrice}
            />
            <div className={classes.input__price_cover}></div>
          </div>

          <button
            type="submit"
            className={
              isFormValid && !loading ? classes.btn_submit : classes.btn
            }
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditAd;
