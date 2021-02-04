import React, { useState } from "react";

const SlotMachine = () => {
  const getInitialSlots = () => ({
    a: "🍒",
    b: "🍊",
    c: "🥝",
  });
  const [possibleSlots, setpossibleSlots] = useState(getInitialSlots);
  const [result, setResult] = useState(0);

  const doTheMath = (max) => {
    const generateRandomNumber = Math.floor(Math.random() * Math.floor(max));
    setResult(generateRandomNumber);
  };

  console.log(result);
  if (result < 5) {
    const newA = "🥝";
    const newB = "🥝";
    const newC = "🥝";
    return (
      <>
        <button onClick={() => doTheMath(30)}>Win, play again</button>
        {newA} {newB} {newC}
      </>
    );
  }

  const generateRandomSlot = () => {};

  if (
    possibleSlots.a === possibleSlots.b &&
    possibleSlots.a === possibleSlots.c
  ) {
    return (
      <>
        <button onClick={() => doTheMath(30)}>Try</button>
        <h1>
          {possibleSlots.a} {possibleSlots.b} {possibleSlots.c}{" "}
        </h1>
        <p>WIN</p>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => doTheMath(30)}>Try</button>
        <h1>
          {possibleSlots.a} {possibleSlots.b} {possibleSlots.c}{" "}
        </h1>
        <p>TRY AGAIN</p>
      </>
    );
  }
};

export default SlotMachine;
