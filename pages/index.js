import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";
import ReelSet from "../components/ReelSet";
import { useState } from "react";

export default function Home() {
  const [reelSet, setReelSet] = useState(10);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Casino App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReelSet
        ref={(ref) => {
          reelSet = ref;
        }}
      />
      <button onClick={() => reelSet.spin()}>SPIN</button>
    </div>
  );
}
