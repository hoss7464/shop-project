import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { FaRegComment, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.prime1};
  overflow-x: hidden;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    position: relative;
    padding: 0;
    height: 600px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0;
    height: 600px;
    border-bottom: solid 1px ${colors.font3};
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 0;
    height: 600px;
    border-bottom: solid 1px ${colors.font3};
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    padding: 1.5rem;
    height: 740px;
    border-bottom: solid 1px ${colors.font3};
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UserMenuWrapper = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  transition: 0.2s ease-in-out;
  background-color: ${colors.prime1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen3 }) => (isOpen3 ? "100%" : "0")};
    right: ${({ isOpen3 }) => (isOpen3 ? "0" : "-100%")};
    z-index: 55;
    padding: 0.5rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
    width: ${({ isOpen2 }) => (isOpen2 ? "72px" : "250px")};
    position: relative;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: flex;
    width: ${({ isOpen2 }) => (isOpen2 ? "72px" : "250px")};
    position: relative;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
    width: ${({ isOpen2 }) => (isOpen2 ? "72px" : "250px")};
    position: relative;
  }
`;

export const UserGlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.font2};
  transition: 0.2s ease-in-out;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    border-radius: 0;
    width: 100%;
    position: relative;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    border-radius: 8px;
    width: ${({ isOpen2 }) =>
      isOpen2 ? "calc(100% - 72px)" : "calc(100% - 250px)"};
    position: relative;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    border-radius: 16px;
    width: ${({ isOpen2 }) =>
      isOpen2 ? "calc(100% - 72px)" : "calc(100% - 250px)"};
    position: relative;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    border-radius: 24px;
    width: ${({ isOpen2 }) =>
      isOpen2 ? "calc(100% - 72px)" : "calc(100% - 250px)"};
  }
`;
//-----------------------------------------------------------------
export const UserShrinkBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-top: 8rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-top: 8rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-top: 8rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const UserLogOutBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const UserShrinkBtnWrapper = styled.div`
  align-items: center;
  width: 100%;
  height: 48px;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
    justify-content: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
    justify-content: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
    justify-content: flex-end;
  }
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
  width: 20px;
  height: 14px;
`;

export const UserShrinkBtnTextWrapper = styled.div`
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
  }
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
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const UserMenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMenuLinkIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
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
  opacity: 1;
  position: ${({ isOpen2 }) => (isOpen2 ? "" : "absolute")};
  height: 20px;
  right: 3.5rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
  }
`;

export const UserMenuLinktext = styled.p`
  font-size: 16px;
  color: ${colors.font2};
`;

export const UserMenuBasketIcon = styled(BsBasket)`
  width: 18px;
  height: 18px;
`;
export const UserMenuCommentIcon = styled(FaRegComment)`
  width: 18px;
  height: 18px;
`;

export const UserMenuLocationIcon = styled(FaLocationDot)`
  width: 18px;
  height: 18px;
`;

export const UserMenuPhoneIcon = styled(FaPhoneAlt)`
  width: 18px;
  height: 18px;
`;

export const UserMenuPersonIcon = styled(IoMdPerson)`
  width: 18px;
  height: 18px;
`;
//----------------------------------------------------------------------
export const UserCharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    margin-bottom: 4rem;
  }
`;

export const UserCharacterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;
export const UserCharacterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserCharacterIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserCharacterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: ${({ isOpen2 }) => (isOpen2 ? "" : "absolute")};
  right: 3.8rem;
`;
export const UserCharacterUpperTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 130px;
`;
export const UserCharacterUpperText = styled.p`
  color: ${colors.font2};
  font-size: 16px;
  font-weight: 300;
`;
export const UserCharacterLowerTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 130px;
`;
export const UserCharacterLowerText = styled.p`
  color: ${colors.font2};
  font-size: 14px;
  font-weight: 300;
  opacity: 0.5;
`;
//--------------------------------------------------------------------
export const HambergurMenuWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${colors.prime1};
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: flex;
    border-radius: 8px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: none;
  }
`;

export const HambergurMenuIcon = styled(HiMenuAlt1)`
  width: 24px;
  height: 24px;
  color: ${colors.font2};
`;
