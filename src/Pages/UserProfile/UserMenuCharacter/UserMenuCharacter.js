import React, {useContext} from "react";
import "../UserProfile.css"
import {
  UserCharacterContainer,
  UserCharacterWrapper,
  UserCharacterIconWrapper,
  UserCharacterIcon,
  UserCharacterTextWrapper,
  UserCharacterUpperTextWrapper,
  UserCharacterUpperText,
  UserCharacterLowerTextWrapper,
  UserCharacterLowerText,
} from "../UserProfileElements";
import { ShopContext } from "../../../Context/shop-context";
import { UserProfileData1 } from "../../../Helpers/UserProfileData";
import myMenuUserImg from "../../../Assets/Png/14.jpg"

const UserMenuCharacter = () => {
    const { isOpen2 } = useContext(ShopContext);
  return (
    <>
      <UserCharacterContainer>
        <UserCharacterWrapper>

          <UserCharacterTextWrapper className={isOpen2 ? "transition3" : "transition4"}  >
            <UserCharacterUpperTextWrapper >
              <UserCharacterUpperText >
                حسین فتح الهی
              </UserCharacterUpperText>
            </UserCharacterUpperTextWrapper>
            <UserCharacterLowerTextWrapper >
              <UserCharacterLowerText >! {UserProfileData1.text6}</UserCharacterLowerText>
            </UserCharacterLowerTextWrapper>
          </UserCharacterTextWrapper>

          <UserCharacterIconWrapper>
            <UserCharacterIcon alt="person" src={myMenuUserImg} />
          </UserCharacterIconWrapper>

        </UserCharacterWrapper>
      </UserCharacterContainer>
    </>
  );
};

export default UserMenuCharacter;
