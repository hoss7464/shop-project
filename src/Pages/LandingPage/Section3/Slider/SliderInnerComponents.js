import React, { useContext } from "react";
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
  SwiperDiscountMoreWrapper,
  SwiperDiscountWrapper,
  SwiperDiscount,
  SwiperMoreLinkWrapper,
  SwiperMoreLink,
  SwiperMoreIconWrapper,
  SwiperMoreIcon,
  PurchaseButton,
} from "../Section3Elements";
import myImg3 from "../../../../Assets/Svg/pen1.svg";
import { ShopContext } from "../../../../Context/shop-context";

const SliderInnerComponents = ({
  myId,
  myAlt1,
  myImg1,
  myHeader,
  myPara,
  myCode,
  myPrice,
  myCurrentPrice,
  myDiscount,
  myRoute,
}) => {
  const { cartItems, addToCart } = useContext(ShopContext);

  return (
    <>
      <SwiperPhotoWrapper>
        <SwiperPhoto alt={myAlt1} src={myImg1}></SwiperPhoto>
      </SwiperPhotoWrapper>
      <SwiperHeaderWrapper>
        <SwiperHeader>{myHeader}</SwiperHeader>
      </SwiperHeaderWrapper>
      <SwiperParaWrapper>
        <SwiperPara>{myPara}</SwiperPara>
      </SwiperParaWrapper>

      <SwiperPricePurchaseWrapper>
        <SwiperPriceWrapper>
          <SwiperPrice>{myPrice} ت</SwiperPrice>
          <SwiperPrice>
            <del style={{ opacity: "0.2" }}>{myCurrentPrice} ت</del>
          </SwiperPrice>
        </SwiperPriceWrapper>

        <SwiperPurchaseWrapper>
          <SwiperCodeWrapper>
            <SwiperCode>کد : {myCode}</SwiperCode>
          </SwiperCodeWrapper>
        </SwiperPurchaseWrapper>
      </SwiperPricePurchaseWrapper>
      <SwiperDiscountMoreWrapper>
        <SwiperDiscountWrapper>
          <SwiperDiscount>{myDiscount}</SwiperDiscount>
        </SwiperDiscountWrapper>
        <SwiperMoreLinkWrapper>
          <SwiperMoreLink to={`/productdetails/${myRoute}`}>بیشتر</SwiperMoreLink>
          <SwiperMoreIconWrapper>
            <SwiperMoreIcon alt="more details" src={myImg3} />
          </SwiperMoreIconWrapper>
        </SwiperMoreLinkWrapper>
      </SwiperDiscountMoreWrapper>
      <PurchaseButton
        onClick={() => addToCart(myId)}
        disabled={cartItems[myId] > 0 ? true : false}
        style={cartItems[myId] > 0 ? {backgroundColor : "#bebebe"} : {backgroundColor : "#445215"}}
      >
        {cartItems[myId] ? "اضافه شد" : "خرید"}
      </PurchaseButton>
    </>
  );
};

export default SliderInnerComponents;
