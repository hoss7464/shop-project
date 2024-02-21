import React from "react";
import "../Section3.css";
import {
  SwiperPhotoWrapper,
  SwiperPhoto,
  SwiperHeaderWrapper,
  SwiperHeader,
  SwiperParaWrapper,
  SwiperPara,
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
import myImg2 from "../../../../Assets/Svg/basket1.svg";
import myImg3 from "../../../../Assets/Svg/pen1.svg";

const SliderInnerComponents = ({
  myAlt1,
  myImg1,
  myHeader,
  myPara,
  myCode,
  myPrice,
  myCurrentPrice,
  myDiscount,
}) => {
  return (
    <>
      <SwiperPhotoWrapper>
        <SwiperPhoto alt={myAlt1} src={myImg1}></SwiperPhoto>
      </SwiperPhotoWrapper>
      <SwiperHeaderWrapper>
        <SwiperHeader> {myHeader} </SwiperHeader>
      </SwiperHeaderWrapper>
      <SwiperParaWrapper>
        <SwiperPara>{myPara}</SwiperPara>
      </SwiperParaWrapper>
      <SwiperCodeWrapper>
        <SwiperCode>کد : {myCode}</SwiperCode>
      </SwiperCodeWrapper>
      <SwiperPricePurchaseWrapper>
        <SwiperPriceWrapper>
          <SwiperPrice>{myPrice} ت</SwiperPrice>
          <SwiperPrice>
            <del style={{ opacity: "0.5" }}>{myCurrentPrice} ت</del>
          </SwiperPrice>
        </SwiperPriceWrapper>
        <SwiperPurchaseWrapper>
          <SwiperPurchaseLink to="/purchase">
            <SwiperPurchase alt="basket" src={myImg2} />
          </SwiperPurchaseLink>
        </SwiperPurchaseWrapper>
      </SwiperPricePurchaseWrapper>
      <SwiperDiscountMoreWrapper>
        <SwiperDiscountWrapper>
          <SwiperDiscount>{myDiscount}</SwiperDiscount>
        </SwiperDiscountWrapper>
        <SwiperMoreLinkWrapper>
          <SwiperMoreLink>
            <SwiperMoreTextWrapper>
              <SwiperMoreText>بیشتر</SwiperMoreText>
            </SwiperMoreTextWrapper>
            <SwiperMoreIconWrapper>
              <SwiperMoreIcon alt="pen" src={myImg3} />
            </SwiperMoreIconWrapper>
          </SwiperMoreLink>
        </SwiperMoreLinkWrapper>
      </SwiperDiscountMoreWrapper>
    </>
  );
};

export default SliderInnerComponents;
