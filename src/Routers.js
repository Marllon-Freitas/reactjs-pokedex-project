import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes
import PokemonList from "./components/PokemonList";
import PokemonInfo from "./components/PokemonInfo";
import NotFound from "./components/NotFound";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<PokemonList />} />
      <Route path="/pokemon/:pokemonName" exact element={<PokemonInfo />} />
      <Route path="/*" element={<NotFound />} /> 
    </Routes>
  );
}