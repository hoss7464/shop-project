import React, { useContext } from "react";
import "./UserAddress.css"
import {
  AddressContainer,
  AddressWrapper,
  AddressLocationIconTextWrapper,
  AddressDetailWrapper1,
  AddressDetailWrapper2,
  AddressTopicWrapper1,
  AddressTopicWrapper2,
  AddressTopic,
  AddressParaWrapper1,
  AddressParaWrapper2,
  AddressPara,
  AddressForm,
  AddressInputLabelWrapper,
  AddressLabelWrapper,
  AddressLabel,
  AddressInputWrapper,
  AddressInput,
} from "./UserAddressElements";
import {
  OrdersNavbar,
  OrderFilterWrapper,
  OrderFilterTextWrapper,
  OrderFilterText,
  OrderFilterIconWrapper,
  OrderFilterIcon,
} from "../UserOrdersPage/UserOrdersElements";
import {
  PopupContainer,
  PupupMainWrapper,
  PupupCloseBtnWrapper,
  PupupCloseBtn,
} from "../UserCommentsPage/CommentsElements";
import {
  CommentNav,
  CommentNavTextIconWrapper,
  CommentNavTextWrapper,
  CommentNavText,
  CommentNavIconWrapper,
  CommentNavIcon,
  CommentFormSubmitBtn,
} from "../UserCommentsPage/CommentsElements";
import { ShopContext } from "../../../../Context/shop-context";
import MyLocationIcon from "../../../../Assets/Svg/LocationIcon2.svg";
import { UserProfileData1 } from "../../../../Helpers/UserProfileData";
import MyEditIcon1 from "../../../../Assets/Svg/EditIcon1.svg";
import MyCloseBtn from "../../../../Assets/Svg/CloseBtn2.svg";

