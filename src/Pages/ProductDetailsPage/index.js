import React, { useContext } from "react";
import { db1 } from "../../db";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/shop-context";
import {
  DetailesContainer,
  DetailesWrapper,
  DetailesImgWrapper,
  DetailesImg,
  DetailesContentWrapper,
  DetailesHeaderWrapper,
  DetailesHeader,
  DetailesParaWrapper,
  DetailesPara,
  DetailesPriceWrapper,
  DetailesPrice,
  AddToCartButtonWrapper,
  AddToCartButton,
} from "./DetailsElements";
import { Container1 } from "../../Core-UI/MainContainers";


const ProductDetails = () => {
  const { cartItems, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const myProduct = db1.find((e) => e.id === Number(productId));

  return (
    <Container1>
      <DetailesContainer>
        <DetailesWrapper>
          <DetailesImgWrapper>
            <DetailesImg alt="img" src={myProduct.picture} />
          </DetailesImgWrapper>
          <DetailesContentWrapper>
            <DetailesHeaderWrapper>
              <DetailesHeader>{myProduct.header}</DetailesHeader>
            </DetailesHeaderWrapper>
            <DetailesParaWrapper>
              <DetailesPara>{myProduct.paragraph}</DetailesPara>
            </DetailesParaWrapper>
            <DetailesParaWrapper>
              <DetailesPara>{myProduct.category} : دسته بندی </DetailesPara>
            </DetailesParaWrapper>
            <DetailesPriceWrapper>
              <DetailesPrice> {myProduct.price} : قیمت </DetailesPrice>
            </DetailesPriceWrapper>
            <DetailesPriceWrapper>
              <DetailesPrice>
                <del style={{ opacity: "0.4" }}>{myProduct.currentPrice}</del> :
                قیمت قبلی
              </DetailesPrice>
            </DetailesPriceWrapper>
          </DetailesContentWrapper>
          <AddToCartButtonWrapper>
            <AddToCartButton
              onClick={() => addToCart(myProduct.id)}
              disabled={cartItems[myProduct.id] > 0 ? true : false}
              style={
                cartItems[myProduct.id] > 0
                  ? { backgroundColor: "#bebebe" }
                  : { backgroundColor: "#445215" }
              }
            >
              {cartItems[myProduct.id] ? "اضافه شد" : "خرید"}
            </AddToCartButton>
          </AddToCartButtonWrapper>
        </DetailesWrapper>
      </DetailesContainer>
    </Container1>
  );
};

export default ProductDetails;
