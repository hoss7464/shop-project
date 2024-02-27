import styled from "styled-components";
import { colors } from "../../../Core-UI/Theme";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 720px;
  position: relative;
`;
//----------------------------------------------------------------------
export const HeroWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 300px);
`;

export const HeroLeftPersonWrapper = styled.div`
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    width: 50%;
    height: 100%;
    padding-left: 120px;
  }
`;

export const HeroLeftPersonwrapper2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 10;
  bottom: 0;

  @media only screen and (min-width: 993px) and (max-width: 1920px) {
    display: none;
  }
`;

export const HeroRightPersonWrapper = styled.div`
  position: absolute;
  z-index: 9;
  bottom: 0;
  right: 120px;
  @media only screen and (min-width: 280px) and (max-width: 993px) {
    display: none;
  }

  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroRightPerson = styled.img`
  width: 387px;
  height: 421px;
`;

export const HeroLeftPerson1 = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 359px) {
    width: 277px;
    height: 282px;
  }

  @media only screen and (min-width: 260px) and (max-width: 576px) {
    width: 333px;
    height: 339px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 400px;
    height: 407px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 424px;
    height: 431px;
  }

  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 314px;
    height: 319px;
    margin-left: 2.69rem;
  }
`;

export const HeroRightTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 50%;
    height: 100%;
  }
`;

export const HeroTextWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 313px;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-right: 24px;
    margin-top: 5rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-right: 40px;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-right: 56px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    margin-right: 150px;
  }
`;

export const HeroHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const HeroHeader = styled.h1`
  color: ${colors.font1};
  font-size: 32px;
  font-weight: bolder;
`;

export const HeroParaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-top: 1.5rem;
`;

export const HeroPara = styled.p`
  color: ${colors.font1};
  font-size: 20px;
  font-weight: 300;
  text-align: right;
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-top: 2rem;
`;

export const HeroBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${colors.sec1};
  padding-left: 16px;
  padding-right: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
  
`;

export const HeroBtnTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

export const HerBtnText = styled.p`
  font-size: 21px;
  font-weight: 400;
  color: ${colors.font2};
`;

export const HeroBtnIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBtnIcon = styled.img`
  width: 36px;
  height: 36px;
`;
//-------------------------------------------------------------------------
export const HeroSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;
//-------------------------------------------------------------------------
export const HeroBigTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: rotate(90deg);

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    left: -11rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    left:-200px;
    top: 3rem;
    margin: 0;
  }

  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    margin: 0 auto;
    top: 0;
  }
`;

export const HeroBigText = styled.h1`
  color: ${colors.prime3};
  opacity: 0.5;
  font-weight: bolder;

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 100px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 120px;
  }

  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 170px;
  }
`;
