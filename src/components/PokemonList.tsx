import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import PokemonCard from "./PokemonCard";
import TypeCarousel from "./TypeCarousel";
import { IoMdRefresh } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

interface PokemonListProps {
  allPokemons: any[];
}

function PokemonList({ allPokemons }: PokemonListProps) {
  const pokemons = allPokemons || [];

  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");

  return (
    <Container fluid className="dark-bg pb-5" style={{ paddingTop: "5rem" }}>
      <Row className="d-flex  justify-content-around m-5">
        <Col lg={4}>
          <div className="d-flex flex-column gap-3">
            <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
              Search by type:
            </span>
            <TypeCarousel setPokemonType={setPokemonType} />
            <div className="d-flex justify-content-start m-3">
              <Button
                variant="outline-light"
                className="rounded-circle"
                onClick={() => setPokemonType("")}
              >
                <IoMdRefresh />
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="d-flex  flex-column gap-3">
            <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
              Search by name:
            </span>
            <div className="name-container">
              <input
                type="text"
                placeholder="Name"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                className="border border-light border-2 rounded bg-transparent w-100 name-input"
              />
              <FaSearch className="search-icon" />
            </div>
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
