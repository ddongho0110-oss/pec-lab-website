import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import styles from "./research.module.css";

export const metadata: Metadata = {
  title: "Research",
};

const areas = [
  {
    n: "01",
    title: "Electrochemistry",
    image: "/images/research/electrochemistry.png",
    lead:
      "Controlling electrochemical reactions at electrified interfaces for selective and sustainable chemical conversion.",
    description:
      "Our research focuses on how electrode materials, electrolytes, and interfacial environments govern reaction pathways and product selectivity. We develop electrochemical systems for energy conversion, molecular synthesis, and analytical applications.",
    topics: [
      "CO₂ Reduction Reaction",
      "Water & Seawater Splitting",
      "Electroanalytical Chemistry",
      "Selective Electrosynthesis",
    ],
  },
  {
    n: "02",
    title: "Photoelectrochemistry",
    image: "/images/research/photoelectrochemistry.png",
    lead:
      "Coupling semiconductor light absorbers with catalytic interfaces to drive chemical reactions using solar energy.",
    description:
      "Our photoelectrochemical studies integrate light absorption, charge separation, interfacial catalysis, and reaction engineering. Particular emphasis is placed on semiconductor–catalyst interfaces for solar-driven water splitting and CO₂ conversion.",
    topics: [
      "Photoelectrochemical Water Splitting",
      "Photoelectrochemical CO₂ Reduction",
      "Si Photoelectrodes",
      "Semiconductor–Catalyst Interfaces",
    ],
  },
  {
    n: "03",
    title: "Materials Chemistry",
    image: "/images/research/materials-chemistry.png",
    lead:
      "Designing nanomaterials beyond conventional equilibrium structures and understanding their structural evolution.",
    description:
      "We explore non-native crystal structures, metastable phases, and nanoscale interfaces to establish structure–property relationships. Structural and mechanistic characterization reveals how functional materials transform under synthesis and reaction conditions.",
    topics: [
      "Non-native Crystal Structures",
      "Phase Transitions",
      "Nanomaterials & Interfaces",
      "Mechanistic Characterization",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        kicker="RESEARCH"
        title="Chemistry at interfaces."
        description="We combine electrochemistry, photoelectrochemistry, materials synthesis, and mechanistic characterization to understand and control energy-relevant chemical reactions."
      />

      <section className={`section shell ${styles.overview}`}>
        <div className={styles.overviewCopy}>
          <p className="eyebrow">OUR APPROACH</p>

          <h2>
            From materials to
            <br />
            interfacial reactions.
          </h2>

          <p>
            Our research connects materials design with electrochemical and
            photoelectrochemical reaction engineering. By controlling
            composition, structure, interfaces, and reaction environments, we
            seek fundamental principles that enable selective and sustainable
            chemical transformations.
          </p>
        </div>

        <figure className={styles.overviewFigure}>
          <img
            src="/images/research/research-overview.png"
            alt="Overview of PEC Lab research"
          />
        </figure>
      </section>

      <section className={styles.areasSection}>
        <div className="shell">
          <div className={styles.areasHeading}>
            <p className="eyebrow">RESEARCH AREAS</p>
            <h2>What we study.</h2>
          </div>

          <div className={styles.areaList}>
            {areas.map((area, index) => (
              <article
                className={`${styles.area} ${
                  index % 2 === 1 ? styles.areaReverse : ""
                }`}
                key={area.n}
              >
                <div className={styles.visual}>
                  <img src={area.image} alt={`${area.title} research`} />
                </div>

                <div className={styles.copy}>
                  <p className={styles.number}>{area.n}</p>

                  <h3>{area.title}</h3>

                  <p className={styles.lead}>{area.lead}</p>

                  <p className={styles.description}>
                    {area.description}
                  </p>

                  <div className={styles.topics}>
                    {area.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
