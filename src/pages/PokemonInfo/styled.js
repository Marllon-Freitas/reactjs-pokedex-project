import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
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

export const Content = styled.div`
  width: 100%;
  height: 100%;

  .loader-wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: -50%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -10;
  }

  .pokemonInfo-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  header.pokemonInfo-header {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 0 3rem;

    .content {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .pokemonInfo-header-head {
      width: 100%;
    }

    h3.pokemonInfo-header-name {
      font-size: 2.3rem;
      width: 50%;
      color: #fff;
    }

    h4.pokemonInfo-header-number {
      font-size: 1.3rem;
      display: flex;
      align-content: center;
      justify-content: flex-end;
      width: 100%;
      color: #fff;
    }

    .pokemonCard-content_span {
      display: flex;
      width: 90%;
    }

    .pokemonCard-content_span span {
      margin: 0 0.5rem 0 0;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 0.3rem 0.8rem;
      line-height: 1;
      border-radius: 50px;
    }

    img {
      position: absolute;
      bottom: -4rem;
      width: 17rem;
      height: 17rem;
    }
  }

  main.pokemonInfo-content {
    background-color: #fff;
    height: 100%;
    width: inherit;
    border-radius: 3rem 3rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 80%;
      height: 100%;
      word-break: break-all;
      justify-content: center;
      max-width: 39rem;
    }

    .bloc-tabs {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .tabs {
      padding: 1rem 0.6rem 0.6rem 0.6rem;
      text-align: center;
      color: #232323;
      cursor: pointer;
      position: relative;
      outline: none;
      border-bottom: 1px solid transparent;
      font-size: larger;
      font-weight: bolder;
    }

    .active-tabs {
      border-bottom: 1px solid transparent;
      transition: all ease-in-out 0.5s;
    }

    .bloc-tabs h3 {
      font-size: clamp(1rem, 1.5vw, 1.5rem);
    }

    .active-tabs::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 2px);
      height: 5px;
      background: rgb(88, 147, 241);
    }

    .content-tabs {
      flex-grow: 1;
      display: flex;
      align-content: center;
      align-items: stretch;
    }
    .content {
      background: white;
      padding: 20px;
      width: 100%;
      display: none;
    }
    .content h2 {
      padding: 0px 0 5px 0px;
    }
    .content hr {
      width: 100px;
      height: 2px;
      background: #222;
      margin-bottom: 5px;
    }
    .content p {
      width: 100%;
      height: 100%;
    }
    .active-content {
      display: block;
    }

    ul {
      margin-top: 0.3rem;
    }

    ul li {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0.3rem 0;

      .stats-type {
        width: 30%;
      }
      .progress {
        width: 70%;
        border-radius: 10px;
        background: #d9d9d9;

        .progressbar.steel {
          background-color: var(--steel);
        }

        .progressbar.fire {
          background-color: var(--fire);
        }

        .progressbar.grass {
          background-color: var(--grass);
        }

        .progressbar.electric {
          background-color: var(--electric);
        }

        .progressbar.water,
        .progressbar.ice {
          background-color: var(--water-ice);
        }

        .progressbar.ground {
          background-color: var(--ground);
        }

        .progressbar.rock {
          background-color: var(--rock);
        }

        .progressbar.fairy {
          background-color: var(--fairy);
        }

        .progressbar.poison {
          background-color: var(--poison);
        }

        .progressbar.bug {
          background-color: var(--bug);
        }

        .progressbar.dragon {
          background-color: var(--dragon);
        }

        .progressbar.psychic {
          background-color: var(--psychic);
        }

        .progressbar.flying {
          background-color: var(--flying);
        }

        .progressbar.fighting {
          background-color: var(--fighting);
        }

        .progressbar.normal {
          background-color: var(--normal);
        }

        .progressbar.ghost {
          background-color: var(--ghost);
        }

        .progressbar.dark {
          background-color: var(--dark);
        }

        .progressbar {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;

          span {
            color: #fff;
          }
        }
      }
    }

    .about-info {
      width: 70%;
    }
    .about-info span {
      margin-right: 0.5rem;
    }
    .about-info span svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }

    span.moves {
      font-size: 1rem;
    }
  }

  @media (max-width: 350px) {
    .pokemonInfo-wrapper {
      height: initial;
    }

    header.pokemonInfo-header {
      padding: 1rem;
    }

    main.pokemonInfo-content {
      .container {
        width: 95%;
      }
    }
  }
`;
