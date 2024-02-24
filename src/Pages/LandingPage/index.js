import React from "react";
import { LandingContainer } from "./LandingElements";
import { Container1 } from "../../Core-UI/MainContainers";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

const LandingPage = () => {
  return (
    <>
      <LandingContainer>
        <HeroSection />
        <Container1>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </Container1>
        <Section5 />
        <Container1>
        <Section6 />
        <Section7 />
        <Section8 />
        </Container1>
      </LandingContainer>
    </>
  );
};

export default LandingPage;
