import React, { useEffect, useState } from "react";

// Estilos
import { Wrapper, SearchBarContent, IconSearchButton } from "./styled";

function SearchBar({ onSubmit, pokemonNameSuggestion }) {
  const [searchInput, setSearchInput] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
    setFilterSearch([]);
  };

  function handleAutocompleteClick(name) {
    onSubmit(name);
    setSearchInput(name);
    setFilterSearch([]);
  }
  const handleFilter = (e) => {
    const newFilter = pokemonNameSuggestion.filter((name) => {
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setSearchInput(e.target.value);
    setFilterSearch(newFilter);
  };

  useEffect(() => {
    if (searchInput === "") {
      setFilterSearch([]);
    }
  }, [searchInput]);

  return (
    <Wrapper>
      <SearchBarContent>
        <IconSearchButton>
          <svg
            onClick={onSearchSubmit}
            className="gUZ B9u U9O kVc"
            height="16"
            width="16"
            viewBox="0 0 24 24"
            aria-label="Ícone de pesquisa"
            role="img"
          >
            <path
              d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"
              fill="#767676"
            ></path>
          </svg>
        </IconSearchButton>
        <form>
          <input
            type="text"
            placeholder="Type a pokemon name or id"
            onChange={handleFilter}
            value={searchInput}
          />
          <button type="submit" onClick={onSearchSubmit}>
            button
          </button>
        </form>
      </SearchBarContent>
      {filterSearch.length > 0 && (
        <div className="pokemonNameSuggestion">
          {filterSearch.map((name) => {
            return (
              <>
                <div
                  className="pokemon-name"
                  onClick={() => {
                    handleAutocompleteClick(name);
                  }}
                >
                  <IconSearchButton>
                    <svg
                      onClick={() => {
                        handleAutocompleteClick(name);
                      }}
                      className="gUZ B9u U9O kVc"
                      height="16"
                      width="16"
                      viewBox="0 0 24 24"
                      aria-label="Ícone de pesquisa"
                      role="img"
                    >
                      <path
                        d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"
                        fill="#767676"
                      ></path>
                    </svg>
                  </IconSearchButton>
                  <p>{name}</p>
                </div>
              </>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
}

export default SearchBar;
