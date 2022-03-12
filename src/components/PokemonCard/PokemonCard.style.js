import styled from "styled-components";

export const Wrapper = styled.div`
  width: 16rem;
  z-index: 10;
`;

export const Content = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.3s;

  &:hover {
    /* animation: shake infinite 1s both; */
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .pokemonCard-pokeball {
    width: 7rem;
    height: 7rem;
    position: absolute;
    right: 0.8px;
    bottom: 3.5px;
  }

  header.pokemonCard-head {
    width: 100%;
  }
  .pokemonCard-head h3 {
    font-size: 1.3rem;
    width: 50%;
    color: #fff;
  }

  header.pokemonCard-head h3.pokemonCard-number {
    display: flex;
    align-content: center;
    justify-content: flex-end;
    width: 100%;
    color: rgba(0, 0, 0, 0.2);
  }

  .pokemonCard-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 0.5rem;
  }

  .pokemonCard-content_span {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .pokemonCard-content_span span {
    width: calc(100% - 1rem);
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.3rem;
    line-height: 1;
    margin: 0.3rem 0rem;
    border-radius: 50px;
  }

  .pokemonCard-content img {
    width: 100%;
    height: 100%;
    z-index: 3;
    transition: all ease-in-out 0.4s;
  }

  &:hover .pokemonCard-content img {
    transform: scale(1.2);
  }

  &.steel {
    background-color: var(--steel);
  }

  &.fire {
    background-color: var(--fire);
  }

  &.grass {
    background-color: var(--grass);
  }

  &.electric {
    background-color: var(--electric);
  }

  &.water,
  &.ice {
    background-color: var(--water-ice);
  }

  &.ground {
    background-color: var(--ground);
  }

  &.rock {
    background-color: var(--rock);
  }

  &.fairy {
    background-color: var(--fairy);
  }

  &.poison {
    background-color: var(--poison);
  }

  &.bug {
    background-color: var(--bug);
  }

  &.dragon {
    background-color: var(--dragon);
  }

  &.psychic {
    background-color: var(--psychic);
  }

  &.flying {
    background-color: var(--flying);
  }

  &.fighting {
    background-color: var(--fighting);
  }

  &.normal {
    background-color: var(--normal);
  }

  &.ghost {
    background-color: var(--ghost);
  }

  &.dark {
    background-color: var(--dark);
  }
`;
