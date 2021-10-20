import Layout, { siteTitle } from "../components/layout";

import { CallAPI } from "../components/api";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home name="coal">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <CallAPI />
      </section>
    </Layout>
  );
}