const UserAddress = () => {
  const {
    toggle6,
    isOpen6,
    paragraphs,
    addressHandleChange,
    handleApplyEdits,
  } = useContext(ShopContext);
  return (
    <>
      <AddressContainer>
        <AddressWrapper>
          <OrdersNavbar style={{ justifyContent: "flex-end" }}>
            <OrderFilterWrapper
              style={{ marginRight: "1rem" }}
              onClick={toggle6}
            >
              <OrderFilterTextWrapper className="display" >
                <OrderFilterText>{UserProfileData1.text21}</OrderFilterText>
              </OrderFilterTextWrapper>
              <OrderFilterIconWrapper>
                <OrderFilterIcon alt="edit icon" src={MyEditIcon1} />
              </OrderFilterIconWrapper>
            </OrderFilterWrapper>
            <AddressLocationIconTextWrapper>
              <OrderFilterTextWrapper className="display" >
                <OrderFilterText>{UserProfileData1.text20}</OrderFilterText>
              </OrderFilterTextWrapper>
              <OrderFilterIconWrapper>
                <OrderFilterIcon alt="location icon" src={MyLocationIcon} />
              </OrderFilterIconWrapper>
            </AddressLocationIconTextWrapper>
          </OrdersNavbar>
          <AddressDetailWrapper1>
            <AddressDetailWrapper2>
              <AddressParaWrapper1>
                <AddressParaWrapper2>
                  <AddressPara>{paragraphs.paragraph1}</AddressPara>
                </AddressParaWrapper2>
                <AddressParaWrapper2>
                  <AddressPara>{paragraphs.paragraph2}</AddressPara>
                </AddressParaWrapper2>
                <AddressParaWrapper2>
                  <AddressPara>{paragraphs.paragraph3}</AddressPara>
                </AddressParaWrapper2>
                <AddressParaWrapper2>
                  <AddressPara>12345678901</AddressPara>
                </AddressParaWrapper2>
                <AddressParaWrapper2>
                  <AddressPara>{paragraphs.paragraph4}</AddressPara>
                </AddressParaWrapper2>
                <AddressParaWrapper2>
                  <AddressPara>{paragraphs.paragraph5}</AddressPara>
                </AddressParaWrapper2>
              </AddressParaWrapper1>
              <AddressTopicWrapper1>
                <AddressTopicWrapper2>
                  <AddressTopic>{UserProfileData1.text22}</AddressTopic>
                </AddressTopicWrapper2>
                <AddressTopicWrapper2>
                  <AddressTopic>{UserProfileData1.text23}</AddressTopic>
                </AddressTopicWrapper2>
                <AddressTopicWrapper2>
                  <AddressTopic>{UserProfileData1.text24}</AddressTopic>
                </AddressTopicWrapper2>
                <AddressTopicWrapper2>
                  <AddressTopic>{UserProfileData1.text25}</AddressTopic>
                </AddressTopicWrapper2>
                <AddressTopicWrapper2>
                  <AddressTopic>{UserProfileData1.text26}</AddressTopic>
                </AddressTopicWrapper2>
                <AddressTopicWrapper2>
                  <AddressTopic>{UserProfileData1.text27}</AddressTopic>
                </AddressTopicWrapper2>
              </AddressTopicWrapper1>
            </AddressDetailWrapper2>
          </AddressDetailWrapper1>
          {isOpen6 && (
            <PopupContainer>
              <PupupMainWrapper>
                <PupupCloseBtnWrapper onClick={toggle6}>
                  <PupupCloseBtn alt="close button" src={MyCloseBtn} />
                </PupupCloseBtnWrapper>
                <AddressForm onSubmit={handleApplyEdits} >
                  <CommentNav>
                    <CommentNavTextIconWrapper>
                      <CommentNavTextWrapper>
                        <CommentNavText>ویرایش اطلاعات</CommentNavText>
                      </CommentNavTextWrapper>
                      <CommentNavIconWrapper>
                        <CommentNavIcon alt="edit icon" src={MyEditIcon1} />
                      </CommentNavIconWrapper>
                    </CommentNavTextIconWrapper>
                  </CommentNav>
                  <AddressInputLabelWrapper>
                    <AddressLabelWrapper>
                      <AddressLabel> {UserProfileData1.text22} </AddressLabel>
                    </AddressLabelWrapper>
                    <AddressInputWrapper>
                      <AddressInput
                        placeholder="ویرایش"
                        type="text"
                        name="paragraph1"
                        value={paragraphs.paragraph1}
                        onChange={addressHandleChange}
                      />
                    </AddressInputWrapper>
                  </AddressInputLabelWrapper>

                  <AddressInputLabelWrapper>
                    <AddressLabelWrapper>
                      <AddressLabel>{UserProfileData1.text23}</AddressLabel>
                    </AddressLabelWrapper>
                    <AddressInputWrapper>
                      <AddressInput
                        placeholder="ویرایش"
                        type="text"
                        name="paragraph1"
                        value={paragraphs.paragraph2}
                        onChange={addressHandleChange}
                      />
                    </AddressInputWrapper>
                  </AddressInputLabelWrapper>

                  <AddressInputLabelWrapper>
                    <AddressLabelWrapper>
                      <AddressLabel>{UserProfileData1.text24}</AddressLabel>
                    </AddressLabelWrapper>
                    <AddressInputWrapper>
                      <AddressInput
                        placeholder="ویرایش"
                        type="text"
                        name="paragraph1"
                        value={paragraphs.paragraph3}
                        onChange={addressHandleChange}
                      />
                    </AddressInputWrapper>
                  </AddressInputLabelWrapper>

                  <AddressInputLabelWrapper>
                    <AddressLabelWrapper>
                      <AddressLabel>{UserProfileData1.text26}</AddressLabel>
                    </AddressLabelWrapper>
                    <AddressInputWrapper>
                      <AddressInput
                        placeholder="ویرایش"
                        type="text"
                        name="paragraph1"
                        value={paragraphs.paragraph4}
                        onChange={addressHandleChange}
                      />
                    </AddressInputWrapper>
                  </AddressInputLabelWrapper>

                  <AddressInputLabelWrapper>
                    <AddressLabelWrapper>
                      <AddressLabel>{UserProfileData1.text27}</AddressLabel>
                    </AddressLabelWrapper>
                    <AddressInputWrapper>
                      <AddressInput
                        placeholder="ویرایش"
                        type="text"
                        name="paragraph1"
                        value={paragraphs.paragraph5}
                        onChange={addressHandleChange}
                      />
                    </AddressInputWrapper>
                  </AddressInputLabelWrapper>
                  <CommentFormSubmitBtn
                    type="submit"
                    style={{ marginTop: "1rem" }}
                  >
                    ویرایش
                  </CommentFormSubmitBtn>
                </AddressForm>
              </PupupMainWrapper>
            </PopupContainer>
          )}
        </AddressWrapper>
      </AddressContainer>
    </>
  );
};

export default UserAddress;
