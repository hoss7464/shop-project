import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Section3.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from "./SliderInnerComponents";
import { db1 } from "../../../../db";

const MySlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          577: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {db1.map((myData2, index) => (
          <SwiperSlide className="swiper-slide1" key={index}>
            <SliderInnerComponents
            myId={myData2.id}
              myAlt1={myData2.product}
              myImg1={myData2.picture}
              myHeader={myData2.header}
              myPara={myData2.paragraph}
              myCode={myData2.code}
              myPrice={myData2.price}
              myCurrentPrice={myData2.currentPrice}
              myDiscount={myData2.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MySlider;
