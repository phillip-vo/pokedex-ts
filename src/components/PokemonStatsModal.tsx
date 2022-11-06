import React from "react";
import {
  Col,
  Container,
  Image,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { Pokemon } from "../pokemons/Pokemon";
import {
  checkTypes,
  addLeadingZeros,
  getTypeBackgroundColor,
} from "../utils/utils";

interface PokemonStatsModalProps {
  pokemon: any;
  show: boolean;
  onHide: () => void;
}

function PokemonStatsModal(props: PokemonStatsModalProps) {
  const { id, name, height, weight, sprites, types, stats } = props.pokemon;
  const { show, onHide } = props;

  const typesList: any = types?.map((obj: any) => obj["type"]["name"]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="border-0"
        style={{ backgroundColor: getTypeBackgroundColor(typesList[0]) + "90" }}
      >
        <Image
          src="images/pokemon-pokeball-icon-19.png"
          width={25}
          className="opacity-50"
        />
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(36,41,63,1) 50%, ${getTypeBackgroundColor(
            typesList[0]
          )}90 100%)`,
        }}
      >
        <Container>
          <Row>
            <Col sm={12}>
              <Row>
                <Col sm={12} lg={6} className="text-center">
                  <Image
                    src={sprites?.other.home.front_default}
                    fluid
                    width={300}
                  />
                </Col>
                <Col
                  sm={12}
                  lg={6}
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <strong className="mt-3">#{id}</strong>
                  <h2
                    className="text-capitalize mt-0 mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    {name}
                  </h2>
                  <div className="d-flex justify-content-center gap-2 w-100">
                    {types?.map((pokemonType: any, index: any) => (
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
                  <div className="d-flex justify-content-center gap-5 mt-3">
                    <div className="d-flex align-items-center gap-2">
                      <GiBodyHeight />
                      Height: <strong>{height}</strong>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <FaWeight />
                      Weight: <strong>{weight}</strong>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="text-center m-2">
              <hr />
            </Col>
            <Col sm={12}>
              <h4>Stats</h4>
              <Row>
                {stats?.map((pokemonStat: any, index: any) => (
                  <div key={index} className="d-flex gap-2">
                    <Col
                      xs={6}
                      sm={6}
                      md={5}
                      lg={3}
                      className="d-flex justify-content-between"
                    >
                      <span className="text-capitalize">
                        {pokemonStat["stat"]["name"]}
                      </span>
                      <strong>{pokemonStat["base_stat"]}</strong>
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={7}
                      lg={9}
                      className="d-flex align-items-center"
                    >
                      <ProgressBar
                        variant="info"
                        now={pokemonStat["base_stat"]}
                        className="w-100"
                        style={{
                          height: "10px",
                          backgroundColor: "rgb(85, 85, 85)",
                        }}
                      />
                    </Col>
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer
        className="border-0"
        style={{ backgroundColor: "#24293F" }}
      ></Modal.Footer>
    </Modal>
  );
}

export default PokemonStatsModal;
