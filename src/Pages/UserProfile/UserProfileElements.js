import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { FaRegComment, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";


export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 740px;
  background-color: ${colors.prime1};
  padding: 1.5rem;
  border-bottom: solid 1px ${colors.font3};
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: ${({ isOpen2 }) => (isOpen2 ? "72px" : "250px")};
  height: 100%;
  position: relative;
  transition: 0.2s ease-in-out;
`;

export const UserGlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isOpen2 }) =>
    isOpen2 ? "calc(100% - 72px)" : "calc(100% - 250px)"};
  height: 100%;
  background-color: ${colors.font2};
  border-radius: 24px;
  transition: 0.2s ease-in-out;
`;
//-----------------------------------------------------------------
export const UserShrinkBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const UserShrinkBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 48px;
`;

export const UserShrinkBtnWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 32px;
`;

export const UserShrinkBtnIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const UserShrinkBtnIcon = styled.img`
  width: 22px;
  height: 16px;
`;

export const UserShrinkBtnTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserShrinkBtnText = styled.p`
  color: ${colors.font2};
  font-weight: 500;
  font-size: 16px;
`;
//-------------------------------------------------------------------
export const UserMenuLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const UserMenuLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const UserMenuLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
`

export const UserMenuLinkIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

`;

export const UserMenuLinkIconWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserMenuLinktextWrapper = styled.div`
  display: flex;
  opacity: 1;
  position: ${({ isOpen2 }) => (isOpen2 ? "" : "absolute")};
  height: 20px;
  right: 4rem;
`;

export const UserMenuLinktext = styled.p`
font-size: 16px;
color: ${colors.font2};

`

export const UserMenuBasketIcon = styled(BsBasket)`
  width: 20px;
  height: 20px;
`;
export const UserMenuCommentIcon = styled(FaRegComment)`
  width: 20px;
  height: 20px;
`;

export const UserMenuLocationIcon = styled(FaLocationDot)`
  width: 20px;
  height: 20px;
`;

export const UserMenuPhoneIcon = styled(FaPhoneAlt)`
  width: 20px;
  height: 20px;
`;

export const UserMenuPersonIcon = styled(IoMdPerson)`
  width: 20px;
  height: 20px;
`;
//----------------------------------------------------------------------
export const UserCharacterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 4rem;
`

export const UserCharacterWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
position: relative;
`
export const UserCharacterIconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const UserCharacterIcon = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
object-fit: cover;
`
export const UserCharacterTextWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: ${({ isOpen2 }) => (isOpen2 ? "" : "absolute")};
right: 3.8rem;
`
export const UserCharacterUpperTextWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 130px;
`
export const UserCharacterUpperText = styled.p`
color: ${colors.font2};
font-size: 16px;
font-weight: 300;
`
export const UserCharacterLowerTextWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 130px;
`
export const UserCharacterLowerText = styled.p`
color: ${colors.font2};
font-size: 14px;
font-weight: 300;
opacity: 0.5;
`