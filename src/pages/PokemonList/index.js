import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllPokemonsNamesService,
  getPokemonService,
  getAllPokemonsService,
} from "../../services";

// Estilos
import { Wrapper, Content } from "./styled";

// Componentes
import PokemonCard from "../../components/PokemonCard";
import Loader from "../../components/Loader";
import LoadMoreButton from "../../components/LoadMoreButton";
import Header from "../../components/Header";
import BackToTopButton from "../../components/BackToTopButton";
import { baseUrl } from "../../http";

function PokemonList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [allPokemonsNames, setAllPokemonsNames] = useState([]);
  const [filteredPokemonsList, setFilteredPokemonsList] = useState([]);
  const [loadMore, setLoadMore] = useState(`${baseUrl}/pokemon?limit=20`);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [checkIfIsMain, setCheckIfIsMain] = useState(true);

  function createPokemonObject(results) {
    results.forEach((pokemon) => {
      getPokemonService(pokemon?.name).then((response) => {
        setAllPokemons((currentList) => {
          return [...currentList, response.data];
        });
        setIsLoading(false);
      });
    });
  }

  function getAllPokemons() {
    setIsLoading(true);
    getAllPokemonsService(loadMore)
      .then((response) => {
        setLoadMore(response?.data?.next);
        createPokemonObject(response?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const pokemomsNamesArray = [];
    getAllPokemonsNamesService()
      .then((response) => {
        response?.data?.results.forEach((pokemon) => {
          pokemomsNamesArray.push(pokemon.name);
        });
        setAllPokemonsNames(pokemomsNamesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filteredPokemonsList.length > 0 ? setCheckIfIsMain(true) : setCheckIfIsMain(false);
  }, [filteredPokemonsList]);

  function onSearchSubmit(e) {
    setIsLoadingCard(true);
    const pokemonNameOrId = e.toLowerCase();
    if (pokemonNameOrId === "") {
      setAllPokemons(allPokemons);
      setFilteredPokemonsList([]);
    } else {
      getPokemonService(pokemonNameOrId)
        .then((response) => {
          setFilteredPokemonsList([response?.data]);
        })
        .catch(() => {
          alert(
            "The name or id of the pokemon you searched for does not exist, please enter a valid name or id"
          );
        })
        .finally(() => {
          setIsLoadingCard(false);
        });
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
        {filteredPokemonsList.length > 0 ? (
          <Content>
            <Link to={`pokemon/${filteredPokemonsList[0]?.name}`}>
              <PokemonCard
                id={filteredPokemonsList[0]?.id}
                image={
                  filteredPokemonsList[0]?.sprites?.other["official-artwork"]
                    ?.front_default
                }
                name={filteredPokemonsList[0]?.name}
                types={filteredPokemonsList[0]?.types}
                loadingCardPokemon={isLoadingCard}
              />
            </Link>
          </Content>
        ) : (
          <Content>
            {allPokemons.length > 0 &&
              allPokemons
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((pokemonStats, index) => (
                  <Link key={index} to={`pokemon/${pokemonStats.name}`}>
                    <PokemonCard
                      key={index}
                      id={pokemonStats?.id}
                      image={
                        pokemonStats?.sprites?.other["official-artwork"]
                          ?.front_default
                      }
                      name={pokemonStats?.name}
                      types={pokemonStats?.types}
                      type={pokemonStats?.types[0]?.type?.name}
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
