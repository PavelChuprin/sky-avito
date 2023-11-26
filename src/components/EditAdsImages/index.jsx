import React from "react";
import { API_URL, NUMBER_OF_IMAGES } from "../../utils/constants";
import classes from "./index.module.css";

const imgArray = [...new Array(NUMBER_OF_IMAGES)];

const EditAdsImages = ({
  ad,
  formData,
  updatedImagesArray,
  urlArrayForDeleting,
}) => {
  const [updatedImages, setUpdatedImages] = React.useState(updatedImagesArray);
  const [oldImages, setOldImages] = React.useState(ad.images);

  const numberOfOldImages = oldImages.length;
  const plusButtonArray = numberOfOldImages
    ? Array.from(Array(imgArray.length - numberOfOldImages).keys())
    : imgArray;

  const handleDeleteNewImages = (index) => {
    setUpdatedImages((prev) => [
      ...prev.slice(0, index),
      undefined,
      ...prev.slice(index + 1),
    ]);

    formData[index] = undefined;
  };

  const handleDeleteOldImages = (index) => {
    setUpdatedImages((prev) => [
      ...prev.slice(0, index),
      undefined,
      ...prev.slice(index + 1),
    ]);

    urlArrayForDeleting.push(oldImages[index].url);

    setOldImages((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);

    formData[index] = undefined;
  };

  const handleChange = async (event, index) => {
    const files = event.target.files;
    const file = files ? files[0] : null;

    setUpdatedImages((prev) => [
      ...prev.slice(0, index),
      file,
      ...prev.slice(index + 1),
    ]);

    formData[index] = new FormData();
    formData[index].append("file", file);
  };

  React.useEffect(() => {
    setUpdatedImages(updatedImagesArray);
  }, [updatedImagesArray]);

  return (
    <>
      {oldImages.map((image, index) => (
        <div key={index} className={classes.img}>
          <img
            width="100%"
            height="100%"
            src={image.url ? API_URL + image.url : ""}
            alt="img"
          />
          <div
            className={classes.close}
            onClick={() => handleDeleteOldImages(index)}
          />
        </div>
      ))}
      {numberOfOldImages < NUMBER_OF_IMAGES &&
        plusButtonArray.map((el, index) => (
          <div key={index} className={classes.img}>
            {updatedImages[index] && (
              <div className={classes.img}>
                <img
                  width="100%"
                  height="100%"
                  alt="img"
                  src={URL.createObjectURL(updatedImages[index])}
                />
                <div
                  className={classes.close}
                  onClick={() => handleDeleteNewImages(index)}
                />
              </div>
            )}

            {!updatedImages[index] && (
              <label className={classes.label}>
                <div className={classes.square}>
                  <svg
                    className={classes.icon}
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 0V30" strokeWidth="3" />
                    <path d="M30 15L1.10269e-06 15" strokeWidth="3" />
                  </svg>
                  <img src="" alt="" />
                </div>
                <input
                  className={classes.input}
                  type="file"
                  onChange={(e) => handleChange(e, index)}
                  accept="image/*"
                />
              </label>
            )}
          </div>
        ))}
    </>
  );
};

export default EditAdsImages;
