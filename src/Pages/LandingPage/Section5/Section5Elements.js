import styled from "styled-components";
import { colors } from "../../../Core-UI/Theme";

export const Section5Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding-left: 56px;
    padding-right: 56px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const Section5Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const Section5HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    max-width: 280px;
  }
  @media only screen and (min-width: 570px) and (max-width: 1920px) {
    max-width: 450px;
  }
`;
export const Section5Header = styled.h1`
  color: ${colors.font1};
  font-weight: bold;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    font-size: 28px;
  }
`;

export const Section5InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section5InputWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.font2};
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 55px;
`;

export const Section5InputIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
`;
export const Section5InputIcon = styled.img`
  width: 47px;
  height: 47px;
`;
export const Section5InputWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section5Input = styled.input`
  height: 52px;
  background-color: transparent;
  outline: none;
  border: none;
  text-align: right;
  margin-right: 0.5rem;
  &:active {
    outline: none;
    border: none;
  }
  &::placeholder {
    opacity: 0.5;
    text-align: right;
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 210px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    width: 350px;
  }
`;
export const Section5InputButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section5InputButton = styled.button`
  padding: 11px 20px;
  border-radius: 55px;
  background-color: ${colors.sec1};
  cursor: pointer;
  color: ${colors.font2};
  font-size: 16px;
  font-weight: 500;
`;
