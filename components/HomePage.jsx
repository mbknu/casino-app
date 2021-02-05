import React, { useState } from "react";
import ReelSet from "./ReelSet";
import SlotMachine from "./SlotMachine";

const HomePage = () => {
  const [result, setResult] = useState(0);

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
        <ReelSet />
      </div>
    </>
  );
};

export default HomePage;
