import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";

export const DetailesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 720px;
`;

export const DetailesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime3};
  padding: 0.5rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 500px;
    margin-top: 10%;
  }
`;

export const DetailesImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 16px;
`;

export const DetailesImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const DetailesContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const DetailesHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const DetailesHeader = styled.h1`
  color: ${colors.font1};
  font-weight: 900;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    font-size: 24px;
  }
`;

export const DetailesParaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const DetailesPara = styled.p`
  color: ${colors.font1};
  font-weight: 300;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    text-align: center;
    font-size: 14px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    text-align: right;
    font-size: 16px;
  }
`;

export const DetailesPriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const DetailesPrice = styled.p`
  color: ${colors.font1};
  font-weight: 900;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 16px;
  }
`;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: ${colors.sec1};
  color: ${colors.font2};
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  padding: 8px 24px;
  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }
`;
