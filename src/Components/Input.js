import styled from "@emotion/styled";

export const MyInput = styled.input`
  height: 32px;
  padding: 0.5rem;
  outline: none;
  border: none;
  background-color: transparent;
  &:active {
    outline: none;
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 239px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 350px;
  }

  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 300px;
  }
`;

export const InputIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 6px;
  cursor: pointer;
`;
