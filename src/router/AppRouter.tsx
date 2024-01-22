import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pokemon, Pokemons } from "../pages";
import { Connect } from "../components/Connect";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Connect />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemons/:name" element={<Pokemon />} />

      <Route path="/*" element={<Pokemons />} />
    </Routes>
  );
};
