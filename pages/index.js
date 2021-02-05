import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";
import ReelSet from "../components/ReelSet";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Casino App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReelSet />
    </div>
  );
}
