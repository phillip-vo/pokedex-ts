import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  allPokemons: any[];
}

function PokemonList({ allPokemons }: PokemonListProps) {
  const pokemons = allPokemons;
  const [offset, setOffset] = useState<number>(0);
  const [loadNumber, setLoadNumber] = useState<number>(6);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");

  // const getNextOffset = () => {
  //   return offset + loadNumber;
  // };

  // const getPreviousOffset = () => {
  //   if (offset > loadNumber) {
  //     return offset - loadNumber;
  //   } else {
  //     return 0;
  //   }
  // };

  // const handlePreviousPage = () => {
  //   const prevOffSet = getPreviousOffset();
  //   setOffset(prevOffSet);
  //   alert("need to implement");
  // };

  // const handleNextPage = () => {
  //   const newOffSet = getNextOffset();
  //   setOffset(newOffSet);
  //   alert("need to implement");
  // };

  return (
    <Container fluid className="dark-bg pb-5" style={{ paddingTop: "5rem" }}>
      <div className="d-flex justify-content-center align-items-center border border-white m-5">
        <span>Search by name:</span>
        <input
          type="text"
          placeholder="name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <span>Search by type:</span>
        <input
          type="text"
          placeholder="type"
          value={pokemonType}
          onChange={(e) => setPokemonType(e.target.value)}
        />
      </div>
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
      {/* <Button variant="outline-primary" onClick={handlePreviousPage}>
        Previous Page
      </Button>
      <Button variant="outline-primary" onClick={handleNextPage}>
        Next Page
      </Button> */}
    </Container>
  );
}

export default PokemonList;
