import styled from "styled-components";
import { colors } from "../../../Core-UI/Theme";
import { Link } from "react-router-dom";

export const Section3Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;
`;
//----------------------------------------------------------------------
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    justify-content: center;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    justify-content: flex-end;
  }
`;

export const HeaderWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: solid 2px ${colors.sec2};
`;

export const Header = styled.h1`
  color: ${colors.font1};
  font-weight: 600;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
    margin-left: 0;
  }
  @media only screen and (min-width: 577px) and (max-width: 992px) {
    font-size: 20px;
    margin-left: 0;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 28px;
    margin-left: 1rem;
  }
`;
//-----------------------------------------------------------------------
export const SwiperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SwiperPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 210px;
  border-radius: 8px;
`;
export const SwiperPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const SwiperHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const SwiperHeader = styled.h1`
  font-weight: 700;
  color: ${colors.font1};
  text-align: right;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 22px;
  }
`;
export const SwiperParaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const SwiperPara = styled.p`
  font-weight: 300;
  color: ${colors.font1};
  text-align: right;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 16px;
  }
`;
export const SwiperCodeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const SwiperCode = styled.p`
  font-weight: 700;
  color: ${colors.font1};
  text-align: right;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 20px;
  }
`;
export const SwiperPricePurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const SwiperPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SwiperPrice = styled.p`
  font-weight: 700;
  color: ${colors.font1};
  text-align: right;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 20px;
  }
`;
export const SwiperPurchaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwiperPurchaseLink = styled(Link)``;
export const SwiperPurchase = styled.img``;

export const SwiperDiscountMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const SwiperDiscountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.sec1};
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;
  border-radius: 8px;
`;
export const SwiperDiscount = styled.p`
  color: ${colors.font2};
  font-size: 16px;
  font-weight: 500;
`;
export const SwiperMoreLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwiperMoreLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwiperMoreTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
export const SwiperMoreText = styled.p`
  font-weight: 500;
  color: ${colors.font1};
  text-align: right;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 20px;
  }
`;
export const SwiperMoreIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwiperMoreIcon = styled.img`
  width: 17px;
  height: 16px;
`;
