import React from "react";
import { useForm } from "react-hook-form";
import { validPhone } from "../../utils/constants";
import {
  useUpdateUserAvatarMutation,
  useUpdateUserDetailsMutation,
} from "../../redux/API/usersAPI";
import AvatarBlock from "../AvatarBlock";
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

  const [updateUserDetails] = useUpdateUserDetailsMutation();
  const [updateUserAvatar, { error: avatarError }] =
    useUpdateUserAvatarMutation();

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

    if (validPhone.test(inputPhoneValue)) {
      e.target.value = inputPhoneValue.replace(validPhone, "");
    }

    setPhone(e.target.value);
  };

  const { register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setDisabledButton(true);

    try {
      await updateUserDetails({
        name: userName,
        surname: data.surname,
        city: data.city,
        phone: data.phone,
      }).unwrap();

      if (formData[0]) {
        setLoading(true);
        await updateUserAvatar(formData[0]).unwrap();
        setLoading(false);
      }

      setError("");
      setButtonText("Сохранено");

      window.location.reload();
    } catch {
      setButtonText("Сохранить");
      setDisabledButton(false);

      setError("Ошибка. Попробуйте еще раз.");
    }

    formData = [];
  };

  return (
    <div className={classes.settings}>
      <AvatarBlock
        user={user}
        loading={loading}
        formData={formData}
        avatarError={avatarError}
        setDisabledButton={setDisabledButton}
      />
      <div className={classes.right}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.div}>
            <label htmlFor="fname">Имя</label>
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
            <label htmlFor="lname">Фамилия</label>
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
            <label htmlFor="city">Город</label>
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
            <label htmlFor="phone">Телефон</label>
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
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default SettigsBlock;
