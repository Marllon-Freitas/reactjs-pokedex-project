import React from "react";
import LoaderCard from "../LoaderCard";

// Estilos
import { Wrapper, Content } from "./PokemonCard.style";

function PokemonCard({ id, image, name, types, type, loadingCardPokemon }) {
  function formatId(id) {
    if (id > 99) {
      return `#${id}`;
    } else if (id > 9) {
      return `#0${id}`;
    } else {
      return `#00${id}`;
    }
  }

  return (
    <Wrapper>
      <Content className={type}>
        {loadingCardPokemon ? (
          <LoaderCard />
        ) : (
          <>
            <div className="pokemonCard-pokeball">
              <svg
                width="114"
                height="117"
                viewBox="0 0 114 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0330115 60.5C0.0330115 44.4544 6.4071 29.066 17.753 17.72C29.099 6.37409 44.4874 1.00279e-06 60.533 -2.08616e-07C76.5786 -1.42003e-06 91.967 6.37408 103.313 17.72C107.135 21.5421 110.393 25.8229 113.033 30.4331C113.033 43 113.033 34.5 113.033 42.5L113.033 60.5L87.8486 60.5C87.8486 53.2554 84.9708 46.3076 79.8481 41.1849C74.7254 36.0623 67.7776 33.1844 60.533 33.1844C53.2885 33.1844 46.3406 36.0623 41.2179 41.1849C36.0953 46.3076 33.2174 53.2554 33.2174 60.5L0.0330115 60.5Z"
                  fill="white"
                  fill-opacity="0.25"
                />
                <path
                  d="M-8.9407e-07 70C-8.9407e-07 86.0456 6.37409 101.434 17.72 112.78C18.9351 113.995 20.1964 115.153 21.5 116.252C20.2984 115.382 22.6399 117.213 21.5 116.252C57.9864 116.252 47.6752 116.252 60.5 116.252C73.3248 116.252 62.0137 116.252 99.5 116.252C98.3601 117.213 100.702 115.382 99.5 116.252C100.804 115.153 102.065 113.995 103.28 112.78C107.102 108.958 110.36 104.677 113 100.067C113 87.5 113 96 113 88L113 70L87.8156 70C87.8156 77.2446 84.9377 84.1924 79.8151 89.3151C74.6924 94.4377 67.7446 97.3156 60.5 97.3156C53.2554 97.3156 46.3076 94.4377 41.1849 89.3151C36.0623 84.1924 33.1844 77.2446 33.1844 70H-8.9407e-07Z"
                  fill="white"
                  fill-opacity="0.25"
                />
                <path
                  d="M81 64.5C81 75.8218 71.8218 85 60.5 85C49.1782 85 40 75.8218 40 64.5C40 53.1782 49.1782 44 60.5 44C71.8218 44 81 53.1782 81 64.5Z"
                  fill="white"
                  fill-opacity="0.25"
                />
              </svg>
            </div>
            <header className="pokemonCard-head">
              <h3 className="pokemonCard-number">
                {id < 999 ? formatId(id) : `#${id}`}
              </h3>
              <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            </header>
            <div className="pokemonCard-content">
              <div className="pokemonCard-content_span">
                {types.map((type, index) => {
                  return <span key={index}>{type.type.name}</span>;
                })}
              </div>
              <img src={image} alt={name} />
            </div>
          </>
        )}
      </Content>
    </Wrapper>
  );
}

export default PokemonCard;
