const convertToEng = (text: string) => {
  const cirilic = text.split("").map((letter, i) => {
    switch (letter.toLowerCase()) {
      case "a":
        return "ф";
        break;
      case "q":
        return "й";
        break;
      case "w":
        return "ц";
        break;
      case "e":
        return "у";
        break;
      case "r":
        return "к";
        break;
      case "t":
        return "е";
        break;
      case "y":
        return "н";
        break;
      case "u":
        return "г";
        break;
      case "i":
        return "ш";
        break;
      case "o":
        return "щ";
        break;
      case "p":
        return "з";
        break;
      case "[":
        return "х";
        break;
      case "s":
        return "ы";
        break;
      case "d":
        return "в";
        break;
      case "f":
        return "а";
        break;
      case "g":
        return "п";
        break;
      case "h":
        return "р";
        break;
      case "j":
        return "о";
        break;
      case "k":
        return "л";
        break;
      case "l":
        return "д";
        break;
      case ";":
        return "ж";
        break;
      case "'":
        return "э";
        break;
      case "z":
        return "я";
        break;
      case "x":
        return "ч";
        break;
      case "c":
        return "с";
        break;
      case "v":
        return "м";
        break;
      case "b":
        return "и";
        break;
      case "n":
        return "т";
        break;
      case "m":
        return "ь";
        break;
      case ",":
        return "б";
        break;
      case ".":
        return "ю";
        break;
      case "/":
        return ".";
        break;
      case "`":
        return "ё";
        break;
      case "?":
        return ",";
        break;
      case "&":
        return "?";
        break;
      default:
        return letter;
    }
  });

  const firstToUpperCase =
    cirilic[0].toUpperCase() + cirilic.splice(1).join("");

  return firstToUpperCase;
};

export default convertToEng;
