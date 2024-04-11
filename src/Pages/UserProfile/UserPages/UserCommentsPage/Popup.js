import React, { useContext } from "react";
import {
  PopupContainer,
  PupupMainWrapper,
  PupupCloseBtnWrapper,
  PupupCloseBtn,
} from "./CommentsElements";
import MyCloseBtn from "../../../../Assets/Svg/CloseBtn2.svg";
import { ShopContext } from "../../../../Context/shop-context";
import CommentForm from "./CommentForm";

const Popup = () => {
  const { toggle6 } = useContext(ShopContext);
  return (
    <>
      <PopupContainer>
        <PupupMainWrapper>
          <PupupCloseBtnWrapper onClick={toggle6} >
            <PupupCloseBtn alt="close btn" src={MyCloseBtn} />
          </PupupCloseBtnWrapper>
          <CommentForm />
        </PupupMainWrapper>
      </PopupContainer>
    </>
  );
};

export default Popup;
