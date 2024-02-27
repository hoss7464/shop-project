import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.prime1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding-left: 56px;
    padding-right: 56px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
//------------------------------------------------------------------------
//Footer input :
export const FooterWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    flex-direction: column-reverse;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;
export const FooterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

export const FooterInputWrapper2 = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.font2};
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 55px;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: flex-end;
    width: 100%;
  }
  @media only screen and (min-width: 577px) and (max-width: 992px) {
    justify-content: space-between;
    width: 100%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: space-between;
    width: 80%;
  }
`;

export const FooterInputIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
`;

export const FooterInputIcon = styled.img`
  width: 47px;
  height: 47px;
`;

export const FooterInputWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }
  @media only screen and (min-width: 577px) and (max-width: 992px) {
    width: 60%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 80%;
  }
`;

export const FooterInput = styled.input`
  height: 52px;
  background-color: transparent;
  outline: none;
  border: none;
  text-align: right;
  margin-right: 0.5rem;
  width: 100%;
  &:active {
    outline: none;
    border: none;
  }
  &::placeholder {
    opacity: 0.5;
    text-align: right;
    margin-right: 0.5rem;
  }
`;

export const FooterInputButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterInputButton = styled.button`
  padding: 11px 24px;
  border-radius: 55px;
  background-color: ${colors.sec1};
  cursor: pointer;
  color: ${colors.font2};
  font-size: 16px;
  font-weight: 500;
`;

//Footer logo & text :
export const FooterLogoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-end;
    width: 50%;
  }
`;

export const FooterLogoTextWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterUpperTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 1rem;
`;
export const FooterUpperTopTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const FooterUpperTopText = styled.h1`
  font-weight: 700;
  color: ${colors.font2};
  text-align: right;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 24px;
  }
`;
export const FooterUpperBottomTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const FooterUpperBottomText = styled.h3`
  font-weight: 300;
  color: ${colors.font2};
  text-align: right;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 19px;
  }
`;
export const FooterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
`;

export const FooterLogo = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 70px;
    height: 70px;
  }
`;
//------------------------------------------------------------------------
export const FooterWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 992px) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
    margin-top: 1.5rem;
  }
`;
export const FooterPersonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-start;
    width: 50%;
  }
`;
export const FooterPersonWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterPersonIcon = styled.img`
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

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 424px;
    height: 431px;
  }
`;
export const FooterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

export const FooterContentWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    width: 60%;
    margin-top: 2rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }
`;
export const FooterContentWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterContentWrapper4 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;

export const FooterContentWrapper5 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    align-items: center;
  }

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    align-items: flex-end;
  }
`;
export const FooterContentHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const FooterContentHeader = styled.h1`
  color: ${colors.font2};
  font-weight: 700;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 24px;
  }
`;
export const FooterContentPararWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const FooterContentPara = styled.h3`
  color: ${colors.font2};
  font-weight: 300;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 18px;
  }
`;
