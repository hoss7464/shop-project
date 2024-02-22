import React from "react";
import "./Section5.css";
import {
  Section5Container,
  Section5Wrapper,
  Section5HeaderWrapper,
  Section5Header,
  Section5InputWrapper,
  Section5InputWrapper2,
  Section5InputIconWrapper,
  Section5InputIcon,
  Section5InputWrapper3,
  Section5Input,
  Section5InputButtonWraper,
  Section5InputButton,
} from "./Section5Elements";
import myMailIcon from "../../../Assets/Svg/mailIcon.svg"
import { LandingText } from "../../../Helpers/LandingPageData";

const Section5 = () => {
  return (
    <>
      <Section5Container className="bg">
        <Section5Wrapper>
          <Section5HeaderWrapper>
            <Section5Header>{LandingText.text14}</Section5Header>
          </Section5HeaderWrapper>
          <Section5InputWrapper>
            <Section5InputWrapper2>
              <Section5InputIconWrapper>
                <Section5InputIcon alt="mail icon" src={myMailIcon} />
              </Section5InputIconWrapper>
              <Section5InputWrapper3>
                <Section5Input placeholder={LandingText.text16} />
                <Section5InputButtonWraper>
                  <Section5InputButton>{LandingText.text15}</Section5InputButton>
                </Section5InputButtonWraper>
              </Section5InputWrapper3>
            </Section5InputWrapper2>
          </Section5InputWrapper>
        </Section5Wrapper>
      </Section5Container>
    </>
  );
};

export default Section5;
