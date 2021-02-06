import React, { useEffect, useState } from "react";

import styles from "../styles/Reel.module.css";
import Symbol from "./Symbol";

const Reel = ({ height, width, symbolHeight, shuffleReelSymbol }) => {
  const [getShuffleValue, setShuffleValue] = useState(shuffleReelSymbol);

  useEffect(() => {
    if (JSON.stringify(getShuffleValue) === JSON.stringify(shuffleReelSymbol)) {
      const newShuffle = shuffleReelSymbol.sort(() => 0.5 - Math.random());
      const joinNewShuffle = newShuffle.join("");
      const setNewShuffle = joinNewShuffle.split("");
      const timer = setTimeout(() => {
        setShuffleValue(setNewShuffle);
      }, 75);
      // setShuffleValue(setNewShuffle);
      return () => clearTimeout(timer);
    } else {
      console.log("Arrays are not equal.");
    }
  }, [getShuffleValue]);

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          height: height * symbolHeight,
          width: width,
        }}
      >
        {shuffleReelSymbol.map((symbol, index) => {
          return (
            <div className={styles.symbol}>
              <Symbol
                symbol={symbol}
                key={index}
                index={index}
                height={symbolHeight}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reel;
