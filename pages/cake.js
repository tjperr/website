import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home name="A. Cake" image="/images/profile.jpg">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm A. Cake.</p>
        <p>
          Welcome to my <a href="/cake">website</a>.
        </p>
      </section>
    </Layout>
  );
}
