import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";

export const TextErrorContainer = styled.div`
  color: red;
  margin-top: 0.5rem;
`;

export const FormikInputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    align-items: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    align-items: flex-end;
  }
`;

export const FormikInputLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FormikInputLabel = styled.label`
  color: ${colors.font1};
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const FormikFieldIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.font2};
  padding: 0.5rem;
  border-radius: 55px;
`;
export const FormikFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.font2};
`;
export const FormikIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormikIcon = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 42px;
    height: 42px;
  }
`;
