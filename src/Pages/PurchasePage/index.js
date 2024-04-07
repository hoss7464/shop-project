import React, { useContext } from "react";
import {
  PurchaseContainer,
  PurchaseWrapper,
  PurchaseHeaderWrapper,
  PurchaseHeader,
  PurchaseWrapper2,
  PurchaseTotalAmountWrapper,
  PurchaseTotalAmount,
  CompleteLinkWrapper,
  CompleteLinkWrapper2,
  CompleteLink,
} from "./PurchaseElements";
import { db1 } from "../../db";
import { ShopContext } from "../../Context/shop-context";
import PurchaseComponent1 from "./PurchaseComponent1";
import { Container1 } from "../../Core-UI/MainContainers";
import { PurchasePageData1 } from "../../Helpers/PurchasePageData";

const Purchase = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <>
      <Container1>
        <PurchaseContainer>
          <PurchaseWrapper>
            <PurchaseHeaderWrapper>
              <PurchaseHeader>{PurchasePageData1.text1}</PurchaseHeader>
            </PurchaseHeaderWrapper>
            <PurchaseWrapper2>
              
              {totalAmount > 0 ? <CompleteLinkWrapper>
                <CompleteLinkWrapper2>
                  <CompleteLink to="" >{PurchasePageData1.text4}</CompleteLink>
                </CompleteLinkWrapper2>
              </CompleteLinkWrapper> : ""}
              
              {totalAmount > 0 ? <PurchaseTotalAmountWrapper>
                <PurchaseTotalAmount>
                {totalAmount} : {PurchasePageData1.text2}
                </PurchaseTotalAmount>
              </PurchaseTotalAmountWrapper> : <h2>{PurchasePageData1.text3}</h2> }
              
              {db1.map((myData2, index) => {
                if (cartItems[myData2.id] > 0) {
                  return (
                    <PurchaseComponent1
                      key={index}
                      myId={myData2.id}
                      myAlt1={myData2.product}
                      myImg1={myData2.picture}
                      myHeader={myData2.header}
                      myPrice={myData2.price}
                    />
                  );
                }
              })}
            </PurchaseWrapper2>
          </PurchaseWrapper>
        </PurchaseContainer>
      </Container1>
    </>
  );
};

export default Purchase;
