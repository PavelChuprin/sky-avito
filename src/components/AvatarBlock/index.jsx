import React from "react";
import classes from "./index.module.css";
import Avatar from "../Avatar";

const AvatarBlock = ({
  user,
  loading,
  formData,
  avatarError,
  setDisabledButton,
}) => {
  const [updateAvatar, setUpdateAvatar] = React.useState();

  const handleUpdateAvatar = async (e) => {
    const files = e.target.files;
    const file = files ? files[0] : null;

    if (!file) {
      return;
    }

    formData[0] = new FormData();
    formData[0].append("file", file);

    if (files && file) {
      setUpdateAvatar(URL.createObjectURL(file));
      setDisabledButton(false);
    }
  };

  return (
    <div className={classes.left}>
      {loading && <span>Загружаем фото...</span>}
      {avatarError && (
        <span>
          Ошибка
          <br /> загрузки
        </span>
      )}
      {!updateAvatar && <Avatar user={user} />}
      {updateAvatar && <Avatar user={user} updateAvatar={updateAvatar} />}
      <label className={classes.change_photo}>
        Заменить
        <input
          className={classes.input}
          type="file"
          accept="image/*"
          onChange={handleUpdateAvatar}
        />
      </label>
    </div>
  );
};

export default AvatarBlock;
