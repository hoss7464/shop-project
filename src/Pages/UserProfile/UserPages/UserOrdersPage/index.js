import React, { useContext, useState } from "react";
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
  OrderSortBtnWrapper,
  OrderSortBtn,
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

//We put these outside the component to prevent changing the time when sorting the itmes
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("fa-IR");
const formattedTime = currentDate.toLocaleTimeString("fa-IR");

const UserOrders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    toggle4,
    isOpen4,
    toggle5,
    isOpen5,
    cartItems,
    handleSort,
    sortOrder,
  } = useContext(ShopContext);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //Filtering and adding items if the id > 0
  const filteredProducts = db1.filter((myData2) => cartItems[myData2.id] > 0);

  // Sort the products based on sortOrder
  const sortedProducts =
    sortOrder === "expensive"
      ? [...filteredProducts].sort((a, b) => b.price - a.price)
      : [...filteredProducts].sort((a, b) => a.price - b.price);

  // Filter the products based on searchQuery
  const filteredAndSortedProducts = sortedProducts.filter((product) =>
    product.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <OrdersContainer>
        <OrdersWrapper>
          <OrdersNavbar>
            <OrderSearchWrapper>
              <OrderSerachInputWrapper>
                <OrderSearchInput
                  placeholder="جستجو"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
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
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </OrderSerachInputWrapper>
            </OrderMiniSearchInputWrapper>
          )}

          {isOpen4 && (
            <OrderFilterDropdownWrapper>
              <OrderSortBtnWrapper style={{ marginBottom: "0.5rem" }}>
                <OrderSortBtn onClick={() => handleSort("expensive")}>
                  گران ترین
                </OrderSortBtn>
              </OrderSortBtnWrapper>
              <OrderSortBtnWrapper>
                <OrderSortBtn onClick={() => handleSort("cheap")}>
                  ارزان ترین
                </OrderSortBtn>
              </OrderSortBtnWrapper>
            </OrderFilterDropdownWrapper>
          )}

          <OrderComponentMainWrapper>
            {filteredAndSortedProducts.map((myData2, index) => (
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
            ))}
          </OrderComponentMainWrapper>
        </OrdersWrapper>
      </OrdersContainer>
    </>
  );
};

export default UserOrders;
