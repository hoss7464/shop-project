import React from "react";
import {
  HeroContainer,
  HeroWrapper1,
  HeroLeftPersonWrapper,
  HeroLeftPersonwrapper2,
  HeroLeftPerson1,
  HeroRightPersonWrapper,
  HeroRightPerson,
  HeroRightTextWrapper,
  HeroTextWrapper2,
  HeroHeaderWrapper,
  HeroHeader,
  HeroParaWrapper,
  HeroPara,
  HeroBtnWrapper,
  HeroBtnLink,
  HeroBtnTextWrapper,
  HerBtnText,
  HeroBtnIconWrapper,
  HeroBtnIcon,
  HeroSliderWrapper,
  HeroBigTextWrapper,
  HeroBigText
} from "./HeroElements";
import "./Hero.css";
import MyLeftPerson1 from "../../../Assets/Svg/LeftPerson1.svg";
import MyRightPerson from "../../../Assets/Svg/RightPerson.svg"
import MyArrowDown1 from "../../../Assets/Svg/ArrowDown1.svg";
import MySwiper from "../../../Components/Swiper";
import { LandingText } from "../../../Helpers/LandingPageData";

const HeroSection = () => {
  return (
    <>
      <HeroContainer className="hero-bg">
        <HeroWrapper1>
          <HeroLeftPersonWrapper>
            <HeroLeftPerson1 alt={LandingText.text1} src={MyLeftPerson1} />
          </HeroLeftPersonWrapper>
          <HeroRightTextWrapper>
            <HeroTextWrapper2>
              <HeroHeaderWrapper>
                <HeroHeader>{LandingText.text2}</HeroHeader>
              </HeroHeaderWrapper>
              <HeroParaWrapper>
                <HeroPara>
                {LandingText.text3}
                </HeroPara>
              </HeroParaWrapper>
              <HeroBtnWrapper>
                <HeroBtnLink to="/signin">
                  <HeroBtnTextWrapper>
                    <HerBtnText>{LandingText.text4}</HerBtnText>
                  </HeroBtnTextWrapper>
                  <HeroBtnIconWrapper>
                    <HeroBtnIcon alt={LandingText.text5} src={MyArrowDown1} />
                  </HeroBtnIconWrapper>
                </HeroBtnLink>
              </HeroBtnWrapper>
            </HeroTextWrapper2>
          </HeroRightTextWrapper>
        </HeroWrapper1>

        <HeroSliderWrapper>
          <MySwiper />
        </HeroSliderWrapper>

        <HeroLeftPersonwrapper2>
          <HeroLeftPerson1 alt={LandingText.text6} src={MyLeftPerson1} />
        </HeroLeftPersonwrapper2>
        <HeroRightPersonWrapper>
          <HeroRightPerson alt={LandingText.text7} src={MyRightPerson} />
        </HeroRightPersonWrapper>
        <HeroBigTextWrapper>
          <HeroBigText>{LandingText.text8}</HeroBigText>
        </HeroBigTextWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
