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
import myLogOutBtn from "../../../Assets/Svg/LogOutBtnSvg.svg"

const UserLogOutBtn = ({handleLogout}) => {
  const { isOpen2 } = useContext(ShopContext);
  return (
    <>
      <UserShrinkBtnWrapper>
        <UserShrinkBtnWrapper2 onClick={handleLogout} >
          <UserShrinkBtnTextWrapper>
            <UserShrinkBtnText>{isOpen2 ? "" : "خروج"}</UserShrinkBtnText>
          </UserShrinkBtnTextWrapper>
          <UserShrinkBtnIconWrapper>
            <UserShrinkBtnIcon
              alt="log out btn"
              src={myLogOutBtn}
              style={{width: "19px", height: "20px", marginLeft: "0.5rem"}}
            />
          </UserShrinkBtnIconWrapper>
        </UserShrinkBtnWrapper2>
      </UserShrinkBtnWrapper>
    </>
  );
};

export default UserLogOutBtn;
