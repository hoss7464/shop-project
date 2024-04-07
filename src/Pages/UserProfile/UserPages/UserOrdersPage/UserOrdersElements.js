import styled from "styled-components";
import { colors } from "../../../../Core-UI/Theme";

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OrdersWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

//-----------------------------------------------------------------------
export const OrdersNavbar = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 60px;
  background-color: ${colors.prime3};
  border-radius: 16px;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: flex-end;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: space-between;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: space-between;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: space-between;
  }
`;

export const OrderSearchWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  border: solid 1px ${colors.prime1};
  border-radius: 55px;
  padding: 0.3rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: flex;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
  }
`;
export const OrderSerachInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;
`;
export const OrderSearchInput = styled.input`
  width: 200px;
  height: 32px;
  border: none;
  outline: none;
  padding: 0.5rem;
  text-align: right;
  background-color: inherit;
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
export const OrderSearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const OrderSearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const OrderFilterMiniSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderMiniSearchIconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: flex;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: none;
  }
`;

export const OrderMiniSearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3rem;
  right: 7rem;
  padding: 0.3rem;
  background-color: ${colors.prime3};
  border: solid 1px ${colors.prime1};
  border-radius: 8px;
`;

export const OrderMiniSearchIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const OrderFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const OrderFilterDropdownWrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: red;
  top: 3rem;
  right: 1rem;
`;
export const OrderFilterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;
export const OrderFilterText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.font1};
`;
export const OrderFilterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OrderFilterIcon = styled.img`
  width: 40px;
  height: 40px;
`;
//-----------------------------------------------------------------------
export const OrderComponentMainWrapper = styled.div`
  display: block;
  width: 100%;
  height: 590px;
  overflow-y: auto;
`;

export const OrderComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border: solid 1px ${colors.prime4};
  border-radius: 16px;
  padding: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;

export const OrderComponentImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 235px;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 235px;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
    height: 235px;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 400px;
    height: 235px;
    margin-right: 1rem;
  }
`;
export const OrderComponentImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const OrderComponentContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
    flex-direction: row;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;
export const OrderComponentsContentColumn1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 50%;
    margin-right: 0;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 50%;
    margin-right: 0;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 230px;
    margin-right: 2rem;
  }
`;
export const OrderComponentsContentColumn2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 50%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 230px;
  }
`;
export const OrderComponentTopicParaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const OrderComponentTopicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OrderComponentTopic = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.font1};
`;
export const OrderComponentParaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OrderComponentPara = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${colors.font1};
`;
