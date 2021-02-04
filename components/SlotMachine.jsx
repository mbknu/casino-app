import React from "react";

const SlotMachine = () => {
  //   let a = "🍒";
  //   let b = "🍊";
  //   let c = "🥝";

  let a = "🍒";
  let b = "🍒";
  let c = "🍒";

  if (a === b && a === c) {
    return (
      <>
        <h1>
          {a} {b} {c}{" "}
        </h1>
        <p>WIN</p>
      </>
    );
  } else {
    return (
      <>
        <h1>
          {a} {b} {c}{" "}
        </h1>
        <p>TRY AGAIN</p>
      </>
    );
  }
};

export default SlotMachine;
