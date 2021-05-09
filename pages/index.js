import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm A. cake.</p>
        <p>
          Welcome to my <a href="/">website</a>.
        </p>
      </section>
    </Layout>
  );
}
