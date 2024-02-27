import React from "react";
import "./Footer.css";
import {
  FooterContainer,
  FooterWrapper1,
  FooterInputWrapper,
  FooterInputWrapper2,
  FooterInputIconWrapper,
  FooterInputIcon,
  FooterInputWrapper3,
  FooterInput,
  FooterInputButtonWraper,
  FooterInputButton,
  FooterLogoTextWrapper,
  FooterLogoTextWrapper2,
  FooterUpperTextWrapper,
  FooterUpperTopTextWrapper,
  FooterUpperTopText,
  FooterUpperBottomTextWrapper,
  FooterUpperBottomText,
  FooterLogoWrapper,
  FooterLogo,
  FooterWrapper2,
  FooterPersonWrapper,
  FooterPersonWrapper2,
  FooterPersonIcon,
  FooterContentWrapper,
  FooterContentWrapper2,
  FooterContentWrapper3,
  FooterContentWrapper5,
  FooterContentHeaderWrapper,
  FooterContentHeader,
  FooterContentPararWrapper,
  FooterContentPara,
} from "./FooterElements";
import myMailIcon from "../../Assets/Svg/mailIcon.svg";
import { LandingText } from "../../Helpers/LandingPageData";
import myLog from "../../Assets/Svg/Logo2.svg";
import { FooterInfo } from "../../Helpers/FooterData";
import MyFooterPesrson from "../../Assets/Svg/FooterPerson.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper1>
          <FooterInputWrapper>
            <FooterInputWrapper2>
              <FooterInputIconWrapper>
                <FooterInputIcon alt="mail icon" src={myMailIcon} />
              </FooterInputIconWrapper>
              <FooterInputWrapper3>
                <FooterInput placeholder={LandingText.text16} />
                <FooterInputButtonWraper>
                  <FooterInputButton>{LandingText.text15}</FooterInputButton>
                </FooterInputButtonWraper>
              </FooterInputWrapper3>
            </FooterInputWrapper2>
          </FooterInputWrapper>
          <FooterLogoTextWrapper>
            <FooterLogoTextWrapper2>
              <FooterUpperTextWrapper>
                <FooterUpperTopTextWrapper>
                  <FooterUpperTopText>{FooterInfo.text1}</FooterUpperTopText>
                </FooterUpperTopTextWrapper>
                <FooterUpperBottomTextWrapper>
                  <FooterUpperBottomText>
                    {FooterInfo.text2}
                  </FooterUpperBottomText>
                </FooterUpperBottomTextWrapper>
              </FooterUpperTextWrapper>
              <FooterLogoWrapper>
                <FooterLogo alt={FooterInfo.text3} src={myLog} />
              </FooterLogoWrapper>
            </FooterLogoTextWrapper2>
          </FooterLogoTextWrapper>
        </FooterWrapper1>
        <FooterWrapper2>
          <FooterPersonWrapper>
            <FooterPersonWrapper2>
              <FooterPersonIcon alt={FooterInfo.text4} src={MyFooterPesrson} />
            </FooterPersonWrapper2>
          </FooterPersonWrapper>
          <FooterContentWrapper>
            <FooterContentWrapper2>
              <FooterContentWrapper3 className="mb">
                <FooterContentWrapper5>
                  <FooterContentHeaderWrapper>
                    <FooterContentHeader>
                      {FooterInfo.text5}
                    </FooterContentHeader>
                  </FooterContentHeaderWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text6}</FooterContentPara>
                  </FooterContentPararWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text7}</FooterContentPara>
                  </FooterContentPararWrapper>
                </FooterContentWrapper5>
              </FooterContentWrapper3>

              <FooterContentWrapper3 className="mb">
                <FooterContentWrapper5>
                  <FooterContentHeaderWrapper>
                    <FooterContentHeader>
                      {FooterInfo.text8}
                    </FooterContentHeader>
                  </FooterContentHeaderWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text9}</FooterContentPara>
                  </FooterContentPararWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text10}</FooterContentPara>
                  </FooterContentPararWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text11}</FooterContentPara>
                  </FooterContentPararWrapper>
                </FooterContentWrapper5>
              </FooterContentWrapper3>

              <FooterContentWrapper3>
                <FooterContentWrapper5>
                  <FooterContentHeaderWrapper>
                    <FooterContentHeader>
                      {FooterInfo.text12}
                    </FooterContentHeader>
                  </FooterContentHeaderWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text13}</FooterContentPara>
                  </FooterContentPararWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text14}</FooterContentPara>
                  </FooterContentPararWrapper>
                  <FooterContentPararWrapper>
                    <FooterContentPara>{FooterInfo.text15}</FooterContentPara>
                  </FooterContentPararWrapper>
                </FooterContentWrapper5>
              </FooterContentWrapper3>
            </FooterContentWrapper2>
          </FooterContentWrapper>
        </FooterWrapper2>
      </FooterContainer>
    </>
  );
};

export default Footer;
