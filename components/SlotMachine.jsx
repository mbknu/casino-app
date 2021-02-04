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
  if (result <= 1) {
    const newA = "🥝";
    const newB = "🥝";
    const newC = "🥝";
    return (
      <>
        <h1>WIN</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else if (result > 1 && result <= 5) {
    const newA = "🍒";
    const newB = "🍊";
    const newC = "🍒";
    return (
      <>
        <h1>LOSE</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else if (result >= 6 && result <= 10) {
    const newA = "🥝";
    const newB = "🥝";
    const newC = "🍒";
    return (
      <>
        <h1>LOSE</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else if (result >= 11 && result <= 15) {
    const newA = "🍒";
    const newB = "🍊";
    const newC = "🥝";
    return (
      <>
        <h1>LOSE</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else if (result >= 11 && result <= 15) {
    const newA = "🍊";
    const newB = "🍒";
    const newC = "🥝";
    return (
      <>
        <h1>LOSE</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else if (result >= 16 && result <= 20) {
    const newA = "🍒";
    const newB = "🍊";
    const newC = "🥝";
    return (
      <>
        <h1>LOSE</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else if (result >= 21 && result <= 28) {
    const newA = "🥝";
    const newB = "🍒";
    const newC = "🍒";
    return (
      <>
        <h1>LOSE</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  } else {
    const newA = "🍒";
    const newB = "🍒";
    const newC = "🍒";
    return (
      <>
        <h1>WIN</h1>
        <button onClick={() => doTheMath(30)}>Play again</button>
        <br />
        {newA} {newB} {newC}
      </>
    );
  }
};

export default SlotMachine;
