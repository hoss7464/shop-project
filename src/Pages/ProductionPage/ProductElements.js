import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 720px;
  margin-bottom: 2rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-top: 6rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-top: 6rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-top: 7rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    margin-top: 7rem;
  }
`;

export const ProductLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: calc(100% - 260px);
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: calc(100% - 260px);
  }
`;

export const ProductLeftFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: flex;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: none;
  }
`;

export const ProductSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const ProductSelectWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  
`;

export const ProductSelectParaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const ProductSelectPara = styled.p`
 color: ${colors.font3};
 font-size: 12px;
`

export const ProductMobileInputFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ProductResultWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
`;

export const ProductRightWrapper = styled.div`
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  width: 260px;
  height: 500px;
  min-height: 720px;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: flex;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    display: flex;
  }
`;

export const ProductFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
`;

export const ProductBrandFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
`;
export const ProductBrandFilterWrapper3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProductBrandFilterWrapper2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const ProductBrandFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${colors.prime3};
  color: ${colors.font1};
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    color: ${colors.font2};
    background-color: ${colors.sec1};
  }
`;
export const ProductInputFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;
export const ProductInputFilterWrapper2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
`;
export const ProductInputFilterLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInputFilterLabel = styled.label`
  color: ${colors.font3};
  font-size: 12px;
`;
export const ProductInputFilterWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;
export const ProductInputFilter = styled.input`
  background-color: ${colors.prime3};
  border: none;
  outline: none;
  border-radius: 4px;
  width: 100px;
  height: 32px;
  padding-left: 0.5rem;
`;
//----------------------------------------------------------------------
export const ProductComponWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime3};
  padding: 0.5rem;
  border-radius: 16px;
`;

export const ProductComponNameBrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
`;
export const ProductComponNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductComponBrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
