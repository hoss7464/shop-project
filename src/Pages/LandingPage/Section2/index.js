import React from "react";
import {
  Section2Container,
  Section2PersonWrapper,
  Section2Person,
  Section2TextWrapper,
  Section2TextWrapper2,
  Section2HeaderWrapper,
  Section2Header,
  Section2ParaWrapper,
  Section2Para,
  Section2ButtonWrapper,
  Section2Button,
} from "./Section2Elements";
import { LandingText } from "../../../Helpers/LandingPageData";
import MypPerson3 from "../../../Assets/Svg/Person3.svg"

const Section2 = () => {
  return (
    <>
      <Section2Container>
        <Section2PersonWrapper>
          <Section2Person alt={LandingText.text8} src={MypPerson3} />
        </Section2PersonWrapper>
        <Section2TextWrapper>
          <Section2TextWrapper2>
            <Section2HeaderWrapper>
              <Section2Header>{LandingText.text9}</Section2Header>
            </Section2HeaderWrapper>
            <Section2ParaWrapper>
              <Section2Para>{LandingText.text10}</Section2Para>
            </Section2ParaWrapper>
            <Section2ButtonWrapper>
              <Section2Button to="/signup" >{LandingText.text11}</Section2Button>
            </Section2ButtonWrapper>
          </Section2TextWrapper2>
        </Section2TextWrapper>
      </Section2Container>
    </>
  );
};

export default Section2;
