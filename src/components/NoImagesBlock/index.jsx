import { useNavigate } from "react-router-dom";
import { NO_IMAGE } from "../../utils/constants";
import classes from "./index.module.css";

const NoImagesBlock = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const imgArray = [...new Array(5)];

  return (
    <div className={classes.block}>
      <div className={classes.back_arrow} onClick={goBack}></div>
      <div className={classes.main_picture}>
        <img src={NO_IMAGE} alt="no-img" />
      </div>
      <div className={classes.bar}>
        {imgArray.map((index) => (
          <div className={classes.picture} key={index}>
            <img src={NO_IMAGE} alt="no-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoImagesBlock;
