import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Research",
};

const areas = [
  {
    n: "01",
    title: "Electrochemistry",
    lead:
      "We investigate and control electrochemical reactions at electrified interfaces for selective and sustainable chemical conversion.",
    description:
      "Our research focuses on understanding how electrode materials, electrolytes, and interfacial environments govern reaction pathways and product selectivity. We develop electrochemical systems for energy conversion, molecular synthesis, and analytical applications.",
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
    lead:
      "We couple semiconductor light absorbers with catalytic interfaces to drive chemical reactions using solar energy.",
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
    lead:
      "We design nanomaterials beyond conventional equilibrium structures and investigate their structural evolution during reactions.",
    description:
      "We explore non-native crystal structures, metastable phases, and nanoscale interfaces to establish structure–property relationships. Structural and mechanistic characterization is used to reveal how functional materials transform under synthesis and reaction conditions.",
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

      <section className="section shell research-overview-section">
        <div className="research-overview-copy">
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

        <div className="research-overview-figure">
          <img
            src="/images/research/research-overview.png"
            alt="Overview of PEC Lab research in electrochemistry, photoelectrochemistry, and materials chemistry"
          />
        </div>
      </section>

      <section className="research-detail-section">
        <div className="shell">
          <div className="research-detail-heading">
            <p className="eyebrow">RESEARCH AREAS</p>
            <h2>What we study.</h2>
          </div>

          <div className="research-area-list">
            {areas.map((area) => (
              <article className="research-area" key={area.n}>
                <div className="research-area-number">{area.n}</div>

                <div className="research-area-title">
                  <h2>{area.title}</h2>
                  <p>{area.lead}</p>
                </div>

                <div className="research-area-content">
                  <p>{area.description}</p>

                  <div className="research-topic-list">
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
