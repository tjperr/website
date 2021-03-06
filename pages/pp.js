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
          <Link href="/coal">Coal Free</Link>
          <br />A graphic showing the proportion of UK electricity generated
          using coal. Updated daily using a{" "}
          <a href="https://github.com/tjperr/coal_free">backend</a> built on AWS
          lambda.
        </p>
        <p>
          <a href="https://saffron-connect-four.herokuapp.com/">Connie</a>
          <br /> Play connect four against Connie, a neural network that's
          learnt to play by playing thousands of games against itself.
        </p>
        <p>
          <a href="https://awful-drawful.herokuapp.com/">Awful Drawful</a>
          <br /> A reimplemetation of the classic Jackbox party game.
        </p>
        <p>
          <a href="https://tjperr.github.io/chromatic-polynomial/">
            Chromatic Polynomial Calculator
          </a>
          <br />
          Draw a graph and calculate its chromatic polynomial, a function that
          enumerates the colourings of the graph.
        </p>
      </section>
    </Layout>
  );
}
