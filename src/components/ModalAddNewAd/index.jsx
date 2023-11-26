import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModalAddNewAd } from "../../redux/store/slices/modalSlice";
import {
  useCreateAdMutation,
  useUpdateAdImageMutation,
} from "../../redux/API/adsAPI";
import { useForm } from "react-hook-form";
import { NUMBER_OF_IMAGES, valid, validPrice } from "../../utils/constants";
import AddAdsImages from "../AddAdsImages";
import classes from "./index.module.css";

let updatedImagesArray = [...new Array(NUMBER_OF_IMAGES)];
let formData = [...new Array(NUMBER_OF_IMAGES)];

const ModalAddNewAd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    title: "",
    description: "",
    price: "",
  };

  const [fieldValue, setFieldValue] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Опубликовать");
  const [price, setPrice] = React.useState("");

  const [createAd] = useCreateAdMutation();
  const [updateImage] = useUpdateAdImageMutation();

  const isFormValid = fieldValue.title?.length && price.toString().length;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleFieldChange = (e, field) => {
    setButtonText("Опубликовать");
    setFieldValue((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleChangePrice = (e) => {
    const inputPriceValue = e.target.value;

    if (valid.test(inputPriceValue)) {
      e.target.value = inputPriceValue.replace(valid, "");
    }

    setPrice(e.target.value);
    setButtonText("Опубликовать");
  };

  const onSubmit = async (data) => {
    let createdAdId;

    try {
      setLoading(true);
      setButtonText("Публикуем");

      const response = await createAd({
        title: data.title,
        price: Number(data.price),
        description: data.description,
      }).unwrap();

      createdAdId = response.id;

      for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
        if (formData[i] && createdAdId) {
          await updateImage({
            id: createdAdId,
            body: formData[i],
          }).unwrap();
        }
      }

      setLoading(false);
      setButtonText("Опубликовано");
      setTimeout(() => navigate(`/ads/${createdAdId}`), 500);
      setTimeout(() => dispatch(setModalAddNewAd(false)), 1000);
    } catch (error) {
      setLoading(false);
      setButtonText("Ошибка");
      console.log(error);
    }

    formData = formData.map((element) => undefined);
    updatedImagesArray = updatedImagesArray.map((element) => undefined);
  };

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

        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.block}>
            <label htmlFor="title">Название</label>
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
            <label htmlFor="text">Описание</label>
            <textarea
              {...register("description")}
              className={classes.area}
              cols="auto"
              rows={1}
              placeholder="Введите описание"
              value={fieldValue.description}
              onChange={(e) => handleFieldChange(e, "description")}
            ></textarea>
          </div>

          <div className={classes.block}>
            <p className={classes.p}>
              Фотографии товара
              <span> не более {NUMBER_OF_IMAGES} фотографий</span>
            </p>
            <div className={classes.bar__img}>
              <AddAdsImages
                formData={formData}
                updatedImagesArray={updatedImagesArray}
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
              value={price}
              data-cy="create-price"
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

export default ModalAddNewAd;
