import styled from "styled-components";

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
  background-color: khaki;
  margin-top: 7%;
`;

export const ProductLeftWrapper = styled.div`
  width: calc(100% - 260px);
`;
export const ProductRightWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  width: 260px;
  height: 500px;
  background-color: red;
`;
