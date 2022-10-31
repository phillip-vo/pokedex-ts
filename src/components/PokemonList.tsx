import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Pokemon } from "../pokemons/Pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <Container fluid className="dark-bg">
      <Row xs={1} md={3} className="justify-content-around gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
