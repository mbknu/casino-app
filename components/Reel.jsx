import React, { useCallback, useEffect, useState } from "react";

import styles from "../styles/Reel.module.css";
import Symbol from "./Symbol";

const Reel = ({ height, width, symbolHeight, shuffleReelSymbol }) => {
  const [arrayOFMiddleSymbol, setSarrayOFMiddleSymbol] = useState([]);

  const newShuffle = shuffleReelSymbol.sort(() => 0.5 - Math.random());
  const getMiddleSymbolAfterSpin = newShuffle[3];
  useEffect(() => {
    if (newShuffle) {
      arrayOFMiddleSymbol.push(getMiddleSymbolAfterSpin);
      console.log({ arrayOFMiddleSymbol });
    }
  }, [arrayOFMiddleSymbol, newShuffle]);
  console.log({ newShuffle });
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
              <Symbol symbol={symbol} key={index} height={symbolHeight} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reel;
