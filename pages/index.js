import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home name="Thomas Perrett" image="/images/cake.jpg">
      <Head>
        <title>{"Thomas Perrett"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 👋 - I'm a Data Scientist and former{" "}
          <a href="/ac">Graph Theorist</a> working at Capital One UK .
        </p>
      </section>
    </Layout>
  );
}
