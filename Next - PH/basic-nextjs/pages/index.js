import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1 className={styles["title-homepage"]}>Welcome Ikram Maulana</h1>

      <Footer />
    </div>
  );
}
