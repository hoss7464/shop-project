import React, { useState } from "react";
import "./UserServices.css";
import { ChakraProvider, extendTheme, SimpleGrid } from "@chakra-ui/react";
import { breakpoints } from "../../../../Core-UI/Theme";
import {
  UServiceContainer,
  UServiceWrapper,
  UServiceContentWrapper,
  UServiceCompoWrapper1,
  UServiceCompoWrapper2,
} from "./UserServicesElements";
import {
  OrdersNavbar,
  OrderFilterTextWrapper,
  OrderFilterText,
  OrderFilterIconWrapper,
  OrderFilterIcon,
} from "../UserOrdersPage/UserOrdersElements";
import { AddressLocationIconTextWrapper } from "../UserAddressPage/UserAddressElements";
import { UserProfileData1 } from "../../../../Helpers/UserProfileData";
import { UserProfileData2 } from "../../../../Helpers/UserProfileData";
import MyUServiceIcon1 from "../../../../Assets/Svg/UServiceIcon1.svg";
import UsCard from "./UsCard";

const UserServices = () => {
  const [myPopup, setMyPopup] = useState({});
  const theme = extendTheme({ breakpoints });

  const pupupFunc = (usId) => {
    setMyPopup((prevPopup) => ({
      ...prevPopup,
      [usId]: !prevPopup[usId],
    }));
  };
  return (
    <ChakraProvider theme={theme}>
      <UServiceContainer>
        <UServiceWrapper>
          <OrdersNavbar style={{ justifyContent: "flex-end" }}>
            <AddressLocationIconTextWrapper>
              <OrderFilterTextWrapper className="display">
                <OrderFilterText>{UserProfileData1.text28}</OrderFilterText>
              </OrderFilterTextWrapper>
              <OrderFilterIconWrapper>
                <OrderFilterIcon alt="location icon" src={MyUServiceIcon1} />
              </OrderFilterIconWrapper>
            </AddressLocationIconTextWrapper>
          </OrdersNavbar>
          <UServiceContentWrapper>
            <UServiceCompoWrapper1>
              <UServiceCompoWrapper2>
                <SimpleGrid
                  spacing="20px"
                  minChildWidth={{
                    base: "250px",
                    sma1: "280px",
                    sma2: "400px",
                    sma3: "400px",
                    tab: "400px",
                    lap: "300px",
                  }}
                >
                  {UserProfileData2.map((usCardData, index) => {
                    return (
                      <UsCard
                        key={index}
                        usCardAlt={usCardData.myUsCardAlt}
                        usCardSrc={usCardData.myUsCardSrc}
                        usCardText={usCardData.myUsCardText}
                        usCardWidth={usCardData.myUsCardWidth}
                        usCardHeight={usCardData.myUsCardHeight}
                        usFormNavIcon={usCardData.myUsCardSrc}
                        isOpenPopUp={myPopup[usCardData.id] || false}
                        togglePopup={() => pupupFunc(usCardData.id)}
                      />
                    );
                  })}
                </SimpleGrid>
              </UServiceCompoWrapper2>
            </UServiceCompoWrapper1>
          </UServiceContentWrapper>
        </UServiceWrapper>
      </UServiceContainer>
    </ChakraProvider>
  );
};

export default UserServices;
