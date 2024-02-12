import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../Core-UI/Theme";

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
  font-size: 16px;
  font-weight: 600;
  color: ${colors.font1};
`;
