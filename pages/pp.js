import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Personal Projects</title>
      </Head>
      <header className={styles.header}></header>
      <section className={utilStyles.headingMd}></section>
      <section className={utilStyles.headingMd}>
        <h2>Personal Projects</h2>
        <p>
          <a href="https://saffron-connect-four.herokuapp.com/">Connie</a>: Play
          connect four against Connie, a nerual network that's learnt to play by
          playing thousands of games against itself.
        </p>

        <p>
          <a href="https://saffron-drawful.herokuapp.com/">Awful Drawful</a>: A
          reimplemetation of the classic Jackbox party game.
        </p>
        <p>
          <a href="https://tjperr.github.io/chromatic-polynomial/">
            Chromatic Polynomial Calculator
          </a>
          : The chromatic polynomial is a polynomial associated to a graph. It
          counts the number of graph colorings as a function of the number of
          colors. This application enables the user to draw a graph and obtain
          its chromatic polynomial.
        </p>
      </section>
    </Layout>
  );
}
