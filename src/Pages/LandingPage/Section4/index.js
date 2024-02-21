import React from "react";
import {
  Section3Container,
  HeaderWrapper,
  HeaderWrapper2,
  Header,
  SwiperWrapper,
} from "../Section3/Section3Elements";
import { LandingText } from "../../../Helpers/LandingPageData";
import MySlider from "./Slider";

const Section4 = () => {
  return (
    <>
      <Section3Container>
        <HeaderWrapper>
          <HeaderWrapper2>
            <Header>{LandingText.text13}</Header>
          </HeaderWrapper2>
        </HeaderWrapper>
        <SwiperWrapper>
          <MySlider />
        </SwiperWrapper>
      </Section3Container>
    </>
  );
};

export default Section4;
