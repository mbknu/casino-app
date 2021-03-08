import React, { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [width, setWidth] = useState(0);
  const [height, setheight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
  }, [width, height]);

  return { width, height };
};

export default useWindowDimensions;
