import React, { useState } from "react";
import { NUMBER_OF_REELS } from "../constants";
import useWindowDimensions from "../utils/useWindowDimensions";
import Reel from "./Reel";

import styles from "../styles/ReelSet.module.css";

const ReelSet = () => {
  const { height, width } = useWindowDimensions();
  const [reelWidth, setReelWidth] = useState(null);
  const [reelHeight, setReelHeight] = useState(null);
  const [reels, setReels] = useState([]);

  const onLayout = (e) => {
    setReelWidth(width);
    setReelHeight(height);
  };

  const spin = () => {
    reels[0].scrollByOffSet(10);
  };

  const renderReels = () => {
    let getReelWidth = Math.floor(width / NUMBER_OF_REELS);
    let getReelHeight = Math.floor(height / 1.5);

    let reelList = Array.apply(null, Array(NUMBER_OF_REELS)).map((el, idx) => {
      return (
        <Reel
          width={getReelWidth}
          height={getReelHeight}
          key={idx}
          index={idx}
          ref={(ref) => {
            setReels[idx] = ref;
          }}
        />
      );
    });
    return <>{reelList}</>;
  };
  return (
    <div className={styles.wrapper} onLayout={onLayout}>
      {width && height && renderReels()}{" "}
    </div>
  );
};

export default ReelSet;
