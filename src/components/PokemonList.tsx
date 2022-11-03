import React from "react";
import { Container, Row } from "react-bootstrap";
import { Pokemon } from "../pokemons/Pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <Container fluid className="dark-bg pb-5" style={{ paddingTop: "5rem" }}>
      <Row xs={1} md={3} className="justify-content-center gap-5">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
