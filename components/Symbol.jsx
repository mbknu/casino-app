import React from "react";
import Images from "../assets/Image";
import Image from "next/image";

const Symbol = ({ symbol }) => {
  const getImage = () => {
    switch (symbol) {
      case "7":
        return Images.seven;
        break;
      case "B":
        return Images.black_sloth;
        break;
      case "C":
        return Images.cherry;
        break;
      case "D":
        return Images.diamond;
        break;
      case "E":
        return Images.dollar;
        break;
      case "G":
        return Images.grappe;
        break;
      case "H":
        return Images.heart;
        break;
      case "L":
        return Images.lemon;
        break;
      case "S":
        return Images.sloth;
        break;
      case "W":
        return Images.watermelon;
        break;
      default:
        return Images.sloth;
    }
  };

  let symbolSource = getImage();

  return (
    <div>
      TEST
      <Image src={symbolSource} />
    </div>
  );
};

export default Symbol;
