import React, { useContext } from "react";
import "../UserProfile.css";
import {
  UserMenuLinksContainer,
  UserMenuLinkWrapper,
  UserMenuLink,
  UserMenuLinkIconWrapper,
  UserMenuLinktextWrapper,
  UserMenuLinktext,
  UserMenuLinkIconWrapper2,
} from "../UserProfileElements";
import { ShopContext } from "../../../Context/shop-context";
import { useLocation } from "react-router-dom";

const UserMenuLinks = ({ myMenuLink, myMenuText, myMenuIcon }) => {
  const { isOpen2 } = useContext(ShopContext);
  const location = useLocation()
  return (
    <>
      <UserMenuLinksContainer>
        <UserMenuLinkWrapper>
          <UserMenuLink to={myMenuLink}>
            <UserMenuLinktextWrapper
              className={isOpen2 ? "transition1" : "transition2"}
            >
              <UserMenuLinktext className={location.pathname.includes(`/${myMenuLink}`) ? "active-text1" : "text1"} >{myMenuText}</UserMenuLinktext>
            </UserMenuLinktextWrapper>

            <UserMenuLinkIconWrapper >
              <UserMenuLinkIconWrapper2 className={location.pathname.includes(`/${myMenuLink}`) ? "active-icon" : "icon"} >{myMenuIcon}</UserMenuLinkIconWrapper2>
            </UserMenuLinkIconWrapper>
          </UserMenuLink>
        </UserMenuLinkWrapper>
      </UserMenuLinksContainer>
    </>
  );
};

export default UserMenuLinks;
