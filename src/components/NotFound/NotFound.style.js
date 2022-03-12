import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2rem;
  }

  img {
    width: 26rem;
    height: auto;
  }

  button {
    color: #fff;
    width: 13rem;
    height: 3rem;
    position: relative;
    font-weight: 600;
    cursor: pointer;

    background: #ba0c2f;
    border-radius: 20px;
    transition: all ease-in-out 0.3s;

    .loadMoreButton-pokeball {
      height: 100%;
      position: absolute;
      right: -0.2px;
      bottom: 0.5px;
    }
  }

  button:hover {
    box-shadow: rgba(186, 12, 47, 0.25) 0px 54px 55px,
      rgba(186, 12, 47, 0.12) 0px -12px 30px,
      rgba(186, 12, 47, 0.12) 0px 4px 6px, rgba(186, 12, 47, 0.17) 0px 12px 13px,
      rgba(186, 12, 47, 0.09) 0px -3px 5px;
  }

  @media (max-width: 500px) {
    img {
      width: 80%;
    }
  }
`;
