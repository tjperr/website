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
      For the last few years, the guardian has served{" "}
      <a href="https://www.theguardian.com/environment/ng-interactive/2019/may/25/the-power-switch-tracking-britains-record-coal-free-run">
        an awesome graphic
      </a>
      , showing the UK's move away from coal for electricity generation. As this
      recently stopped updating, I decided to reimplement the page here:
      <section className={utilStyles.headingMd}>
        <CallAPI />
      </section>
    </Layout>
  );
}
