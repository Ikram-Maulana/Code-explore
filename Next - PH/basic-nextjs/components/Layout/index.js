import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
      </Head>

      <Header />
      <main className={styles.content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
