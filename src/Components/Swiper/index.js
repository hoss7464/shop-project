import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Data1 } from "../../Helpers/Swipers";

const MySwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        {Data1.map((myData, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                alt="swiper img"
                
                src={myData.img}
                className="swiper-slide img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MySwiper;
