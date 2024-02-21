import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Section3.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from "./SliderInnerComponents";

const MySlider = () => {
  return (
    
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderInnerComponents />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MySlider;
