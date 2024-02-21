import React from "react";
import "../Section3.css";
import {
  SwiperPhotoWrapper,
  SwiperPhoto,
  SwiperHeaderWrapper,
  SwiperHeader,
  SwiperParaWrapper,
  SwiperPara,
  SwiperStarWrapper,
  SwiperCodeWrapper,
  SwiperCode,
  SwiperPricePurchaseWrapper,
  SwiperPriceWrapper,
  SwiperPrice,
  SwiperPurchaseWrapper,
  SwiperPurchaseLink,
  SwiperPurchase,
  SwiperDiscountMoreWrapper,
  SwiperDiscountWrapper,
  SwiperDiscount,
  SwiperMoreLinkWrapper,
  SwiperMoreLink,
  SwiperMoreTextWrapper,
  SwiperMoreText,
  SwiperMoreIconWrapper,
  SwiperMoreIcon,
} from "../Section3Elements";
import myImg from "../../../../Assets/Png/9.jpg";


const SliderInnerComponents = () => {
  return (
    <>
      <SwiperPhotoWrapper>
        <SwiperPhoto alt="slider photo" src={myImg}></SwiperPhoto>
      </SwiperPhotoWrapper>
      <SwiperHeaderWrapper>
        <SwiperHeader> Lorem ipsum dolor </SwiperHeader>
      </SwiperHeaderWrapper>
      <SwiperParaWrapper>
        <SwiperPara>
          Lorem ipsum dolor sit amet Ultricies sed neque cras .{" "}
        </SwiperPara>
      </SwiperParaWrapper>
      <SwiperStarWrapper>
       
      </SwiperStarWrapper>
      <SwiperCodeWrapper>
        <SwiperCode></SwiperCode>
      </SwiperCodeWrapper>
      <SwiperPricePurchaseWrapper>
        <SwiperPriceWrapper>
          <SwiperPrice></SwiperPrice>
        </SwiperPriceWrapper>
        <SwiperPurchaseWrapper>
          <SwiperPurchaseLink>
            <SwiperPurchase alt="" src="" />
          </SwiperPurchaseLink>
        </SwiperPurchaseWrapper>
      </SwiperPricePurchaseWrapper>
      <SwiperDiscountMoreWrapper>
        <SwiperDiscountWrapper>
          <SwiperDiscount></SwiperDiscount>
        </SwiperDiscountWrapper>
        <SwiperMoreLinkWrapper>
          <SwiperMoreLink>
            <SwiperMoreTextWrapper>
              <SwiperMoreText></SwiperMoreText>
            </SwiperMoreTextWrapper>
            <SwiperMoreIconWrapper>
              <SwiperMoreIcon alt="" src="" />
            </SwiperMoreIconWrapper>
          </SwiperMoreLink>
        </SwiperMoreLinkWrapper>
      </SwiperDiscountMoreWrapper>
    </>
  );
};

export default SliderInnerComponents;
