import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./index.module.css";

const ImagesBlock = ({ images }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={classes.block}>
      <div className={classes.back_arrow} onClick={goBack}></div>
      <Swiper
        className={classes.bar}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide className={classes.main_picture} key={index}>
            <img src={img} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesBlock;
