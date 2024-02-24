import React from "react";
import { Section8Container, CardWrapper } from "./Section8Elements";
import {
  HeaderWrapper,
  HeaderWrapper2,
  Header,
} from "../Section3/Section3Elements";
import { LandingText } from "../../../Helpers/LandingPageData";
import Cards from "./Cards/index";

const Section8 = () => {
  return (
    <>
      <Section8Container>
        <HeaderWrapper>
          <HeaderWrapper2>
            <Header>{LandingText.text19}</Header>
          </HeaderWrapper2>
        </HeaderWrapper>
        <CardWrapper>
          <Cards  />
        </CardWrapper>
      </Section8Container>
    </>
  );
};

export default Section8;
