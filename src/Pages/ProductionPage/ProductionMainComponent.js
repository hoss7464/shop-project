import React from "react";
import {
  ProductComponWrapper,
  ProductComponNameBrandWrapper,
  ProductComponNameWrapper,
  ProductComponBrandWrapper,
} from "./ProductElements";
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
  SwiperDiscountMoreWrapper,
  SwiperDiscountWrapper,
  SwiperDiscount,
  SwiperMoreLinkWrapper,
  SwiperMoreLink,
  SwiperMoreIconWrapper,
  SwiperMoreIcon,
} from "../LandingPage/Section3/Section3Elements";
import myImg3 from "../../Assets/Svg/pen1.svg";

const ProductionMainComponent = ({
  product,
  brand,
  picture,
  header,
  paragraph,
  price,
  currentPrice,
  code,
  discount,
  myRoute,
}) => {
  return (
    <>
      <ProductComponWrapper>
        <SwiperPhotoWrapper>
          <SwiperPhoto alt="img" src={picture}></SwiperPhoto>
        </SwiperPhotoWrapper>
        <SwiperHeaderWrapper>
          <SwiperHeader>{header}</SwiperHeader>
        </SwiperHeaderWrapper>
        <SwiperParaWrapper>
          <SwiperPara>{paragraph}</SwiperPara>
        </SwiperParaWrapper>

        <SwiperPricePurchaseWrapper>
          <SwiperPriceWrapper>
            <SwiperPrice>{price} ت</SwiperPrice>
            <SwiperPrice>
              <del style={{ opacity: "0.2" }}>{currentPrice} ت</del>
            </SwiperPrice>
          </SwiperPriceWrapper>

          <SwiperPurchaseWrapper>
            <SwiperCodeWrapper>
              <SwiperCode>کد : {code}</SwiperCode>
            </SwiperCodeWrapper>
          </SwiperPurchaseWrapper>
        </SwiperPricePurchaseWrapper>
        <SwiperDiscountMoreWrapper>
          <SwiperDiscountWrapper>
            <SwiperDiscount>{discount}</SwiperDiscount>
          </SwiperDiscountWrapper>
          <SwiperMoreLinkWrapper>
            <SwiperMoreLink to={`/productdetails/${myRoute}`}>
              بیشتر
            </SwiperMoreLink>
            <SwiperMoreIconWrapper>
              <SwiperMoreIcon alt="more details" src={myImg3} />
            </SwiperMoreIconWrapper>
          </SwiperMoreLinkWrapper>
        </SwiperDiscountMoreWrapper>
        <ProductComponNameBrandWrapper>
          <ProductComponNameWrapper>
            <SwiperCode>{product}</SwiperCode>
          </ProductComponNameWrapper>
          <ProductComponBrandWrapper>
            <SwiperCode>{brand}</SwiperCode>
          </ProductComponBrandWrapper>
        </ProductComponNameBrandWrapper>
      </ProductComponWrapper>
    </>
  );
};

export default ProductionMainComponent;
