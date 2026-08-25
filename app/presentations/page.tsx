import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { presentations } from "../../data/siteData";

export const metadata: Metadata = { title: "Presentations" };

export default function PresentationsPage() {
  const years = [...new Set(presentations.map((p) => p.year))];
  return <>
    <PageHero kicker="CONFERENCES" title="Presentations" description="Selected oral and poster presentations at national and international conferences." />
    <section className="section shell">
      <div className="data-note">Conference records currently listed on the Wix site from 2019–2026 have been migrated into structured data. New presentations can be added in data/siteData.ts.</div>
      {years.map((year) => <div className="year-block presentation-year" key={year}>
        <div className="year-label">{year}</div>
        <div className="presentation-list">
          {presentations.filter((p) => p.year === year).map((p, i) => <article className="presentation-row" key={`${year}-${i}`}>
            <div className="presentation-meta">{p.date} · {p.event}</div>
            <h3>{p.title}</h3>
            <p>{p.authors}</p>
            {p.award && <span className="badge">{p.award}</span>}
          </article>)}
        </div>
      </div>)}
    </section>
  </>;
}
