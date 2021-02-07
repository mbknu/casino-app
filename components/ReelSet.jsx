import React, { useCallback, useEffect, useState } from "react";

import { NUMBER_OF_REELS, NUMBER_OF_SYMBOLS, REEL_REPEATS } from "../constants";
import useWindowDimensions from "../utils/useWindowDimensions";

import Reel from "./Reel";

import styles from "../styles/ReelSet.module.css";

const ReelSet = () => {
  const { height, width } = useWindowDimensions();
  const [symbols, setSymbols] = useState("BBBCDGLCCCEEELLDDMS777XDBL");
  const [getShuffleValue, setShuffleValue] = useState([]);

  const reelSymbol = symbols.repeat(REEL_REPEATS).split("");
  const shuffleReelSymbol = reelSymbol.sort(() => 0.5 - Math.random());
  const symbolHeight = height / NUMBER_OF_SYMBOLS;
  const setNewShuffle = reelSymbol.join("");

  // const [onSpin, setOnSpin] = useState(false);
  // const [tick, setTick] = useState(0);
  // const toggleSpinning = useCallback(() => setOnSpin((spin) => !spin), []);
  // useEffect(() => {
  //   if (onSpin) {
  //     setTick(0);
  //   }
  //   const interval = setInterval(() => {
  //     setTick((tick) => tick + 1);
  //     if (
  //       JSON.stringify(getShuffleValue) !== JSON.stringify(shuffleReelSymbol)
  //     ) {
  //       setShuffleValue(setNewShuffle);
  //     } else {
  //       // setShuffleValue(getShuffleValue);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [onSpin, getShuffleValue]);

  const onStartSpin = () => {
    if (JSON.stringify(symbols) !== JSON.stringify(shuffleReelSymbol)) {
      setShuffleValue(setNewShuffle);
    } else {
    }
    setSymbols(setNewShuffle);
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
