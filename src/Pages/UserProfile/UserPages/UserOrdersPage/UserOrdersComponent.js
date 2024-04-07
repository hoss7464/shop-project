import React from "react";
import {
  OrderComponentWrapper,
  OrderComponentImgWrapper,
  OrderComponentImg,
  OrderComponentContentWrapper,
  OrderComponentsContentColumn1,
  OrderComponentsContentColumn2,
  OrderComponentTopicParaWrapper,
  OrderComponentTopicWrapper,
  OrderComponentTopic,
  OrderComponentParaWrapper,
  OrderComponentPara,
} from "./UserOrdersElements";
import { UserProfileData1 } from "../../../../Helpers/UserProfileData";

const UserOrdersComponent = ({
  orderDate,
  orderTime,
  orderPrice,
  productName,
  orderType,
  orderCode,
  productImg,
}) => {
  return (
    <>
      <OrderComponentWrapper>
        <OrderComponentImgWrapper>
          <OrderComponentImg alt="" src={productImg} />
        </OrderComponentImgWrapper>
        <OrderComponentContentWrapper>
          <OrderComponentsContentColumn1>
            <OrderComponentTopicParaWrapper style={{ marginBottom: "2rem" }}>
              <OrderComponentParaWrapper>
                <OrderComponentPara>{orderDate}</OrderComponentPara>
              </OrderComponentParaWrapper>
              <OrderComponentTopicWrapper>
                <OrderComponentTopic>
                  : {UserProfileData1.text11}
                </OrderComponentTopic>
              </OrderComponentTopicWrapper>
            </OrderComponentTopicParaWrapper>

            <OrderComponentTopicParaWrapper style={{ marginBottom: "2rem" }}>
              <OrderComponentParaWrapper>
                <OrderComponentPara>{orderTime}</OrderComponentPara>
              </OrderComponentParaWrapper>
              <OrderComponentTopicWrapper>
                <OrderComponentTopic>
                  : {UserProfileData1.text12}
                </OrderComponentTopic>
              </OrderComponentTopicWrapper>
            </OrderComponentTopicParaWrapper>

            <OrderComponentTopicParaWrapper>
              <OrderComponentParaWrapper>
                <OrderComponentPara>{orderPrice}</OrderComponentPara>
              </OrderComponentParaWrapper>
              <OrderComponentTopicWrapper>
                <OrderComponentTopic>
                  : {UserProfileData1.text13}
                </OrderComponentTopic>
              </OrderComponentTopicWrapper>
            </OrderComponentTopicParaWrapper>
          </OrderComponentsContentColumn1>

          <OrderComponentsContentColumn2>
            <OrderComponentTopicParaWrapper style={{ marginBottom: "2rem" }}>
              <OrderComponentParaWrapper>
                <OrderComponentPara>{productName}</OrderComponentPara>
              </OrderComponentParaWrapper>
              <OrderComponentTopicWrapper>
                <OrderComponentTopic>
                  : {UserProfileData1.text8}
                </OrderComponentTopic>
              </OrderComponentTopicWrapper>
            </OrderComponentTopicParaWrapper>

            <OrderComponentTopicParaWrapper style={{ marginBottom: "2rem" }}>
              <OrderComponentParaWrapper>
                <OrderComponentPara>{orderType}</OrderComponentPara>
              </OrderComponentParaWrapper>
              <OrderComponentTopicWrapper>
                <OrderComponentTopic>
                  : {UserProfileData1.text9}
                </OrderComponentTopic>
              </OrderComponentTopicWrapper>
            </OrderComponentTopicParaWrapper>

            <OrderComponentTopicParaWrapper>
              <OrderComponentParaWrapper>
                <OrderComponentPara>{orderCode}</OrderComponentPara>
              </OrderComponentParaWrapper>
              <OrderComponentTopicWrapper>
                <OrderComponentTopic>
                  : {UserProfileData1.text10}
                </OrderComponentTopic>
              </OrderComponentTopicWrapper>
            </OrderComponentTopicParaWrapper>
          </OrderComponentsContentColumn2>
        </OrderComponentContentWrapper>
      </OrderComponentWrapper>
    </>
  );
};

export default UserOrdersComponent;
