import React, { useState } from "react";
import { NUMBER_OF_SYMBOLS } from "../constants";
import styles from "../styles/Reel.module.css";
import Symbol from "./Symbol";

const Reel = ({ height, width }) => {
  const [symbols, setSymbols] = useState("BBCDGLCCCLLDDMS777XDBL");
  const symbolHeight = height / NUMBER_OF_SYMBOLS;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {symbols.split("").map((symbol, index) => {
          return (
            <Symbol
              symbol={symbol}
              key={index}
              index={index}
              height={symbolHeight}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reel;
