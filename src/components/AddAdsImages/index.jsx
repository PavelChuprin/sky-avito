import React from "react";
import { NUMBER_OF_IMAGES } from "../../utils/constants";
import classes from "./index.module.css";

const imgArray = [...new Array(NUMBER_OF_IMAGES)];

const AddAdsImages = ({ formData, updatedImagesArray }) => {
  const [updateImages, setUpdateImages] = React.useState(updatedImagesArray);

  React.useEffect(() => {
    setUpdateImages(updatedImagesArray);
  }, [updatedImagesArray]);

  const handleChange = async (event, index) => {
    const files = event.target.files;
    const file = files ? files[0] : null;

    setUpdateImages((prev) => [
      ...prev.slice(0, index),
      file,
      ...prev.slice(index + 1),
    ]);

    formData[index] = new FormData();
    formData[index].append("file", file);
  };

  const handleDeleteImages = (index) => {
    setUpdateImages((prev) => [
      ...prev.slice(0, index),
      undefined,
      ...prev.slice(index + 1),
    ]);

    formData[index] = undefined;
  };

  return (
    <>
      {imgArray?.map((_, index) => (
        <div key={index} className={classes.img}>
          {updateImages[index] && (
            <div className={classes.img}>
              <img
                width="100%"
                height="100%"
                src={URL.createObjectURL(updateImages[index])}
                alt="img"
              />
              <div
                className={classes.close}
                onClick={() => handleDeleteImages(index)}
              />
            </div>
          )}

          {!updateImages[index] && (
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

export default AddAdsImages;
