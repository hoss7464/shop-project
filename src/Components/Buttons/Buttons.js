import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../Core-UI/Theme";


//---------------------Nav btn---------------------------
export const MyLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
`;

export const LinkIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LinkIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const LinkTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
export const LinkText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.font1};
`;



