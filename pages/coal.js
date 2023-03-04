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
      Coal fired power stations used to generate the majority of power in the UK, but over the last 10 years this has reduced signficantly. This chart tracks coal-free days since 2017:
      <section className={utilStyles.headingMd}>
        <CallAPI />
      </section>
      <br />
      This is a reimplemetation of{" "}
      <a href="https://www.theguardian.com/environment/ng-interactive/2019/may/25/the-power-switch-tracking-britains-record-coal-free-run">
        a graphic in the guardian
      </a>
      . See the backend code {" "}
      <a href="https://github.com/tjperr/coal_free">here</a>. The data is sourced from the{" "}
      <a href="https://www.elexon.co.uk/">ELEXON BMRS API</a>.
    </Layout>
  );
}
