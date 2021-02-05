import React, { useState } from "react";
import useWindowDimensions from "../utils/useWindowDimensions";
import SlotMachine from "./SlotMachine";

const HomePage = () => {
  const [result, setResult] = useState(0);
  const { height, width } = useWindowDimensions();
  console.log(height);

  const doTheMath = (max) => {
    const generateRandomNumber = Math.floor(Math.random() * Math.floor(max));
    setResult(generateRandomNumber);
  };

  return (
    <>
      <SlotMachine result={result} />
      <div>
        <br />
        <button onClick={() => doTheMath(30)}>Play again</button>
        width: {width} ~ height: {height}
      </div>
    </>
  );
};

export default HomePage;
