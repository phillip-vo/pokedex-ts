import React from "react";
import { Carousel, Image } from "react-bootstrap";

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

interface TypeCarouselProps {
  setPokemonType: (type: string) => void;
}

function TypeCarousel({ setPokemonType }: TypeCarouselProps) {
  return (
    <Carousel indicators={false} interval={null}>
      <Carousel.Item>
        <div className="d-flex justify-content-center gap-2">
          <Image
            src="images/bug-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("bug")}
          />
          <Image
            src="images/dragon-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("dragon")}
          />
          <Image
            src="images/electric-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("electric")}
          />
          <Image
            src="images/fairy-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("fairy")}
          />
          <Image
            src="images/fighting-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("fighting")}
          />
          <Image
            src="images/fire-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("fire")}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center gap-2">
          <Image
            src="images/flying-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("flying")}
          />
          <Image
            src="images/ghost-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("ghost")}
          />
          <Image
            src="images/grass-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("grass")}
          />
          <Image
            src="images/ground-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("ground")}
          />
          <Image
            src="images/ice-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("ice")}
          />
          <Image
            src="images/normal-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("normal")}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center gap-2">
          <Image
            src="images/poison-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("poison")}
          />
          <Image
            src="images/psychic-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("psychic")}
          />
          <Image
            src="images/rock-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("rock")}
          />
          <Image
            src="images/steel-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("steel")}
          />
          <Image
            src="images/water-type.png"
            width={50}
            className="type-icons"
            onClick={() => setPokemonType("water")}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default TypeCarousel;
