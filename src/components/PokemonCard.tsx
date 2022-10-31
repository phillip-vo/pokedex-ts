import React from "react";
import { Button, Card } from "react-bootstrap";
import { Pokemon } from "../pokemons/Pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  return (
    <Card className="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pokemon.sprite} width={100} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
