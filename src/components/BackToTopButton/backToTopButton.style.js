import styled from "styled-components";

export const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  z-index: 1000;
  cursor: pointer;
`;

export const Content = styled.div`
  transition: all ease-in-out 0.3s;
  width: 100%;
  height: 100%;

  button.back-to-top {
    cursor: pointer;
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      transition: all ease-in-out 0.3s;
    }
  }

  button.back-to-top svg:hover {
    /* animation: shake infinite 1s both; */
    transform: scale(1.03);
    background: #f5f5f6;
    border-radius: 50%;
  }
`;
