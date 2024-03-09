import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 720px;
`;

export const PurchaseHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 1rem;
  border-bottom: solid 2px ${colors.font3};

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;
export const PurchaseHeader = styled.h1`
  font-weight: 900;
  color: ${colors.font1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 577px) and (max-width: 992px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 32px;
  }
`;

export const PurchaseTotalAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    justify-content: flex-end;
    width: 600px;
  }
`;

export const PurchaseTotalAmount = styled.p`
  color: ${colors.font1};
  font-weight: 900;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 20px;
  }
`;

export const CompleteLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    justify-content: flex-end;
    width: 600px;
  }
`;

export const CompleteLinkWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.sec1};
`;
export const CompleteLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.font2};
  padding: 8px 24px;
  cursor: pointer;
`;
//-----------------------------------------------------------------
export const PurchaseWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;
  margin-bottom: 1rem;
`;
export const PurchaseCompoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.prime3};
  padding: 1rem;
  border-radius: 16px;
  margin-bottom: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 600px;
  }
`;
export const PurchaseCompoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;

export const CompoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 200px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 350px;
    height: 200px;
  }
`;

export const CompoIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const CompoContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    align-items: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    align-items: flex-end;
  }
`;

export const CompoHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const CompoHeader = styled.h3`
  font-weight: 600;
  color: ${colors.font1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
    text-align: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    text-align: right;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    font-size: 24px;
    text-align: right;
  }
`;

export const CompoPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const CompoPrice = styled.p`
  font-weight: 600;
  color: ${colors.font1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    text-align: center;
    font-size: 14px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    text-align: right;
    font-size: 16px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const CounterBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CounterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.sec1};
  color: ${colors.font2};
  border-radius: 8px;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

export const CounterBtnIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CounterBtnMinusIcon = styled(FaMinus)`
  width: 12px;
  height: 12px;
  color: ${colors.font2};
`;

export const CounterBtnPlusIcon = styled(FaPlus)`
  width: 12px;
  height: 12px;
  color: ${colors.font2};
`;

export const CounterInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const CounterInput = styled.input`
  border: none;
  outline: none;
  width: 50px;
  height: 24px;
  background-color: ${colors.font2};
  border-radius: 4px;
  text-align: center;
  &:active {
    border: none;
    outline: none;
  }
`;
