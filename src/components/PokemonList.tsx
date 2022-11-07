import React, { useEffect, useState } from "react";
import { Button, Container, Row, Carousel, Col, Image } from "react-bootstrap";
import { checkTypes } from "../utils/utils";
import PokemonCard from "./PokemonCard";
import TypeCarousel from "./TypeCarousel";

interface PokemonListProps {
  allPokemons: any[];
}

const types = [
  "bug",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

function PokemonList({ allPokemons }: PokemonListProps) {
  const pokemons = allPokemons || [];

  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");

  return (
    <Container fluid className="dark-bg pb-5" style={{ paddingTop: "5rem" }}>
      <Row className="border border-white m-5">
        <Col lg={4} className="d-flex flex-column gap-3 border border-white">
          <span className="" style={{ fontWeight: 700, fontSize: "1.5rem" }}>
            Search by type:
          </span>
          <TypeCarousel setPokemonType={setPokemonType} />
          {/* <div className="d-flex gap-2 flex-wrap border border-white">
            {types.map((type) => (
              <Image
                src={checkTypes(type)}
                width={50}
                onClick={() => setPokemonType(type)}
                className="type-icons"
              />
            ))}
          </div> */}
          <div className="d-flex m-2">
            <Button variant="outline-light" onClick={() => setPokemonType("")}>
              Reset Types
            </Button>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={3} className="justify-content-center gap-5">
        {pokemons
          .filter((data) => {
            if (pokemonName === "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(pokemonName.toLowerCase())
            ) {
              return data;
            }
            return null;
          })
          .map((pokemon: any) => (
            <PokemonCard
              key={pokemon.name}
              pokemonName={pokemon.name}
              url={pokemon.url}
              searchType={pokemonType}
            />
          ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
