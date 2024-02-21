import React from "react";
import { LandingContainer } from "./LandingElements";
import { Container1 } from "../../Core-UI/MainContainers";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const LandingPage = () => {
  return (
    <>
      <LandingContainer>
        <HeroSection />
        <Container1>
          <Section1 />
          <Section2 />
          <Section3 />
        </Container1>
      </LandingContainer>
    </>
  );
};

export default LandingPage;
