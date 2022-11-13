import React, { useState } from "react";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { BsLightningCharge } from "react-icons/bs";
import { AiOutlineDash } from "react-icons/ai";
import Header from "./Header";
import PokemonStatsModal from "./PokemonStatsModal";
import { MOCK_POKEMONS } from "../pokemons/MockPokemons";

function HeroBanner() {
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(JSON.stringify(MOCK_POKEMONS[5], null, " "));

  return (
    <Container fluid className="hero-banner">
      <Header />
      <Row className="mt-5">
        <Col sm={12} lg={6} className="mt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3>#150</h3>
            <h4>
              <span className="d-flex align-items-center badge psychic">
                <Image src="images/types/psychic-type.png" fluid width={25} />{" "}
                Psychic
              </span>
            </h4>
            <h1
              className="display-2 m-2"
              style={{ fontWeight: "700", letterSpacing: "5px" }}
            >
              MEWTWO
            </h1>
            <p className="w-75 text-center">
              Mewtwo is a bipedal feline-like Pokémon. Its appearance is loosely
              based on Mew, with a more of a mutated humanoid look in addition
              to its feline traits. Its body is purple and it has three fingers
              on each hand. Mewtwo projects a faint purple aura when at full
              power.
            </p>
            <Button
              variant="outline-light"
              className="px-3 py-2 hero-btn d-flex gap-2 align-items-center mt-3"
              style={{ fontWeight: 700 }}
              onClick={() => setShowModal(true)}
            >
              <BsLightningCharge />
              More Details
            </Button>
            <div className="d-flex align-items-center m-5">
              <AiOutlineDash size={42} />
              <AiOutlineDash size={56} />
              <AiOutlineDash size={70} />
              <Image src="images/psychic-white-logo.png" fluid width={100} />
              <AiOutlineDash size={70} />
              <AiOutlineDash size={56} />
              <AiOutlineDash size={42} />
            </div>
          </div>
        </Col>
        <Col sm={12} lg={6} className="text-center">
          <Image src="images/mewtwo.png" fluid />
        </Col>
      </Row>
      <PokemonStatsModal
        pokemon={MOCK_POKEMONS[5]}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Container>
  );
}

export default HeroBanner;
