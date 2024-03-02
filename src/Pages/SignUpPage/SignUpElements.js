import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import { Link } from "react-router-dom";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.font2};
`;

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  background-color: ${colors.prime3};

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem;
    border-radius: 8px;
    margin-top: 8rem;
    margin-bottom: 6rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    padding: 1.5rem;
    border-radius: 16px;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

export const SignupHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;
export const SignupHeader = styled.h1`
  color: ${colors.font1};
  font-weight: 900;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 32px;
  }
`;

export const SignupSubmitButton = styled.button`
  padding: 12px 32px;
  background-color: ${colors.sec1};
  border-radius: 8px;
  margin-top: 2rem;
  color: ${colors.font2};
  font-weight: 400;
  font-size: 16px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const SignupLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
export const SignupLink = styled(Link)`
  color: #0d99ff;
`;
