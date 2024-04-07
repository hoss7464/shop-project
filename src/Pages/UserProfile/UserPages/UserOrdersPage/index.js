import React, { useContext } from "react";
import { db1 } from "../../../../db";
import {
  OrdersContainer,
  OrdersWrapper,
  OrdersNavbar,
  OrderSearchWrapper,
  OrderSerachInputWrapper,
  OrderSearchInput,
  OrderSearchIconWrapper,
  OrderSearchIcon,
  OrderFilterMiniSearchWrapper,
  OrderMiniSearchIconWrapper,
  OrderMiniSearchInputWrapper,
  OrderMiniSearchIcon,
  OrderFilterWrapper,
  OrderFilterDropdownWrapper,
  OrderFilterTextWrapper,
  OrderFilterText,
  OrderFilterIconWrapper,
  OrderFilterIcon,
  OrderComponentMainWrapper,
} from "./UserOrdersElements";
import { ShopContext } from "../../../../Context/shop-context";
import MySearchIcon2 from "../../../../Assets/Svg/SearchIcon2.svg";
import MyOrderFilterIcon from "../../../../Assets/Svg/OrderFilterIcon.svg";
import { UserProfileData1 } from "../../../../Helpers/UserProfileData";
import UserOrdersComponent from "./UserOrdersComponent";


const UserOrders = () => {
  const { toggle4, isOpen4, toggle5, isOpen5, cartItems } =
    useContext(ShopContext);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("fa-IR");
    const formattedTime = currentDate.toLocaleTimeString("fa-IR");

  return (
    <>
      <OrdersContainer>
        <OrdersWrapper>
          <OrdersNavbar>
            <OrderSearchWrapper>
              <OrderSerachInputWrapper>
                <OrderSearchInput placeholder="جستجو" />
              </OrderSerachInputWrapper>
              <OrderSearchIconWrapper>
                <OrderSearchIcon alt="search icon" src={MySearchIcon2} />
              </OrderSearchIconWrapper>
            </OrderSearchWrapper>
            <OrderFilterMiniSearchWrapper>
              <OrderMiniSearchIconWrapper onClick={toggle5}>
                <OrderMiniSearchIcon alt="mini search" src={MySearchIcon2} />
              </OrderMiniSearchIconWrapper>

              <OrderFilterWrapper onClick={toggle4}>
                <OrderFilterTextWrapper>
                  <OrderFilterText>{UserProfileData1.text7}</OrderFilterText>
                </OrderFilterTextWrapper>
                <OrderFilterIconWrapper>
                  <OrderFilterIcon alt="filter icon" src={MyOrderFilterIcon} />
                </OrderFilterIconWrapper>
              </OrderFilterWrapper>
            </OrderFilterMiniSearchWrapper>
          </OrdersNavbar>

          {isOpen5 && (
            <OrderMiniSearchInputWrapper>
              <OrderSerachInputWrapper>
                <OrderSearchInput
                  placeholder="جستجو"
                  style={{ height: "28px" }}
                />
              </OrderSerachInputWrapper>
            </OrderMiniSearchInputWrapper>
          )}

          {isOpen4 && <OrderFilterDropdownWrapper></OrderFilterDropdownWrapper>}

          <OrderComponentMainWrapper>
          {db1.map((myData2, index) => {
                if (cartItems[myData2.id] > 0) {
                  return (
                    <UserOrdersComponent
                      key={index}
                      productImg={myData2.picture}
                      orderPrice={myData2.price}
                      orderType="تحویل / جاری"
                      orderDate={formattedDate} 
                      orderTime={formattedTime}
                      productName={myData2.product}
                      orderCode={Math.floor(Math.random() * 900) + 100}

                    />
                  );
                }
              })}
          </OrderComponentMainWrapper>
        </OrdersWrapper>
      </OrdersContainer>
    </>
  );
};

export default UserOrders;
