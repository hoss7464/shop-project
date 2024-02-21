import React from "react";
import {
  Section3Container,
  HeaderWrapper,
  HeaderWrapper2,
  Header,
  SwiperWrapper,
} from "./Section3Elements";
import MySlider from "./Slider/index";
import { LandingText } from "../../../Helpers/LandingPageData";

const Section3 = () => {
  return (
    <>
      <Section3Container>
        <HeaderWrapper>
          <HeaderWrapper2>
            <Header>{LandingText.text12}</Header>
          </HeaderWrapper2>
        </HeaderWrapper>
        <SwiperWrapper>
          <MySlider />
        </SwiperWrapper>
      </Section3Container>
    </>
  );
};

export default Section3;
