import React from "react";

const SlotMachine = ({ result }) => {
  const getInitialSlots = () => ({
    a: "🍒",
    b: "🍊",
    c: "🥝",
  });

  if (result <= 1) {
    const newA = "🥝";
    const newB = "🥝";
    const newC = "🥝";
    return (
      <>
        <h1>WIN</h1>
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
        <br />
        {newA} {newB} {newC}
      </>
    );
  }
};

export default SlotMachine;
