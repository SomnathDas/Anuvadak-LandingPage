import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anuvadak</title>
        <meta
          name="description"
          content="Experience the web, in your native language."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.main} id="main">
        <section
          className={`${styles.sections} ${styles.hero_section}`}
          id="hero"
        >
          <h1>Anuvadak</h1>
          <h3>Experience The Web</h3>
          <h3>In your native language.</h3>
        </section>
        <section
          className={`${styles.sections} ${styles.features_section}`}
          id="features"
        >
          <Card
            title="Texts"
            description="Translate texts in your native language on any webpage quickly"
          />
          <Card
            title="Images"
            description="Some quote written on an image but can't understand? We got you!"
          />
          <Card
            title="Transcribe"
            description="Tired of reading? We will speak for you. Make it happen in one click."
          />
        </section>
        <section
          className={`${styles.sections} ${styles.download_section}`}
          id="download"
        >
          <h1>Download Now</h1>
          <button className={styles.downloadBtn}>Firefox Extention</button>
        </section>
      </main>
    </div>
  );
}
