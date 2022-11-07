export function addLeadingZeros(num: any, totalLength: any) {
    return String(num).padStart(totalLength, '0');
}

export function getTypeBackgroundColor(type: string) {
  switch (type) {
    case "fire":
      return "#ff9741";
    case "grass":
      return "#38bf4b";
    case "psychic":
      return "#ff6675";
    case "poison":
      return "#b567ce";
    case "normal":
      return "#919aa2";
    case "water":
      return "#3692dc";
    case "electric":
      return "#fbd100";
    case "ice":
      return "#4cd1c0";
    case "fighting":
      return "#e0306a";
    case "ground":
      return "#e87236";
    case "flying":
      return "#89aae3";
    case "bug":
      return "#83c300";
    case "rock":
      return "#c8b686";
    case "ghost":
      return "#4c6ab2";
    case "dragon":
      return "#006fc9";
    case "steel":
      return "#5a8ea2";
    case "fairy":
      return "#fb89eb";
    default:
      break;
  }
}

export function checkTypes(type: string) {
    switch (type) {
      case "fire":
        return "images/types/fire-type.png";
      case "grass":
        return "images/types/grass-type.png";
      case "psychic":
        return "images/types/psychic-type.png";
      case "poison":
        return "images/types/poison-type.png";
      case "normal":
        return "images/types/normal-type.png";
      case "water":
        return "images/types/water-type.png";
      case "electric":
        return "images/types/electric-type.png";
      case "ice":
        return "images/types/ice-type.png";
      case "fighting":
        return "images/types/fighting-type.png";
      case "ground":
        return "images/types/ground-type.png";
      case "flying":
        return "images/types/flying-type.png";
      case "bug":
        return "images/types/bug-type.png";
      case "rock":
        return "images/types/rock-type.png";
      case "ghost":
        return "images/types/ghost-type.png";
      case "dragon":
        return "images/types/dragon-type.png";
      case "steel":
        return "images/types/steel-type.png";
      case "fairy":
        return "images/types/fairy-type.png";
      default:
        break;
    }
  }

export function getPokeballColor(type: string) {
    switch (type) {
      case "fire":
        return "images/pokeballs/pokeball-fire.png";
      case "grass":
        return "images/pokeballs/pokeball-grass.png";
      case "psychic":
        return "images/pokeballs/pokeball-psychic.png";
      case "poison":
        return "images/pokeballs/pokeball-poison.png";
      case "normal":
        return "images/pokeballs/pokeball-normal.png";
      case "water":
        return "images/pokeballs/pokeball-water.png";
      case "electric":
        return "images/pokeballs/pokeball-electric.png";
      case "ice":
        return "images/pokeballs/pokeball-ice.png";
      case "fighting":
        return "images/pokeballs/pokeball-fighting.png";
      case "ground":
        return "images/pokeballs/pokeball-ground.png";
      case "flying":
        return "images/pokeballs/pokeball-flying.png";
      case "bug":
        return "images/pokeballs/pokeball-bug.png";
      case "rock":
        return "images/pokeballs/pokeball-rock.png";
      case "ghost":
        return "images/pokeballs/pokeball-ghost.png";
      case "dragon":
        return "images/pokeballs/pokeball-dragon.png";
      case "steel":
        return "images/pokeballs/pokeball-steel.png";
      case "fairy":
        return "images/pokeballs/pokeball-fairy.png";
      default:
        break;
    }
  }
  