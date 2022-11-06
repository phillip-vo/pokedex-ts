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
    case "dark":
      return "#5b5466";
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
        return "images/fire-type.png";
      case "grass":
        return "images/grass-type.png";
      case "psychic":
        return "images/psychic-type.png";
      case "poison":
        return "images/poison-type.png";
      case "normal":
        return "images/normal-type.png";
      case "water":
        return "images/water-type.png";
      case "electric":
        return "images/electric-type.png";
      case "ice":
        return "images/ice-type.png";
      case "fighting":
        return "images/fighting-type.png";
      case "ground":
        return "images/ground-type.png";
      case "flying":
        return "images/flying-type.png";
      case "bug":
        return "images/bug-type.png";
      case "rock":
        return "images/rock-type.png";
      case "ghost":
        return "images/ghost-type.png";
      case "dragon":
        return "images/dragon-type.png";
      case "dark":
        return "images/dark-type.png";
      case "steel":
        return "images/steel-type.png";
      case "fairy":
        return "images/fairy-type.png";
      default:
        break;
    }
  }
  