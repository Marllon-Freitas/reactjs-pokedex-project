import http from "../http";

const getAllPokemonsNamesService = () => {
  return http.get("/pokemon?limit=900");
};

const getPokemonService = (pokemonName) => {
  return http.get(`/pokemon/${pokemonName}`);
};

const getPokemonSpeciesService = (pokemonName) => {
  return http.get(`/pokemon-species/${pokemonName}`);
};

const getAllPokemonsService = (url) => {
  return http.get(url);
};

export {
  getAllPokemonsNamesService,
  getPokemonService,
  getAllPokemonsService,
  getPokemonSpeciesService,
};
