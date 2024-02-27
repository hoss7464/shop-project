import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Section3.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from "./SliderInnerComponents";
import { Data2 } from "../../../../Helpers/Swipers";

const MySlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,]}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween:10
          },
          577:{
            slidesPerView:2,
            spaceBetween:10
          },
          769: {
            slidesPerView: 3,
            spaceBetween:15
          },
          1080:{
            slidesPerView:4,
            spaceBetween:20
          }
        }}
      >
        {Data2.map((myData2, index) => {
          return (
            <SwiperSlide className="swiper-slide1" key={index}>
              <SliderInnerComponents
                myAlt1={myData2.alt1}
                myImg1={myData2.src1}
                myHeader={myData2.sliderHeader}
                myPara={myData2.sliderPara}
                myCode={myData2.code}
                myPrice={myData2.sliderPrice}
                myCurrentPrice={myData2.sliderCurrentPrice}
                myDiscount={myData2.discount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MySlider;
