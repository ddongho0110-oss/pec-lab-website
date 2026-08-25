import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = { title: "Research" };

const areas = [
  {
    n: "01", title: "Electrochemistry", lead: "Controlling interfacial reactions for selective and sustainable chemical conversion.",
    items: ["CO₂ Reduction Reaction", "Water & Seawater Splitting", "Electroanalytical Chemistry", "Selective Electrosynthesis"]
  },
  {
    n: "02", title: "Photoelectrochemistry", lead: "Integrating semiconductor light absorbers and electrocatalysts for solar-driven reactions.",
    items: ["Photoelectrochemical Water Splitting", "Photoelectrochemical CO₂ Reduction", "Si Photoelectrodes", "Catalyst–Semiconductor Interfaces"]
  },
  {
    n: "03", title: "Materials Chemistry", lead: "Designing metastable structures and tracking how materials evolve under reaction conditions.",
    items: ["Non-native Crystal Structures", "Metal Oxide / Hydroxide Phase Transitions", "Nanomaterial Synthesis", "Structural & Mechanistic Characterization"]
  }
];

export default function ResearchPage() {
  return <>
    <PageHero kicker="RESEARCH" title="Chemistry at interfaces." description="We combine synthesis, electrochemistry, photoelectrochemistry, and materials characterization to understand and control energy-relevant reactions." />
    <section className="section shell research-page-grid">
      {areas.map((a) => <article key={a.n} className="research-page-card">
        <div className="research-number">{a.n}</div><h2>{a.title}</h2><p>{a.lead}</p>
        <ul>{a.items.map((x) => <li key={x}>{x}</li>)}</ul>
      </article>)}
    </section>
  </>;
}
