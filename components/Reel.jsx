import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { slideInDown } from "react-animations";
import { NUMBER_OF_SYMBOLS, REEL_REPEATS } from "../constants";
import styles from "../styles/Reel.module.css";
import Symbol from "./Symbol";

const Reel = ({ height, width }) => {
  const [symbols, setSymbols] = useState("BBCDGLCCCLLDDMS777XDBL");
  const reelSymbol = symbols.repeat(REEL_REPEATS).split("");
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const scrollPosAnimation = keyframes`${slideInDown}`;

  const SlideDiv = styled.div`
    animation: 5s ${scrollPosAnimation};
  `;
  const symbolHeight = height / NUMBER_OF_SYMBOLS;

  const scrollByOffset = (offset) => {
    setCurrentScrollPos(currentScrollPos + 1 * symbolHeight * offset);
    console.log({ currentScrollPos });
  };

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          height: height * symbolHeight,
          width: width,
          transform: [{ translateY: scrollPosAnimation }],
        }}
      >
        {reelSymbol.map((symbol, index) => {
          return (
            <SlideDiv>
              <Symbol
                symbol={symbol}
                key={index}
                index={index}
                height={symbolHeight}
              />
            </SlideDiv>
          );
        })}
      </div>
      <button onClick={() => scrollByOffset(50)}>SPIN</button>
    </div>
  );
};

export default Reel;
