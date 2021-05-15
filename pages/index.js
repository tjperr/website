import Head from "next/head";
import Layout from "../components/layout";
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
          <a href="/ac">Graph Theorist</a> working at{" "}
          <a href="https://capitalone.co.uk/">Capital One UK</a>.
        </p>

        <p>
          Find me on <a href="https://github.com/tjperr">GitHub</a>,{" "}
          <a href="https://www.linkedin.com/in/tomperrett/">LinkedIn</a>, or
          check out my <a href="/pp">personal projects</a>.
        </p>
      </section>
    </Layout>
  );
}
