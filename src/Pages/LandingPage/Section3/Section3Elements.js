import styled from "styled-components";
import { colors } from "../../../Core-UI/Theme";
import { Link } from "react-router-dom";

export const Section3Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: khaki;
  padding-top: 1rem;
`;
//----------------------------------------------------------------------
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

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
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    margin-left: 0;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 20px;
    margin-left: 0;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 24px;
    margin-left: 1rem;
  }
`;
//-----------------------------------------------------------------------
export const SwiperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: blue;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SwiperPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  background-color: grey;
  border-radius: 8px;
`
export const SwiperPhoto = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 8px;
`
export const SwiperHeaderWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: gray;
width: 100%;
margin-top: 1rem;
`
export const SwiperHeader = styled.h1`
font-weight: 500;
color: ${colors.font1};
text-align: right;

@media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 20px;
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
}
@media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 20px;
}
@media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 24px;
}
`
export const SwiperParaWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color:green;
width: 100%;
margin-top: 1rem;
`
export const SwiperPara = styled.p`
font-weight: 300;
color: ${colors.font1};
text-align: right;

@media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 14px;
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 14px;
}
@media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 14px;
}
@media only screen and (min-width: 1080px) and (max-width: 1920px) {
    font-size: 18px;
}
`
export const SwiperStarWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: brown;
width: 100%;
margin-top: 1rem;
`
export const SwiperCodeWrapper = styled.div``
export const SwiperCode = styled.p``
export const SwiperPricePurchaseWrapper = styled.div``
export const SwiperPriceWrapper = styled.div``
export const SwiperPrice = styled.p``
export const SwiperPurchaseWrapper = styled.div``
export const SwiperPurchaseLink = styled(Link)``
export const SwiperPurchase = styled.img``
export const SwiperDiscountMoreWrapper = styled.div``
export const SwiperDiscountWrapper = styled.div``
export const SwiperDiscount = styled.p``
export const SwiperMoreLinkWrapper = styled.div``
export const SwiperMoreLink = styled(Link)``
export const SwiperMoreTextWrapper = styled.div``
export const SwiperMoreText = styled.p``
export const SwiperMoreIconWrapper = styled.div``
export const SwiperMoreIcon = styled.img``
