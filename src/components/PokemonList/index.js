import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Estilos
import { Wrapper, Content } from "./PokemonList.style";

// Componentes
import PokemonCard from "../PokemonCard";
import Loader from "../Loader";
import LoadMoreButton from "../LoadMoreButton";
import Header from "../Header";
import BackToTopButton from "../BackToTopButton";

function PokemonList() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [allPokemonsNames, setAllPokemonsNames] = useState([]);
  const [filteredPokemonsList, setFilteredPokemonsList] = useState();
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [checkIfIsMain, setCheckIfIsMain] = useState(true);

  const pokemomsNamesArray = [];

  async function getAllPokemonsName() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=900");
      const data = await res.json();
      data.results.map((pokemon, index) => {
        return (pokemomsNamesArray[index] = pokemon.name);
        //setAllPokemonsNames(pokemon.name);
      });
      setAllPokemonsNames(pokemomsNamesArray);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllPokemons() {
    setIsLoading(true);
    try {
      const res = await fetch(loadMore);
      const data = await res.json();

      setLoadMore(data.next);

      function createPokemonObject(results) {
        results.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();
          setAllPokemons((currentList) => {
            return [...currentList, data];
          });
          setIsLoading(false);
        });
      }
      createPokemonObject(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPokemonsName();
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, []);
  
  useEffect(() => {
    filteredPokemonsList ? setCheckIfIsMain(true) : setCheckIfIsMain(false);
  }, [filteredPokemonsList]);

  async function onSearchSubmit(e) {
    setIsLoadingCard(true);
    try {
      const pokemonNameOrId = e.toLowerCase();
      if (pokemonNameOrId === "") {
        setAllPokemons(allPokemons);
        setFilteredPokemonsList();
        setIsLoadingCard(false);
      } else {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
        ).then((res) => {
          return res.json();
        });
        setFilteredPokemonsList([response]);
        setIsLoadingCard(false);
      }
    } catch (error) {
      alert("The name or id of the pokemon you searched for does not exist, please enter a valid name or id");
    }
  }

  const cancelAction = () => {
    setAllPokemons(allPokemons);
    onSearchSubmit("");
  };

  return (
    <>
      <Wrapper>
        <Header
          setShowSearchBar={true}
          onSubmit={onSearchSubmit}
          backToMain={cancelAction}
          showBackButton={checkIfIsMain}
          pokemonNameSuggestion={allPokemonsNames}
        />
        <BackToTopButton />
        {filteredPokemonsList ? (
          <Content>
            {filteredPokemonsList
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((pokemonStats, index) => (
                <Link key={index} to={`pokemon/${pokemonStats.name}`}>
                  <PokemonCard
                    key={index}
                    id={pokemonStats.id}
                    image={
                      pokemonStats.sprites.other["official-artwork"]
                        .front_default
                    }
                    name={pokemonStats.name}
                    types={pokemonStats.types}
                    type={pokemonStats.types[0].type.name}
                    loadingCardPokemon={isLoadingCard}
                  />
                </Link>
              ))}
          </Content>
        ) : (
          <Content>
            {allPokemons
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((pokemonStats, index) => (
                <Link key={index} to={`pokemon/${pokemonStats.name}`}>
                  <PokemonCard
                    key={index}
                    id={pokemonStats.id}
                    image={
                      pokemonStats.sprites.other["official-artwork"]
                        .front_default
                    }
                    name={pokemonStats.name}
                    types={pokemonStats.types}
                    type={pokemonStats.types[0].type.name}
                  />
                </Link>
              ))}

            {isLoading ? (
              <Loader />
            ) : (
              <LoadMoreButton callback={() => getAllPokemons()} />
            )}
          </Content>
        )}
      </Wrapper>
    </>
  );
}

export default PokemonList;
