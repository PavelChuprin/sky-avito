import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setModalChangePassword } from "../../redux/store/slices/modalSlice";
import { validPasswordLength } from "../../utils/constants";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { changePassword } from "../../userApi";
import classes from "./index.module.css";

const ModalChangePassword = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Сохранить");

  const onSubmit = async (data) => {
    setError("");
    try {
      setLoading(true);
      setButtonText("Сохраняем...");
      await changePassword(
        data.oldPassword,
        data.newPassword,
        getTokenFromLocalStorage()
      );
      setTimeout(() => dispatch(setModalChangePassword(false)), 500);
      setButtonText("Сохранено ✔");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setButtonText("Сохранить");
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div
            className={classes.back_arrow}
            onClick={() => dispatch(setModalChangePassword(false))}
          ></div>
          <h3 className={classes.title}>Смена пароля</h3>
          <div
            className={classes.btn__close}
            onClick={() => dispatch(setModalChangePassword(false))}
          >
            <div className={classes.btn__close_line}></div>
          </div>
          <div className={classes.scroll}>
            <form
              className={classes.form}
              onSubmit={handleSubmit(onSubmit)}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={classes.form__block}>
                <label>Введите старый пароль</label>
                <input
                  type="password"
                  className={classes.input}
                  placeholder="Старый пароль"
                  {...register("oldPassword", {
                    required: "Обязательное поле",
                    minLength: {
                      value: validPasswordLength,
                      message: `Старый пароль не менее ${validPasswordLength} символов`,
                    },
                  })}
                />
                {errors?.oldPassword && (
                  <p className={classes.error}>
                    {errors?.oldPassword?.message || "Error!"}
                  </p>
                )}
                <label>Введите новый пароль</label>
                <input
                  type="password"
                  className={classes.input}
                  placeholder="Новый пароль"
                  {...register("newPassword", {
                    required: "Обязательное поле",
                    minLength: {
                      value: validPasswordLength,
                      message: `Постарайтесь ещё (минимум ${validPasswordLength} символов)`,
                    },
                  })}
                />
                {errors?.newPassword && (
                  <p className={classes.error}>
                    {errors?.newPassword?.message || "Error!"}
                  </p>
                )}
              </div>
              <div className={classes.btn_block}>
                <button type="submit" className={classes.btn}>
                  {buttonText}
                </button>
                {loading && <span className={classes.loader}></span>}
              </div>
            </form>
            {error && <p className={classes.error_bottom}>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangePassword;
