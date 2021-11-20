import Layout, { siteTitle } from "../components/layout";

import { CallAPI } from "../components/api";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Coal Free</title>
      </Head>
      <h2>Coal Free</h2>
      This chart shows the proportion of UK electricity generated using
      coal:
      <section className={utilStyles.headingMd}>
        <CallAPI />
      </section>
      <br />
      This is a reimplemetation of{" "}
      <a href="https://www.theguardian.com/environment/ng-interactive/2019/may/25/the-power-switch-tracking-britains-record-coal-free-run">
        a graphic in the guardian
      </a>
      , built as an excuse to learn some AWS skills - See the backend code {" "}
      <a href="https://github.com/tjperr/coal_free">here</a>. The data is sourced from the{" "}
      <a href="https://www.elexon.co.uk/">ELEXON BMRS API</a>.
    </Layout>
  );
}
