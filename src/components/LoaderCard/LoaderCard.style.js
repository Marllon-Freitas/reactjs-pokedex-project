import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  animation: spin linear 1s infinite;

  /* animation */
  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
`;
