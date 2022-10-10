import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home name="Thomas Perrett" image="/images/front.jpg">
      <Head>
        <title>{"Thomas Perrett"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 👋 - I'm a Data Scientist and former{" "}
          <Link href="/ac">Graph Theorist</Link>.
        </p>

        <p>
          Find me on <a href="https://github.com/tjperr">GitHub</a> or{" "}
          <a href="https://www.linkedin.com/in/tomperrett/">LinkedIn</a>, or
          check out my <Link href="/pp">personal projects.</Link>
        </p>
      </section>
    </Layout>
  );
}
