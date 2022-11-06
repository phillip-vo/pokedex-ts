import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { BsLightningCharge } from "react-icons/bs";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import {
  checkTypes,
  addLeadingZeros,
  getTypeBackgroundColor,
} from "../utils/utils";
import PokemonStatsModal from "./PokemonStatsModal";
import Spinner from "react-bootstrap/Spinner";

interface PokemonCardProps {
  url: string;
  searchType: string;
}

function PokemonCard(props: PokemonCardProps) {
  const [pokemon, setPokemon] = useState<any>({
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    sprite: {
      other: {
        front_default: "",
      },
    },
    types: [],
    stats: [],
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const { url, searchType } = props;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPokemon(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }, []);

  console.log("Type prop passed from cards list: ", searchType);

  const typesList: any = pokemon?.types?.map((obj: any) => obj["type"]["name"]);

  return (
    <>
      {typesList.find((typeName: any) => typeName === searchType)?.length >
        0 && (
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
              <Image
                src={pokemon?.sprites?.other.home.front_default}
                fluid
                width={200}
              />
            </div>
            <Card.Header className="d-flex align-items-center w-100 border-0">
              <Image
                src="images/pokemon-pokeball-icon-19.png"
                className="opacity-50"
                width={25}
              />
            </Card.Header>
            <Card.Body>
              {isLoading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}

              {!isLoading && (
                <Card.Text className="mt-5">
                  <strong className="mt-3">
                    #{addLeadingZeros(pokemon.id, 3)}
                  </strong>
                  <h2
                    className="text-capitalize mt-0 mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    {pokemon.name}
                  </h2>
                  <div className="d-flex justify-content-center gap-2 w-100">
                    {pokemon?.types?.map((pokemonType: any, index: any) => (
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
                        <strong>{pokemon.height}</strong>
                      </div>
                      <span>Height</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <FaWeight />
                        <strong>{pokemon.weight}</strong>
                      </div>
                      Weight
                    </div>
                  </div>
                </Card.Text>
              )}
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
            pokemon={pokemon}
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </>
      )}
      {!searchType && (
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
              <Image
                src={pokemon?.sprites?.other.home.front_default}
                fluid
                width={200}
              />
            </div>
            <Card.Header className="d-flex align-items-center w-100 border-0">
              <Image
                src="images/pokemon-pokeball-icon-19.png"
                className="opacity-50"
                width={25}
              />
            </Card.Header>
            <Card.Body>
              {isLoading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}

              {!isLoading && (
                <Card.Text className="mt-5">
                  <strong className="mt-3">
                    #{addLeadingZeros(pokemon.id, 3)}
                  </strong>
                  <h2
                    className="text-capitalize mt-0 mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    {pokemon.name}
                  </h2>
                  <div className="d-flex justify-content-center gap-2 w-100">
                    {pokemon?.types?.map((pokemonType: any, index: any) => (
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
                        <strong>{pokemon.height}</strong>
                      </div>
                      <span>Height</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <FaWeight />
                        <strong>{pokemon.weight}</strong>
                      </div>
                      Weight
                    </div>
                  </div>
                </Card.Text>
              )}
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
            pokemon={pokemon}
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </>
      )}
    </>
  );
}

export default PokemonCard;
