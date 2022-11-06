import React, { useState, useEffect } from "react";
import "./App.css";
import { Layout, PokemonList } from "./components";

function App() {
  const [allPokemons, setAllPokemons] = useState<any[]>([]);

  const getPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?&limit=100`)
      .then((response) => response.json())
      .then((data) => {
        setAllPokemons(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Layout>
      <PokemonList allPokemons={allPokemons} />
    </Layout>
  );
}

export default App;
