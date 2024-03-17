import React, { useContext } from "react";
import "./Sidebar.css";
import {
  SidebarContainer,
  SidebarWrapper,
  SideLinkContainer,
  SideLink,
} from "./SidebarElements";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/shop-context";
import { SidebarData1 } from "../../Helpers/SidebarData";

function Sidebar() {
  const Location = useLocation();
  const { isOpen, toggle } = useContext(ShopContext);

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarWrapper>
          <SideLinkContainer>
            <SideLink
              onClick={toggle}
              to="/"
              className={Location.pathname === "/" ? "active-color" : "myColor"}
            >
              {SidebarData1.text1}
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/signin"
              className={
                Location.pathname === "/signin" ? "active-color" : null
              }
            >
              {SidebarData1.text2}
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/signup"
              className={
                Location.pathname === "/signup" ? "active-color" : null
              }
            >
              {SidebarData1.text3}
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/purchase"
              className={
                Location.pathname === "/purchase" ? "active-color" : null
              }
            >
              {SidebarData1.text4}
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/production"
              className={
                Location.pathname === "/production" ? "active-color" : null
              }
            >
              {SidebarData1.text5}
            </SideLink>
          </SideLinkContainer>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
