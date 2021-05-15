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
            spanning trees. Discrete Math. <b>339</b>, 2016 (
            <a href="http://dx.doi.org/10.1016/j.disc.2016.05.009">DOI</a>,{" "}
            <a href="http://arxiv.org/abs/1510.00417">arXiv</a>)
          </li>

          <li>
            Chromatic roots and minor-closed families of graphs. SIAM J.
            Discrete Math. <b>30</b>, 2016 (
            <a href="http://dx.doi.org/10.1137/15M1040785">DOI</a>,{" "}
            <a href="http://arxiv.org/abs/1603.08255">arXiv</a>)
          </li>
          <li>
            Density of real zeros of the Tutte polynomial. With Seongmin Ok.
            Combin. Probab. Comput. <b>27</b>, 2018 (
            <a href="https://doi.org/10.1017/S0963548318000019">DOI</a>,{" "}
            <a href="https://arxiv.org/abs/1608.08747">arXiv</a>)
          </li>
          <li>
            Density of chromatic roots in minor-closed graph families. With{" "}
            <a href="http://www2.mat.dtu.dk/people/C.Thomassen/">
              Carsten Thomassen
            </a>
            . Combin. Probab. Comput. <b>27</b>, 2018 (
            <a href="https://doi.org/10.1017/S0963548318000184">DOI</a>)
          </li>
          <li>
            Gallai's path decomposition conjecture for graphs of small maximum
            degree. With{" "}
            <a href="http://www.labri.fr/perso/mbonamy/">Marthe Bonamy</a>.
            Discrete. Math. <b>342</b>, 2019 (
            <a href="https://doi.org/10.1016/j.disc.2019.01.005">DOI</a>,{" "}
            <a href="https://arxiv.org/abs/1609.06257">arXiv</a>)
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Conferences and Workshops</h2>

        <h3>2016</h3>
        <ul>
          <li>
            <a href="http://www.dagstuhl.de/en/program/calendar/semhp/?semnr=16241">
              Graph Polynomials: Towards a Comparative Theory.
            </a>{" "}
            Schloss Dagstuhl, Germany
          </li>
          <li>
            <a href="http://www.mittag-leffler.se/congress-2016">
              Nordic Congress of Mathematicians.
            </a>{" "}
            Stockholm, Sweden.
          </li>
        </ul>

        <h3>2015</h3>
        <ul>
          <li>
            <a href="http://www.imada.sdu.dk/~btoft/GT2015/"> GT2015</a>.
            Nyborg, Denmark.
          </li>
          <li>
            <a href="http://tutte2015.ma.rhul.ac.uk/">
              Workshop on New Directions for the Tutte Polynomial: Extensions,
              Interrelations, and Applications
            </a>
            . Royal Holloway University of London, UK.
          </li>
          <li>
            <a href="http://www2.warwick.ac.uk/fac/sci/maths/research/events/2014-15/nonsymposium/25bcc/">
              25th British Combinatorial Conference
            </a>
            . Warwick, UK.
          </li>
          <li>
            <a href="https://kg15.matheo.si/">
              8th Slovenian Conference on Graph Theory
            </a>
            . Kranjska Gora, Slovenia.
          </li>
        </ul>

        <h3>2014</h3>
        <ul>
          <li>
            <a href="http://oc.inpg.fr/conf/icgt2014/">ICGT</a>, Grenoble,
            France.
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Talks</h2>

        <h3>2016</h3>
        <ul>
          <li>KIAS Combinatorics Seminar, Seoul, South Korea.</li>
          <li>
            Graph Polynomials: Towards a Comparative Theory, Schloss Dagstuhl,
            Germany.
          </li>
          <li>Nordic Congress of Mathematicians, Stockholm, Sweden.</li>
          <li>
            University of Birmingham Combinatorics Seminar, Birmingham, UK.
          </li>
          <li>
            LIAFA Distributed Algorithms and Graphs Seminar, Paris, France.
          </li>
          <li>LaBRI Graphs and Optimisation Seminar, Bordeaux, France.</li>
        </ul>
        <h3>2015</h3>
        <ul>
          <li>DMO Seminar, McGill University, Canada.</li>
          <li>Graph Theory Seminar, University of Waterloo, Canada.</li>
          <li>GT2015, Nyborg, Denmark.</li>
          <li>
            Workshop on New Directions for the Tutte Polynomial: Extensions,
            Interrelations, and Applications, Royal Holloway University of
            London, UK.
          </li>
          <li>25th British Combinatorial Conference, Warwick, UK.</li>
          <li>
            8th Slovenian Conference on Graph Theory, Kranjska Gora, Slovenia.
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
            Spring 2014 - 02122 Software Technology Project (Graph Colouring and
            Scheduling Problems)
          </li>
        </ul>
      </section>
    </Layout>
  );
}
