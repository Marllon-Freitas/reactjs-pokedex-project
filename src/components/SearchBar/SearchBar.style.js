import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 5rem 0 0 0;
  z-index: 10;

  .pokemonNameSuggestion {
    position: absolute;
    top: 3rem;
    width: 100%;
    max-height: 10rem;
    overflow: hidden;
    overflow-y: auto;
    background-color: #efefef;
    font-size: 1rem;
    color: #333;
    transition: all ease-in-out 0.2s;

    .pokemon-name {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0.5rem 0 0.5rem 0;
      display: flex;
      align-items: center;
      transition: all ease-in-out 0.2s;
      cursor: pointer;

      p {
        padding: 0 0 0 2.5rem;
      }
    }
    .pokemon-name:hover {
      background-color: #e1e1e1;
    }
  }

  .pokemonNameSuggestion::-webkit-scrollbar {
    display: none;
  }
`;

export const IconSearchButton = styled.div`
  height: 3rem;
  padding: 0 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: absolute;
  svg {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const SearchBarContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background-color: #efefef;
  transition: all ease-in-out 0.2s;
  :hover,
  :focus {
    background-color: #e1e1e1;
  }
  form {
    display: flex;
    align-items: center;
    flex: 1;
  }
  form input {
    flex: 1;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    padding: 0 0 0 2.5rem;
    color: #333;
    border-radius: 0.5rem;
  }
  form input:focus {
    outline: none;
    background-color: #e1e1e1;
  }
  form button {
    display: none;
  }
`;
