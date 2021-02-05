import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";
import ReelSet from "../components/ReelSet";
import { createRef, useRef, useState } from "react";

export default function Home() {
  const reelSet = createRef(null);
  console.log({ reelSet });
  return (
    <div className={styles.container}>
      <Head>
        <title>My Casino App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReelSet ref={reelSet} />
      <div>{/* <button onClick={() => spin()}>SPIN</button> */}</div>
    </div>
  );
}
