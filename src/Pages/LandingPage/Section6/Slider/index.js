import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Section3/Section3.css"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderInnerComponents from '../../Section3/Slider/SliderInnerComponents';
import { Data4 } from '../../../../Helpers/Swipers';

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
        {Data4.map((myData4, index) => {
          return (
            <SwiperSlide className="swiper-slide1" key={index}>
              <SliderInnerComponents
                myAlt1={myData4.alt1}
                myImg1={myData4.src1}
                myHeader={myData4.sliderHeader}
                myPara={myData4.sliderPara}
                myCode={myData4.code}
                myPrice={myData4.sliderPrice}
                myCurrentPrice={myData4.sliderCurrentPrice}
                myDiscount={myData4.discount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
        </>
    );
};

export default MySlider;