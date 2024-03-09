import React, { useContext } from "react";
import {
  PurchaseCompoContainer,
  PurchaseCompoWrapper,
  CompoIconWrapper,
  CompoIcon,
  CompoContentWrapper,
  CompoHeaderWrapper,
  CompoHeader,
  CompoPriceWrapper,
  CompoPrice,
  CounterWrapper,
  CounterBtnWrapper,
  CounterBtn,
  CounterBtnIconWrapper,
  CounterBtnMinusIcon,
  CounterBtnPlusIcon,
  CounterInputWrapper,
  CounterInput,
} from "./PurchaseElements";
import { ShopContext } from "../../Context/shop-context";

const PurchaseComponent1 = ({ myAlt1, myImg1, myHeader, myPrice, myId }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <PurchaseCompoContainer>
        <PurchaseCompoWrapper>
          <CompoIconWrapper>
            <CompoIcon alt={myAlt1} src={myImg1} />
          </CompoIconWrapper>
          <CompoContentWrapper>
            <CompoHeaderWrapper>
              <CompoHeader>{myHeader}</CompoHeader>
            </CompoHeaderWrapper>
            <CompoPriceWrapper>
              <CompoPrice> {myPrice}</CompoPrice>
            </CompoPriceWrapper>
            <CounterWrapper>
              <CounterBtnWrapper>
                <CounterBtn onClick={() => removeFromCart(myId)}>
                  <CounterBtnIconWrapper>
                    <CounterBtnMinusIcon />
                  </CounterBtnIconWrapper>
                </CounterBtn>
              </CounterBtnWrapper>
              <CounterInputWrapper>
                <CounterInput
                  value={cartItems[myId]}
                  onChange={(e) => updateCartItemCount(Number(e.target.value), myId)}
                />
              </CounterInputWrapper>
              <CounterBtnWrapper>
                <CounterBtn onClick={() => addToCart(myId)}>
                  <CounterBtnIconWrapper>
                    <CounterBtnPlusIcon />
                  </CounterBtnIconWrapper>
                </CounterBtn>
              </CounterBtnWrapper>
            </CounterWrapper>
          </CompoContentWrapper>
        </PurchaseCompoWrapper>
      </PurchaseCompoContainer>
    </>
  );
};

export default PurchaseComponent1;
