import React, { useContext } from "react";
import {
  UserShrinkBtnWrapper,
  UserShrinkBtnWrapper2,
  UserShrinkBtnIconWrapper,
  UserShrinkBtnIcon,
  UserShrinkBtnTextWrapper,
  UserShrinkBtnText,
} from "../UserProfileElements";
import { ShopContext } from "../../../Context/shop-context";
import myShrinkBtnRight from "../../../Assets/Svg/ShrinkBtnRightSvg.svg";
import myShrinkBtnLeft from "../../../Assets/Svg/ShrinkBtnLeft.svg";

const UserShrinkBtn = ({handleLogout}) => {
  const { isOpen2, toggle2 } = useContext(ShopContext);
  return (
    <>
      <UserShrinkBtnWrapper onClick={handleLogout}>
        <UserShrinkBtnWrapper2 onClick={toggle2}>
          <UserShrinkBtnTextWrapper>
            <UserShrinkBtnText>{isOpen2 ? "" : "بستن"}</UserShrinkBtnText>
          </UserShrinkBtnTextWrapper>
          <UserShrinkBtnIconWrapper>
            <UserShrinkBtnIcon
              alt="shrink btn"
              src={isOpen2 ? myShrinkBtnLeft : myShrinkBtnRight}
            />
          </UserShrinkBtnIconWrapper>
        </UserShrinkBtnWrapper2>
      </UserShrinkBtnWrapper>
    </>
  );
};

export default UserShrinkBtn;
