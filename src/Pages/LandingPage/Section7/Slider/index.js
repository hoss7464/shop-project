import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Section3/Section3.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from "../../Section3/Slider/SliderInnerComponents";
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
        {db1.slice(24, 31).map((myData2, index) => {
          return (
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
                myRoute={myData2.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MySlider;
