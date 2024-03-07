import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Section3/Section3.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from "../../Section3/Slider/SliderInnerComponents";
import { Data5 } from "../../../../Helpers/Swipers";

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
            slidesPerView:3,
            spaceBetween:20
          },
          1440:{
            slidesPerView:4,
            spaceBetween:20
          }
        }}
      >
        {Data5.map((myData5, index) => {
          return (
            <SwiperSlide className="swiper-slide1" key={index}>
              <SliderInnerComponents
                myAlt1={myData5.alt1}
                myImg1={myData5.src1}
                myHeader={myData5.sliderHeader}
                myPara={myData5.sliderPara}
                myCode={myData5.code}
                myPrice={myData5.sliderPrice}
                myCurrentPrice={myData5.sliderCurrentPrice}
                myDiscount={myData5.discount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MySlider;
