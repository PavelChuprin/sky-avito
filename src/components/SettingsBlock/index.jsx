import React from "react";
import classes from "./index.module.css";

const SettigsBlock = () => {
  return (
    <div className={classes.settings}>
      <div className={classes.left}>
        <div className={classes.img}>
          <a href="" target="_self">
            <img src="#" alt="123" />
          </a>
        </div>
        <a className={classes.change_photo} href="" target="_self">
          Заменить
        </a>
      </div>
      <div className={classes.right}>
        <form className={classes.form} action="#">
          <div className={classes.div}>
            <label for="fname">Имя</label>
            <input
              className={classes.f_name}
              id="settings-fname"
              name="fname"
              type="text"
              value="Ан"
              placeholder=""
            />
          </div>

          <div className={classes.div}>
            <label for="lname">Фамилия</label>
            <input
              className={classes.l_name}
              id="settings-lname"
              name="lname"
              type="text"
              value="Городецкий"
              placeholder=""
            />
          </div>

          <div className={classes.div}>
            <label for="city">Город</label>
            <input
              className={classes.city}
              id="settings-city"
              name="city"
              type="text"
              value="Санкт-Петербург"
              placeholder=""
            />
          </div>

          <div className={classes.div}>
            <label for="phone">Телефон</label>
            <input
              className={classes.phone}
              id="settings-phone"
              name="phone"
              type="tel"
              value="89161234567"
              placeholder="+79161234567"
            />
          </div>

          <button className={classes.btn} id="settings-btn">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettigsBlock;
