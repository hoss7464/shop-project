import styled from "styled-components";
import { colors } from "../../../../Core-UI/Theme";

export const UServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UServiceWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
//-------------------------------------------------------------------
export const UServiceContentWrapper = styled.div`
  display: block;
  width: 100%;
  height: 584px;
  overflow-y: auto;
`;

export const UServiceCompoWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const UServiceCompoWrapper2 = styled.div`
  width: 100%;
`;

export const UServiceCompoWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: solid 2px ${colors.prime4};
  height: 200px;
  cursor: pointer;
`;

export const UServiceCompoIconTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UServiceCompoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const UServiceCompoIcon = styled.img``;

export const UServiceCompoTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UServiceCompoText = styled.p`
  font-size: 18px;
  color: ${colors.font1};
  font-weight: 300;
`;
//--------------------------------------------------------------------
export const USPriorityRadiobtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const USPriorityHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const USPriorityHeader = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${colors.font1};
`;

export const USRadiobtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const USRadiobtnWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const USRadiobtnText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.font1};
  margin-right: 0.3rem;
`;

export const USRadioBtn = styled.input``;

export const USSubmitAttachWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const USSubmithWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const USAttachWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border: solid 2px ${colors.font3};
  border-radius: 4px;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const USAttachInput = styled.input`
  width: 210px;
`;
