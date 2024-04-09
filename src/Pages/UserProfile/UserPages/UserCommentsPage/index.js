import React, { useContext } from "react";
import {
  CommentsContainer,
  CommentsWrapper,
  SubNavbar,
  SubNavbarContentWrapper,
  SubNavbarTextWrapper,
  SubNavbarText,
  CommentComponentMainWrapper,
} from "./CommentsElements";
import {
  OrdersNavbar,
  OrderSearchWrapper,
  OrderSerachInputWrapper,
  OrderSearchInput,
  OrderSearchIconWrapper,
  OrderSearchIcon,
  OrderFilterMiniSearchWrapper,
  OrderMiniSearchIconWrapper,
  OrderMiniSearchIcon,
  OrderMiniSearchInputWrapper,
  OrderFilterWrapper,
  OrderFilterTextWrapper,
  OrderFilterText,
  OrderFilterIconWrapper,
  OrderFilterIcon,
} from "../UserOrdersPage/UserOrdersElements";
import { ShopContext } from "../../../../Context/shop-context";
import MySearchIcon2 from "../../../../Assets/Svg/SearchIcon2.svg";
import { UserProfileData1 } from "../../../../Helpers/UserProfileData";
import myTrashIcon1 from "../../../../Assets/Svg/TrashIcon1.svg";
import UserCommentComponent from "./UserCommentComponent";

const UserComments = () => {
  const {
    toggle5,
    isOpen5,
    handleSearchInputChange,
    filteredAndSortedProducts,
    searchQuery,
    deleteSelectedProducts,
  } = useContext(ShopContext);

  const handleDeleteAllClick = () => {
    deleteSelectedProducts();
  };

  return (
    <>
      <CommentsContainer>
        <CommentsWrapper>
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

              <OrderFilterWrapper onClick={handleDeleteAllClick}>
                <OrderFilterTextWrapper>
                  <OrderFilterText>{UserProfileData1.text14}</OrderFilterText>
                </OrderFilterTextWrapper>
                <OrderFilterIconWrapper>
                  <OrderFilterIcon alt="trash icon" src={myTrashIcon1} />
                </OrderFilterIconWrapper>
              </OrderFilterWrapper>
            </OrderFilterMiniSearchWrapper>
          </OrdersNavbar>
          <SubNavbar>
            <SubNavbarContentWrapper>
              <SubNavbarTextWrapper>
                <SubNavbarText>{UserProfileData1.text19}</SubNavbarText>
              </SubNavbarTextWrapper>
              <SubNavbarTextWrapper>
                <SubNavbarText>{UserProfileData1.text18}</SubNavbarText>
              </SubNavbarTextWrapper>
              <SubNavbarTextWrapper>
                <SubNavbarText>{UserProfileData1.text16}</SubNavbarText>
              </SubNavbarTextWrapper>
              <SubNavbarTextWrapper>
                <SubNavbarText>{UserProfileData1.text15}</SubNavbarText>
              </SubNavbarTextWrapper>
            </SubNavbarContentWrapper>
          </SubNavbar>

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

          <CommentComponentMainWrapper>
            {filteredAndSortedProducts.map((myData2, index) => (
              <UserCommentComponent
                key={index}
                productPicture={myData2.picture}
                productName={myData2.product}
                productCategory={myData2.category}
                productId={myData2.id}
              />
            ))}
          </CommentComponentMainWrapper>
        </CommentsWrapper>
      </CommentsContainer>
    </>
  );
};

export default UserComments;
