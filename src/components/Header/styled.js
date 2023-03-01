import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .logo {
    width: 10rem;
    padding: 0.3rem 0 0 0;
    height: 5em;
    cursor: pointer;
  }
  .header-buttons {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 0.2rem 0 0 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    margin-top: 1rem;
  }

  .back-buttons svg {
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    height: 100%;
    transition: all ease-in-out 0.1s;
  }

  .back-buttons svg:hover {
    transform: scale(1.1);
    background: #f5f5f6;
    border-radius: 50%;
  }

  .pokeball-disk {
    position: fixed;
    z-index: 0;
    right: -5rem;
    top: -4rem;
    width: 17rem;
  }

  .pokeball-disk svg {
    width: 100%;
    height: 100%;
  }
`;
