import React, { useCallback, useEffect, useState } from "react";

import styles from "../styles/Reel.module.css";
import Symbol from "./Symbol";

const Reel = ({ height, width, symbolHeight, shuffleReelSymbol }) => {
  const newShuffle = shuffleReelSymbol.sort(() => 0.5 - Math.random());
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          height: height * symbolHeight,
          width: width,
        }}
      >
        {newShuffle.map((symbol, index) => {
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
