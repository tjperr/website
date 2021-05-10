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
        <title>Academic Work</title>
      </Head>
      <header className={styles.header}>
        <Link href="https://xkcd.com/">
          <a>
            <Image
              priority
              src="/images/pika.jpg"
              height={220}
              width={170}
              alt={"Pikachu used graph theory!"}
            />
          </a>
        </Link>
      </header>
      <section className={utilStyles.headingMd}>
        <h2>Ph.D Thesis</h2>
        <a href="http://orbit.dtu.dk/en/publications/roots-of-the-chromatic-polynomial(31df590e-f634-4bf0-9879-768c1548e968).html">
          Roots of the Chromatic Polynomial
        </a>
        {", "}
        Technical University of Denmark 2017.
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Preprints and Publications</h2>

        <ul>
          <li>
            A zero-free interval for chromatic polynomials of graphs with 3-leaf
            spanning trees. Discrete Math. <b>339</b> (2016){" "}
            <a href="http://dx.doi.org/10.1016/j.disc.2016.05.009">DOI</a> (
            <a href="http://arxiv.org/abs/1510.00417">arXiv</a>)
          </li>

          <li>
            Chromatic roots and minor-closed families of graphs. SIAM J.
            Discrete Math. <b>30</b>{" "}
            <a href="http://dx.doi.org/10.1137/15M1040785">DOI</a> (
            <a href="http://arxiv.org/abs/1603.08255">arXiv</a>)
          </li>
          <li>
            Density of real zeros of the Tutte polynomial. With Seongmin Ok.
            Accepted to Combin. Probab. Comput. (
            <a href="https://arxiv.org/abs/1608.08747">arXiv</a>)
          </li>
          <li>
            Density of chromatic roots in minor-closed graph families. With
            Carsten Thomassen. Submitted.
          </li>
          <li>
            Gallai's path decomposition conjecture for graphs of small maximum
            degree. With{" "}
            <a href="http://www.labri.fr/perso/mbonamy/">Marthe Bonamy</a>.
            Submitted. (<a href="https://arxiv.org/abs/1609.06257">arXiv</a>)
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Conferences and Workshops</h2>

        <ul>
          <li>
            Jun 2016 -{" "}
            <a href="http://www.dagstuhl.de/en/program/calendar/semhp/?semnr=16241">
              Graph Polynomials: Towards a Comparative Theory.
            </a>{" "}
            Schloss Dagstuhl, Germany
          </li>
          <li>
            Mar 2016 -
            <a href="http://www.mittag-leffler.se/congress-2016">
              Nordic Congress of Mathematicians.
            </a>{" "}
            Stockholm, Sweden.
          </li>
          <li>
            Aug 2015 -{" "}
            <a href="http://www.imada.sdu.dk/~btoft/GT2015/"> GT2015</a>.
            Nyborg, Denmark.
          </li>
          <li>
            Jul 2015 -{" "}
            <a href="http://tutte2015.ma.rhul.ac.uk/">
              Workshop on New Directions for the Tutte Polynomial: Extensions,
              Interrelations, and Applications
            </a>
            . Royal Holloway University of London, UK.
          </li>
          <li>
            Jul 2015 -{" "}
            <a href="http://www2.warwick.ac.uk/fac/sci/maths/research/events/2014-15/nonsymposium/25bcc/">
              25th British Combinatorial Conference
            </a>
            . Warwick, UK.
          </li>
          <li>
            Jun 2015 -{" "}
            <a href="https://kg15.matheo.si/">
              8th Slovenian Conference on Graph Theory
            </a>
            . Kranjska Gora, Slovenia.
          </li>
          <li>
            Jun 2014 - <a href="http://oc.inpg.fr/conf/icgt2014/">ICGT</a>,
            Grenoble, France.
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Talks</h2>
        <ul>
          <li>Nov 2016 - KIAS Combinatorics Seminar, Seoul, South Korea.</li>
          <li>
            Jun 2016 - Graph Polynomials: Towards a Comparative Theory, Schloss
            Dagstuhl, Germany.
          </li>
          <li>
            Mar 2016 - Nordic Congress of Mathematicians, Stockholm, Sweden.
          </li>
          <li>
            Mar 2016 - University of Birmingham Combinatorics Seminar,
            Birmingham, UK.
          </li>
          <li>
            Feb 2016 - LIAFA Distributed Algorithms and Graphs Seminar, Paris,
            France.
          </li>
          <li>
            Jan 2016 - LaBRI Graphs and Optimisation Seminar, Bordeaux, France.
          </li>
          <li>Nov 2015 - DMO Seminar, McGill University, Canada.</li>
          <li>
            Oct 2015 - Graph Theory Seminar, University of Waterloo, Canada.
          </li>
          <li>Aug 2015 - GT2015, Nyborg, Denmark.</li>
          <li>
            Jul 2015 - Workshop on New Directions for the Tutte Polynomial:
            Extensions, Interrelations, and Applications, Royal Holloway
            University of London, UK.
          </li>
          <li>
            Jul 2015 - 25th British Combinatorial Conference, Warwick, UK.
          </li>
          <li>
            Jun 2015 - 8th Slovenian Conference on Graph Theory, Kranjska Gora,
            Slovenia.
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Teaching</h2>

        <ul>
          <li>Spring 2015 - 01227 Graph Theory</li>
          <li>
            Spring 2015 - 01330 Mathematics 3 - Entrance to Advanced Mathematics
          </li>
          <li>
            {" "}
            Spring 2014 - Graph Colouring and Scheduling Problems - 02122
            Software Technology Project
          </li>
        </ul>
      </section>
    </Layout>
  );
}
