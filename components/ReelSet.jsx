import React, { useState } from "react";

import { NUMBER_OF_REELS, NUMBER_OF_SYMBOLS, REEL_REPEATS } from "../constants";
import useWindowDimensions from "../utils/useWindowDimensions";

import Reel from "./Reel";

import styles from "../styles/ReelSet.module.css";

const ReelSet = () => {
  const { height, width } = useWindowDimensions();
  const [symbols, setSymbols] = useState("BBBCDGLCCCEEELLDDMS777XDBL");

  const reelSymbol = symbols.repeat(REEL_REPEATS).split("");
  const shuffleReelSymbol = reelSymbol.sort(() => 0.5 - Math.random());
  const symbolHeight = height / NUMBER_OF_SYMBOLS;

  const onStartSpin = () => {
    const element = reelSymbol.join("");
    setSymbols(element);
  };

  const renderReels = () => {
    let getReelWidth = Math.floor(width / NUMBER_OF_REELS);
    let getReelHeight = Math.floor(height);

    let reelList = Array.apply(null, Array(NUMBER_OF_REELS)).map((el, idx) => {
      return (
        <Reel
          width={getReelWidth}
          height={getReelHeight}
          key={idx}
          index={idx}
          symbolHeight={symbolHeight}
          shuffleReelSymbol={shuffleReelSymbol}
        />
      );
    });
    return (
      <>
        {reelList}
        <button onClick={() => onStartSpin()}>SPIN</button>
      </>
    );
  };
  return (
    <div className={styles.wrapper}>{width && height && renderReels()} </div>
  );
};

export default ReelSet;
