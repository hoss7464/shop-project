import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3.7rem;
  right: 22.3%;
  position: absolute;
  background-color: ${colors.prime3};
  border-radius: 8px;
  padding: 1.5rem;
`;

export const CategoryWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  min-width: 600px;
`;
export const CategoryWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;


`;

export const CategoryHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CategoryHeader = styled.h1`
font-weight: 900;
color: ${colors.font1};
font-size: 20px;
`

export const CategoryLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 0.5rem;

  width: 100%;
`
export const CategoryLinkWrapper2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  margin-top: 0.5rem;
  
`

export const CategoryLink = styled(Link)`
 color: ${colors.font1};
 font-weight: 500;
 font-size: 16px;
 transition: all 0.5s ease-in-out;
 padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  text-align: right;

 &:hover {
    color: ${colors.sec2};
    transition: all 0.2s ease-in-out;
 }
`
