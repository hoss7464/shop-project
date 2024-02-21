import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Section3/Section3.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from "../../Section3/Slider/SliderInnerComponents";
import { Data3 } from "../../../../Helpers/Swipers";

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
            slidesPerView:4,
            spaceBetween:20
          }
        }}
      >
        {Data3.map((myData3, index) => {
          return (
            <SwiperSlide className="swiper-slide1" key={index}>
              <SliderInnerComponents
                myAlt1={myData3.alt1}
                myImg1={myData3.src1}
                myHeader={myData3.sliderHeader}
                myPara={myData3.sliderPara}
                myCode={myData3.code}
                myPrice={myData3.sliderPrice}
                myCurrentPrice={myData3.sliderCurrentPrice}
                myDiscount={myData3.discount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MySlider;
