import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const Content = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  width: 90%;
  height: 100%;
  background-color: #fff;
  display: grid;
  margin: 2rem 0 8rem 0;
  grid-template-columns: repeat(auto-fit, minmax(16rem, auto));
  grid-gap: 1rem 0.5rem;;
  justify-items: center;
`;