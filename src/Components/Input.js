import styled from "@emotion/styled";
import { colors } from "../Core-UI/Theme";

export const MyInput = styled.input`
  height: 100%;
  outline: none;
  border: none;
  background-color: ${colors.prime3};
  text-align: right;
  padding-right: 0.5rem;
  &:active {
    outline: none;
  }

  &::placeholder {
    color: ${colors.font1};
    opacity: 0.3;
    font-size: 14px;
  }

  @media only screen and (min-width: 280px) and (max-width: 368px) {
    width: 130px;
  }

  @media only screen and (min-width: 369px) and (max-width: 576px) {
    width: 180px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 239px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 250px;
  }

  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 250px;
  }
`;

export const InputIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
