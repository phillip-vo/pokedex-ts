import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { Pokemon } from "../pokemons/Pokemon";

interface PokemonStatsModalProps {
  pokemon: Pokemon;
  show: boolean;
  onHide: () => void;
}

function PokemonStatsModal(props: PokemonStatsModalProps) {
  const { id, name, height, weight, sprite, types, stats } = props.pokemon;
  const { show, onHide } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="pokemon-modal"
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="bg-dark border-0"
      >
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark" style={{ borderRadius: "0 0 " }}>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <Image src={sprite} fluid />
              <p>#{id}</p>
              <ul>
                {types?.map((t) => (
                  <li>{t["type"]["name"]}</li>
                ))}
              </ul>
              <p>Height: {height}</p>
              <p>Weight: {weight}</p>
            </Col>
            <Col sm={12} md={6}>
              <h4>Stats</h4>
              {stats?.map((s) => (
                <>
                  <span>{s["stat"]["name"]}</span>
                  <p>{s["base_stat"]}</p>
                  <ProgressBar variant="success" now={s["base_stat"]} />
                </>
              ))}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default PokemonStatsModal;
