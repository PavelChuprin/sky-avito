import React from "react";
import { useForm } from "react-hook-form";
import AvatarBlock from "../AvatarBlock";
import { valid } from "../../utils/constants";
import { postUserAvatar, updateUser } from "../../userApi";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import ModalChangePassword from "../ModalChangePassword";
import { setModalChangePassword } from "../../redux/store/slices/modalSlice";
import classes from "./index.module.css";

let formData = [];

const SettigsBlock = ({ user, setUserName, userName }) => {
  const initialValue = {
    name: user.name,
    surname: user.surname,
    city: user.city,
    phone: user.phone,
  };

  const [disabledButton, setDisabledButton] = React.useState(true);
  const [buttonText, setButtonText] = React.useState("Сохранить");
  const [error, setError] = React.useState("");
  const [fieldValue, setFieldValue] = React.useState(initialValue);
  const [phone, setPhone] = React.useState(user.phone || "");
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const modalChangePassword = useSelector(
    (state) => state.modal.modalChangePassword
  );

  React.useEffect(() => {
    setDisabledButton(disabledButton);
    if (!disabledButton) {
      setButtonText("Сохранить");
    }
  }, [disabledButton]);

  const handleFieldChange = (e, field) => {
    setDisabledButton(false);
    setButtonText("Сохранить");
    setFieldValue((prev) => ({ ...prev, [field]: e.target.value }));

    if (field === "name") {
      setUserName(e.target.value);
    }
  };

  const handleChangePhone = (e) => {
    setDisabledButton(false);
    setButtonText("Сохранить");

    const inputPhoneValue = e.target.value;

    if (valid.test(inputPhoneValue)) {
      e.target.value = inputPhoneValue.replace(valid, "");
    }

    setPhone(e.target.value);
  };

  const { register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setDisabledButton(true);
    const token = getTokenFromLocalStorage();

    try {
      await updateUser(
        {
          name: userName,
          surname: data.surname,
          city: data.city,
          phone: data.phone,
        },
        token
      );

      if (formData[0]) {
        setLoading(true);
        await postUserAvatar(token, formData[0]);
        setLoading(false);
      }

      setError("");
      setButtonText("Сохранено ✔");
    } catch {
      setButtonText("Сохранить");
      setDisabledButton(false);

      setError("Ошибка. Попробуйте еще раз.");
    }

    formData = [];
  };

  return (
    <>
      {modalChangePassword && <ModalChangePassword />}
      <div className={classes.settings}>
        <AvatarBlock
          user={user}
          loading={loading}
          formData={formData}
          setDisabledButton={setDisabledButton}
        />
        <div className={classes.right}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.div}>
              <label>Имя</label>
              <input
                className={classes.f_name}
                type="text"
                placeholder="Имя"
                {...register("name")}
                value={fieldValue.name}
                onChange={(e) => handleFieldChange(e, "name")}
              />
            </div>

            <div className={classes.div}>
              <label>Фамилия</label>
              <input
                className={classes.l_name}
                type="text"
                placeholder="Фамилия"
                {...register("surname")}
                value={fieldValue.surname}
                onChange={(e) => handleFieldChange(e, "surname")}
              />
            </div>

            <div className={classes.div}>
              <label>Город</label>
              <input
                className={classes.city}
                type="text"
                placeholder="Город"
                {...register("city")}
                value={fieldValue.city}
                onChange={(e) => handleFieldChange(e, "city")}
              />
            </div>

            <div className={classes.div}>
              <label>Телефон</label>
              <input
                className={classes.phone}
                type="tel"
                placeholder="Телефон"
                {...register("phone")}
                value={phone}
                onChange={handleChangePhone}
              />
            </div>

            <button
              className={!disabledButton ? classes.btn : classes.disabled}
              type="submit"
              disabled={disabledButton}
            >
              {buttonText}
            </button>
            <button
              className={classes.btn}
              onClick={() => dispatch(setModalChangePassword(true))}
            >
              Сменить пароль
            </button>

            <p>{error}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettigsBlock;
