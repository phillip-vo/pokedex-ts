import React, { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { BsLightningCharge } from "react-icons/bs";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { Pokemon } from "../pokemons/Pokemon";
import {
  checkTypes,
  addLeadingZeros,
  getTypeBackgroundColor,
} from "../utils/utils";
import PokemonStatsModal from "./PokemonStatsModal";

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard(props: PokemonCardProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { id, name, height, weight, sprite, types } = props.pokemon;

  const typesList: any = types?.map((obj) => obj["type"]["name"]);

  return (
    <>
      <Card
        className="bg-dark text-center p-0"
        style={{
          width: "25rem",
          marginTop: "5rem",
          backgroundImage: `radial-gradient(circle, ${
            getTypeBackgroundColor(typesList[0]) + "70"
          }, #343A40)`,
        }}
      >
        <div className="card-image">
          <Image src={sprite} fluid width={200} />
        </div>
        <Card.Header className="d-flex align-items-center w-100 border-0">
          <Image
            src="images/pokemon-pokeball-icon-19.png"
            className="opacity-50"
            width={25}
          />
        </Card.Header>
        <Card.Body>
          <Card.Text className="mt-5">
            <strong className="mt-3">#{addLeadingZeros(id, 3)}</strong>
            <h2
              className="text-capitalize mt-0 mb-2"
              style={{ fontWeight: 700 }}
            >
              {name}
            </h2>
            <div className="d-flex justify-content-center gap-2 w-100">
              {types?.map((pokemonType, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center badge gap-2"
                >
                  <Image
                    src={checkTypes(pokemonType["type"]["name"])}
                    fluid
                    width={25}
                  />{" "}
                  <span className="text-capitalize">
                    {pokemonType["type"]["name"]}
                  </span>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <div className="d-flex flex-column align-items-center gap-2">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <GiBodyHeight />
                  <strong>{height}</strong>
                </div>
                <span>Height</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <FaWeight />
                  <strong>{weight}</strong>
                </div>
                Weight
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          className="d-flex align-items-center justify-content-center gap-2 border-0 card-footer"
          style={{ backgroundColor: getTypeBackgroundColor(typesList[0]) }}
          onClick={() => setShowModal(true)}
        >
          <BsLightningCharge />
          More Details
        </Card.Footer>
      </Card>
      <PokemonStatsModal
        pokemon={props.pokemon}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}

export default PokemonCard;
