import React from "react";
import "./App.css";
import { Layout, PokemonList } from "./components";
import { MOCK_POKEMONS } from "./pokemons/MockPokemons";

function App() {
  return (
    <Layout>
      <PokemonList pokemons={MOCK_POKEMONS} />
    </Layout>
  );
}

export default App;
