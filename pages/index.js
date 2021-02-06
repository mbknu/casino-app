import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReelSet from "../components/ReelSet";
import { createRef } from "react";

export default function Home() {
  const reelSet = createRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Casino App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReelSet ref={reelSet} />
    </div>
  );
}
