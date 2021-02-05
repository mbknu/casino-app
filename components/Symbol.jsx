import React from "react";

import Image from "next/image";
import images from "../constants/Image";

const symbolMap = {
  7: images.seven,
  C: images.cherry,
  B: images.black_sloth,
  D: images.diamond,
  E: images.dollar,
  G: images.grappe,
  H: images.heart,
  L: images.lemon,
  S: images.sloth,
  W: images.watermelon,
};
const Symbol = ({ symbol }) => {
  const imageSrc = symbolMap[symbol];

  const getImage = () => {
    switch (symbol) {
      case "7":
        return images.seven;
        break;
      case "B":
        return images.black_sloth;
        break;
      case "C":
        return images.cherry;
        break;
      case "D":
        return images.diamond;
        break;
      case "E":
        return images.dollar;
        break;
      case "G":
        return images.grappe;
        break;
      case "H":
        return images.heart;
        break;
      case "L":
        return images.lemon;
        break;
      case "S":
        return images.sloth;
        break;
      case "W":
        return images.watermelon;
        break;
      default:
        return images.sloth;
    }
  };

  let symbolSource = getImage();

  return (
    <div>
      <Image src={symbolSource} width="75" height="75" />
    </div>
  );
};

export default Symbol;
