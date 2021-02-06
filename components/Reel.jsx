import React from "react";

import styles from "../styles/Reel.module.css";
import Symbol from "./Symbol";

const Reel = ({ height, width, symbolHeight, shuffleReelSymbol }) => {
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
