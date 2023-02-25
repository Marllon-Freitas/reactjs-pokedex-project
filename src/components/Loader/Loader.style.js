import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: -2rem 0;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  --pokebol-size: 125px;
  --pokebol-inner-size: 40px;
  --pokebol-border-size: 5px;
  --after-inner-circle-diameter: calc(var(--pokebol-inner-size) - var(--pokebol-border-size) * 3);

  border: var(--pokebol-border-size) solid #262122;
  width: var(--pokebol-size);
  height: var(--pokebol-size);
  border-radius: 50%;
  position: relative;

  background: linear-gradient(
    150deg,
    #ba0c2f 0%,
    #ba0c2f 44%,
    #262122 44%,
    #262122 56%,
    #fff 56%,
    #fff 100%
  );
  animation: shake infinite 1s both;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    border-radius: 100%;
  }

  &:before {
    background: #262122;
    width: var(--pokebol-inner-size);
    height: var(--pokebol-inner-size);
    top: calc(50% - var(--pokebol-inner-size) / 2);
    left: calc(50% - var(--pokebol-inner-size) / 2);
  }

  &:after {
    background: #fff;
    width: var(--after-inner-circle-diameter);
    height: var(--after-inner-circle-diameter);
    top: calc(
      50% -
        ((var(--after-inner-circle-diameter) / 2) + var(--pokebol-border-size))
    );
    left: calc(
      50% -
        ((var(--after-inner-circle-diameter) / 2) + var(--pokebol-border-size))
    );
    border: double var(--pokebol-border-size) #262122;
  }

  /* animation */
  @keyframes shake {
    from {
      transform: none;
    }
    20% {
      transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
    }
    40% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 5deg);
    }
    50% {
      transform: translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
    }
    to {
      transform: none;
    }
  }
`;
