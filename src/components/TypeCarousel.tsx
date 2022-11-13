import React from "react";
import { Carousel, Image, Figure } from "react-bootstrap";
import { checkTypes } from "../utils/utils";

const typeSet1 = ["bug", "dragon", "electric", "fairy", "fighting"];

const typeSet2 = ["fire", "flying", "ghost", "grass"];

const typeSet3 = ["ground", "ice", "normal", "poison"];

const typeSet4 = ["psychic", "rock", "steel", "water"];

interface TypeCarouselProps {
  setPokemonType: (type: string) => void;
}

function TypeCarousel({ setPokemonType }: TypeCarouselProps) {
  return (
    <Carousel indicators={false} interval={null}>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          {typeSet1.map((type) => (
            <Figure
              key={type}
              className="d-flex flex-column align-items-center"
            >
              <Figure.Image
                src={checkTypes(type)}
                width={50}
                className="type-icons"
                onClick={() => setPokemonType(type)}
              />
              <Figure.Caption className="text-center text-capitalize">
                {type}
              </Figure.Caption>
            </Figure>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {typeSet2.map((type) => (
            <Figure
              key={type}
              className="d-flex flex-column align-items-center"
            >
              <Figure.Image
                src={checkTypes(type)}
                width={50}
                className="type-icons"
                onClick={() => setPokemonType(type)}
              />
              <Figure.Caption className="text-center text-capitalize">
                {type}
              </Figure.Caption>
            </Figure>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {typeSet3.map((type) => (
            <Figure
              key={type}
              className="d-flex flex-column align-items-center"
            >
              <Figure.Image
                src={checkTypes(type)}
                width={50}
                className="type-icons"
                onClick={() => setPokemonType(type)}
              />
              <Figure.Caption className="text-center text-capitalize">
                {type}
              </Figure.Caption>
            </Figure>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {typeSet4.map((type) => (
            <Figure
              key={type}
              className="d-flex flex-column align-items-center"
            >
              <Figure.Image
                src={checkTypes(type)}
                width={50}
                className="type-icons"
                onClick={() => setPokemonType(type)}
              />
              <Figure.Caption className="text-center text-capitalize">
                {type}
              </Figure.Caption>
            </Figure>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default TypeCarousel;
