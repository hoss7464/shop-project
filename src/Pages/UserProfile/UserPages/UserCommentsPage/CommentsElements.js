import styled from "styled-components";
import { colors } from "../../../../Core-UI/Theme";

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
//------------------------------------------------------------------------
export const SubNavbar = styled.div`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 1rem;
  padding-right: 2rem;
  background-color: ${colors.prime3};
  border-radius: 16px;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    display: flex;
  }
`;

export const SubNavbarContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74%;
  height: 100%;
`;

export const SubNavbarTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubNavbarText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.font1};
`;
//-----------------------------------------------------------------------
export const CommentComponentMainWrapper = styled.div`
  display: block;
  width: 100%;
  height: 527px;
  overflow-y: auto;
`;

export const CommentComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border: solid 1px ${colors.prime4};
  border-radius: 16px;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const CommentComponent3IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    padding: 0;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    padding: 0.5rem;
  }
`;

export const CommentComponent3IconsWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;

export const CommentComponent3IconsWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    margin-bottom: 0;
  }
`;

export const CommentComponent3Icons = styled.img`
  color: ${colors.sec1};
  width: 20px;
  height: 20px;
`;

export const CommentInputCheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    margin-bottom: 0;
  }
`;

export const CommentInputCheck = styled.input`
  width: 20px;
  height: 20px;
  border: solid 2px ${colors.sec1};
`;

export const CommentComponentContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CommentParaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 25%;
    height: 100%;
  }
`;

export const CommentPara = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.font1};
`;

export const CommentIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 25%;
    height: 100%;
  }
`;

export const CommentIconWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    margin-right: 1rem;
  }
`;

export const CommentIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CommentImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    height: 170px;
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    height: 100%;
    width: 170px;
  }
`;

export const CommentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
//-----------------------------------------------------------------
