import styled from "styled-components";
import { colors } from "../../../Core-UI/Theme";

export const Section1GridWrapper = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section1BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.prime3};
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const CardItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardIcon = styled.img`
  width: 72px;
  height: 72px;
`;
export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
export const CardText = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.font1};
`;
