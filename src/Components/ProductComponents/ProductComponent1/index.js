import React from "react";
import { ProductContainer } from "./ProductComponentEl1";
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
  SwiperMoreIconWrapper,
  SwiperMoreIcon,
} from "../../../Pages/LandingPage/Section3/Section3Elements";
import myImg2 from "../../../../Assets/Svg/basket1.svg";
import myImg3 from "../../../../Assets/Svg/pen1.svg";

const ProductComponent1 = ({
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
      <ProductContainer>
        <SwiperPhotoWrapper>
          <SwiperPhoto alt={myAlt1} src={myImg1}></SwiperPhoto>
        </SwiperPhotoWrapper>
        <SwiperHeaderWrapper>
          <SwiperHeader>{myHeader}</SwiperHeader>
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
              <del style={{ opacity: "0.2" }}>{myCurrentPrice} ت</del>
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
            <SwiperMoreLink to="/productdetails">بیشتر</SwiperMoreLink>
            <SwiperMoreIconWrapper>
              <SwiperMoreIcon alt="more details" src={myImg3} />
            </SwiperMoreIconWrapper>
          </SwiperMoreLinkWrapper>
        </SwiperDiscountMoreWrapper>
      </ProductContainer>
    </>
  );
};

export default ProductComponent1;
