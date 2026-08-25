import Link from "next/link";
import FallbackImage from "../components/FallbackImage";
import { media } from "../data/media";
import { news, publications } from "../data/siteData";

export default function Home() {
  return (
    <>
      <section className="hero">
        <FallbackImage className="hero-bg" primarySrc={media.hero.local} fallbackSrc={media.hero.fallback} alt="PEC Lab research visual" />
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <p className="eyebrow light">PHOTOELECTROCHEMISTRY · ELECTROCATALYSIS</p>
          <h1>Designing chemistry<br />for a sustainable future.</h1>
          <p className="hero-lead">We study electrochemical and photoelectrochemical reactions, functional materials, and phase-controlled nanostructures for sustainable energy and molecular conversion.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/research">Explore our research</Link>
            <Link className="button ghost" href="/publications">Latest publications</Link>
          </div>
        </div>
        <div className="hero-index shell">
          <span>CO₂ REDUCTION</span><span>WATER SPLITTING</span><span>PHOTOELECTROCHEMISTRY</span><span>MATERIALS CHEMISTRY</span>
        </div>
      </section>

      <section className="section shell intro-grid">
        <div>
          <p className="eyebrow">WHAT WE DO</p>
          <h2>From atomic-scale materials design to energy conversion.</h2>
        </div>
        <div className="intro-copy">
          <p>Our group develops new chemical strategies for solid-state materials and applies them to challenges at the forefront of materials chemistry and electrochemistry.</p>
          <Link className="text-link" href="/research">Research overview →</Link>
        </div>
      </section>

      <section className="section shell">
        <div className="research-feature">
          <div className="research-image"><FallbackImage primarySrc={media.researchFeature.local} fallbackSrc={media.researchFeature.fallback} alt="PEC Lab research concept" /></div>
          <div className="research-cards">
            <article className="research-card"><span>01</span><h3>Electrochemistry</h3><p>CO₂ reduction, water & seawater splitting, electroanalytical chemistry and selective electrosynthesis.</p></article>
            <article className="research-card"><span>02</span><h3>Photoelectrochemistry</h3><p>Solar-driven water splitting and CO₂ conversion using semiconductor–catalyst interfaces.</p></article>
            <article className="research-card"><span>03</span><h3>Materials Chemistry</h3><p>Non-native crystal structures, phase transitions and mechanistic characterization of nanomaterials.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2>Recent publications</h2></div>
            <Link className="text-link" href="/publications">View all publications →</Link>
          </div>
          <div className="pub-list home-pubs">
            {publications.slice(0, 4).map((pub) => (
              <article className="pub-row" key={pub.no}>
                <div className="pub-no">{String(pub.no).padStart(2, "0")}</div>
                <div>
                  <div className="pub-meta">{pub.year} · {pub.journal}</div>
                  <h3>{pub.doi ? <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">{pub.title}</a> : pub.title}</h3>
                  <p>{pub.authors}</p>
                </div>
                <div className="arrow">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell news-home">
        <div className="section-heading">
          <div><p className="eyebrow">LAB UPDATE</p><h2>News</h2></div>
          <Link className="text-link" href="/news">All news →</Link>
        </div>
        <div className="news-grid">
          {news.slice(0, 4).map((item) => <article className="news-card" key={item.date + item.person}><div className="news-date">{item.date}</div><h3>{item.person}</h3><p>{item.title}</p></article>)}
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-grid">
          <div><p className="eyebrow light">JOIN PEC LAB</p><h2>Interested in electrochemistry and materials?</h2></div>
          <div><p>We welcome motivated students interested in electrochemistry, photoelectrochemistry, and materials chemistry.</p><a className="button light-button" href="mailto:kimin.nam@pusan.ac.kr">Contact the lab</a></div>
        </div>
      </section>
    </>
  );
}
