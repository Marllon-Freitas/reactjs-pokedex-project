import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: "Segoe UI", sans-serif;
  }

  :root {
    --steel: #9eb7b8;

    --fire: #fb6c6c;

    --grass: #48d0b0;

    --electric: #f7c849;

    --water-ice: #76bdfe;

    --ground: #e0c068;

    --rock: #b8a038;

    --fairy: #f8a0e0;

    --poison: #a040a0;

    --bug: #a8b820;

    --dragon: #97b3e6;

    --psychic: #f85888;

    --flying: #a890f0;

    --fighting: #903028;

    --normal: #a4acaf;

    --ghost: #705898;

    --dark: #707070;
  }
`;
