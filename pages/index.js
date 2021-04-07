import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Quotes from "./quotes";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>#ripHMM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-noise"></div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/ripHMM.png"
          height={288}
          width={718}
          alt="Rip HMM Drawing"
        />
        {/* <img src="/images/ripHMM.png" alt="Rip HMM Drawing" /> */}
      </div>

      <header>
        <h3>
          #ripHMM is a complilation of some of my favorite feedback i received
          while working on HMM.
        </h3>
      </header>

      <section className={styles.quotes}>
        <Quotes />
      </section>
    </div>
  );
}
