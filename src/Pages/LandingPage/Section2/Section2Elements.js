import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../Core-UI/Theme";

export const Section2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;

export const Section2PersonWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }
`;
export const Section2Person = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 232px;
    height: 214px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 325px;
    height: 299px;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 485px;
    height: 426px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 470px;
    height: 412px;
  }
`;
export const Section2TextWrapper = styled.div`
  display: flex;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
    margin-top: 1rem;
  }
`;
export const Section2TextWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    align-items: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    align-items: flex-end;
  }
`;
export const Section2HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const Section2Header = styled.h1`
  color: ${colors.font1};
  font-size: 32px;
  font-weight: 700;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    text-align: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    text-align: right;
  }
`;
export const Section2ParaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 1.5rem;
  max-width: 500px;
`;

export const Section2Para = styled.p`
  color: ${colors.font1};
  font-size: 18px;
  font-weight: 300;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    text-align: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    text-align: right;
  }
`;

export const Section2ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.sec1};
  margin-top: 1.5rem;
  border-radius: 8px;
`;

export const Section2Button = styled(Link)`
  color: ${colors.font2};
  font-size: 20px;
  font-weight: 300;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
