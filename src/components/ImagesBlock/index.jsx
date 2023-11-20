import React from "react";
import { useNavigate } from "react-router-dom";
import { NO_IMAGE } from "../../utils/constants";
import classes from "./index.module.css";

const ImagesBlock = ({ images }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [imgUrl, setImgUrl] = React.useState(images[0] ? images[0] : NO_IMAGE);

  const handleShowImage = (e) => {
    let target = e.target.src;
    setImgUrl(target);
  };

  const Dots = () => {
    const renderDots = () => {
      const dots = [];
      for (let i = 0; i < images.length; i++) {
        dots.push(<Dot key={`dot-${i}`} number={i} />);
      }
      return dots;
    };
    return <div className={classes.bar_mob}>{renderDots()}</div>;
  };

  const Dot = () => {
    return <div className={classes.circle} />;
  };

  return (
    <div className={classes.block}>
      <div className={classes.back_arrow} onClick={goBack}></div>
      <div className={classes.main_picture}>
        <img src={imgUrl} alt="img" />
      </div>
      <div className={classes.bar}>
        {images.map((img, index) => (
          <div
            className={classes.picture}
            key={index}
            onClick={handleShowImage}
          >
            <img src={img} alt="img" />
          </div>
        ))}
      </div>
      <Dots />
    </div>
  );
};

export default ImagesBlock;
