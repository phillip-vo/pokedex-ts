import React from "react";
import { Row } from "react-bootstrap";
import { Pokemon } from "../pokemons/Pokemon";

interface PokemonListProps {
  pokemons: Pokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <ul className="dark">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
