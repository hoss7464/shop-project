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
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 28px;
    height: 28px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

export const LinkText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.font1};
`;
