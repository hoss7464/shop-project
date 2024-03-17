import React, { useContext } from "react";
import {
  UserContainer,
  UserWrapper,
  UserMenuWrapper,
  UserGlobalWrapper,
  UserShrinkBtnContainer,
  UserMenuBasketIcon,
  UserMenuCommentIcon,
  UserMenuLocationIcon,
  UserMenuPhoneIcon,
  UserMenuPersonIcon,
} from "./UserProfileElements";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/shop-context";
import { UserProfileData1 } from "../../Helpers/UserProfileData";
import { useLocation } from "react-router-dom";
import UserMenuCharacter from "./UserMenuCharacter/UserMenuCharacter";
import UserMenuLinks from "./UserMenuLinks/UserMenuLinks";
import UserShrinkBtn from "./UserShrinkButton/UserShrinkBtn";
import UserLogOutBtn from "./UserLogOutButton/UserLogOutBtn";

const UserProfile = () => {
  const navigate = useNavigate();
  const { isOpen2 } = useContext(ShopContext);
  const location = useLocation()

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/signin");
  }
  return (
    <>
      <UserContainer>
        <UserWrapper>
          <UserGlobalWrapper isOpen2={isOpen2}>
            <Outlet />
          </UserGlobalWrapper>
          <UserMenuWrapper isOpen2={isOpen2}>
            <UserMenuCharacter  />
            <UserMenuLinks
              myMenuLink="userorders"
              myMenuText={UserProfileData1.text1}
              myMenuIcon={<UserMenuBasketIcon  className={location.pathname.includes("/userorders") ? "active-icon2" : "icon2"} />}
            />
            <UserMenuLinks
              myMenuLink="usercomments"
              myMenuText={UserProfileData1.text2}
              myMenuIcon={<UserMenuCommentIcon  className={location.pathname.includes("/usercomments") ? "active-icon2" : "icon2"}/>}
            />
            <UserMenuLinks
              myMenuLink="useraddress"
              myMenuText={UserProfileData1.text3}
              myMenuIcon={<UserMenuLocationIcon className={location.pathname.includes("/useraddress") ? "active-icon2" : "icon2"}/>}
            />
            <UserMenuLinks
              myMenuLink="userservices"
              myMenuText={UserProfileData1.text4}
              myMenuIcon={<UserMenuPhoneIcon className={location.pathname.includes("/userservices") ? "active-icon2" : "icon2"}/>}
            />
            <UserMenuLinks
              myMenuLink="useraccount"
              myMenuText={UserProfileData1.text5}
              myMenuIcon={<UserMenuPersonIcon className={location.pathname.includes("/useraccount") ? "active-icon2" : "icon2"}/>}
            />
            <UserShrinkBtnContainer>
              <UserLogOutBtn handleLogout={handleLogout} />
              <UserShrinkBtn />
            </UserShrinkBtnContainer>
          </UserMenuWrapper>
        </UserWrapper>
      </UserContainer>
    </>
  );
};

export default UserProfile;
