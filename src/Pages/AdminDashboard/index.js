import React from "react";
import "./AdminDashboard.css";
import {
  HomeIcon,
  ClientInfoIcon,
  ClientAuthIcon,
  ProductIcon,
  TransactionIcon,
  PortIcon,
  ServiceIcon,
} from "./AdminElements";
import {
  UserContainer,
  UserWrapper,
  UserGlobalWrapper,
  UserMenuWrapper,
  HambergurMenuWrapper,
  HambergurMenuIcon,
} from "../UserProfile/UserProfileElements";
import { Outlet, useLocation } from "react-router-dom";
import { AdminDashboardData1 } from "../../Helpers/AdminDashboardData";
import UserMenuCharacter from "../UserProfile/UserMenuCharacter/UserMenuCharacter";
import UserMenuLinks from "../UserProfile/UserMenuLinks/UserMenuLinks";

const AdminDashboard = () => {
  const location = useLocation();
  return (
    <>
      <UserContainer>
        <UserWrapper>
          <UserGlobalWrapper>
            <Outlet />
            <HambergurMenuWrapper>
              <HambergurMenuIcon />
            </HambergurMenuWrapper>
          </UserGlobalWrapper>
          <UserMenuWrapper>
            <UserMenuCharacter />
            <UserMenuLinks
              myMenuLink="adminhome"
              myMenuText={AdminDashboardData1.text1}
              myMenuIcon={
                <HomeIcon
                  className={
                    location.pathname.includes("/adminhome")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
            <UserMenuLinks
              myMenuLink="adminclientinfo"
              myMenuText={AdminDashboardData1.text2}
              myMenuIcon={
                <ClientInfoIcon
                  className={
                    location.pathname.includes("/adminclientinfo")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
            <UserMenuLinks
              myMenuLink="adminclientauth"
              myMenuText={AdminDashboardData1.text3}
              myMenuIcon={
                <ClientAuthIcon
                  className={
                    location.pathname.includes("/adminclientauth")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
            <UserMenuLinks
              myMenuLink="adminproduct"
              myMenuText={AdminDashboardData1.text4}
              myMenuIcon={
                <ProductIcon
                  className={
                    location.pathname.includes("/adminproduct")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
            <UserMenuLinks
              myMenuLink="admintransaction"
              myMenuText={AdminDashboardData1.text5}
              myMenuIcon={
                <TransactionIcon
                  className={
                    location.pathname.includes("/admintransaction")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
            <UserMenuLinks
              myMenuLink="adminport"
              myMenuText={AdminDashboardData1.text6}
              myMenuIcon={
                <PortIcon
                  className={
                    location.pathname.includes("/adminport")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
            <UserMenuLinks
              myMenuLink="adminservice"
              myMenuText={AdminDashboardData1.text7}
              myMenuIcon={
                <ServiceIcon
                  className={
                    location.pathname.includes("/adminservice")
                      ? "active-icon2"
                      : "icon2"
                  }
                />
              }
            />
          </UserMenuWrapper>
        </UserWrapper>
      </UserContainer>
    </>
  );
};

export default AdminDashboard;
