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

const HeroSection = () => {
  return (
    <>
      <HeroContainer className="hero-bg">
        <HeroWrapper1>
          <HeroLeftPersonWrapper>
            <HeroLeftPerson1 alt="left person" src={MyLeftPerson1} />
          </HeroLeftPersonWrapper>
          <HeroRightTextWrapper>
            <HeroTextWrapper2>
              <HeroHeaderWrapper>
                <HeroHeader>آرین شاپ</HeroHeader>
              </HeroHeaderWrapper>
              <HeroParaWrapper>
                <HeroPara>
                  آرین شاپ بستر مناسب و امنی را برای خرید آنلاین به مشتریان
                  ارائه می دهد
                </HeroPara>
              </HeroParaWrapper>
              <HeroBtnWrapper>
                <HeroBtnLink to="/signin">
                  <HeroBtnTextWrapper>
                    <HerBtnText>ورود</HerBtnText>
                  </HeroBtnTextWrapper>
                  <HeroBtnIconWrapper>
                    <HeroBtnIcon alt="sign in" src={MyArrowDown1} />
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
          <HeroLeftPerson1 alt="left person" src={MyLeftPerson1} />
        </HeroLeftPersonwrapper2>
        <HeroRightPersonWrapper>
          <HeroRightPerson alt="Hero right person" src={MyRightPerson} />
        </HeroRightPersonWrapper>
        <HeroBigTextWrapper>
          <HeroBigText>SHOPPING</HeroBigText>
        </HeroBigTextWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
