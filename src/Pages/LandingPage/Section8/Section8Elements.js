import styled from "styled-components";
import { colors } from "../../../Core-UI/Theme";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Section8Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`;
export const CardWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime3};

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 1rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    padding: 1.5rem;
  }
`;
export const CardStarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
export const CardEmptyStar = styled(FaRegStar)`
  color: ${colors.prime2};
`;
export const CardFillStar = styled(FaStar)`
  color: ${colors.prime2};
`;
export const CardParaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const CardPara = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: ${colors.font1};
  text-align: right;
`;
export const CardProductWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const CardProduct = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: ${colors.font1};
  text-align: right;
`;
export const CardPersonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const CardPersonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardPersonIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
`;
export const CardPersonNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
export const CardPersonName = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: ${colors.font1};
  text-align: right;
`;
