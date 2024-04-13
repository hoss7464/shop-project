import styled from "styled-components";
import { colors } from "../../../../Core-UI/Theme";

export const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
//-----------------------------------------------------------------------
export const AddressLocationIconTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressDetailWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 582px;
  padding: 0.5rem;
`;

export const AddressDetailWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: solid 1px ${colors.prime4};
  border-radius: 8px;
  padding: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 100%;
  }
`;

export const AddressTopicWrapper1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 577px) and (max-width: 992px) {
    width: 40%;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    min-width: 200px;
  }
`;

export const AddressTopicWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AddressTopic = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.font1};
`;

export const AddressParaWrapper1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const AddressParaWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AddressPara = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: ${colors.font1};
  text-align: right;
`;
//------------------------------------------------------------------
export const AddressForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background-color: ${colors.prime3};
  border-radius: 8px;
  min-width: 500px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`;

export const AddressInputLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const AddressLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const AddressLabel = styled.label`
  font-size: 16px;
  font-weight: 300;
  color: ${colors.font1};
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressInput = styled.input`
  width: 300px;
  height: 32px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0.3rem;
  text-align: right;
  &:active {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-size: 12px;
  }
`;
