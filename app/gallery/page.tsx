import type { Metadata } from "next";
import FallbackImage from "../../components/FallbackImage";
import PageHero from "../../components/PageHero";
import { media } from "../../data/media";
import { gallery } from "../../data/siteData";

export const metadata: Metadata = { title: "Gallery" };

const archive = [
  "260807 유림이 생일", "260623 대게 회식", "260611 대학원 학술상 시상식", "260606 범어사 등산",
  "260529 Open Lab", "2026 춘계 대한화학회 in Jeju", "2026 춘계 한국전기화학회", "260220 졸업 축하"
];

export default function GalleryPage() {
  return <>
    <PageHero kicker="LIFE AT PEC" title="Gallery" description="Conferences, celebrations, lab life, and moments from PEC Lab." />
    <section className="section shell">
      <div className="gallery-section-heading"><p className="eyebrow">RECENT MOMENTS</p><h2>PEC Lab, in and out of the lab.</h2></div>
      <div className="gallery-grid gallery-photo-grid">
        {gallery.map((g, i) => <figure className="gallery-photo-card" key={`${g.title}-${i}`}><FallbackImage primarySrc={media.gallery[i] ?? g.image} fallbackSrc={g.image} alt={g.title} /><figcaption>{g.title}</figcaption></figure>)}
      </div>
      <div className="gallery-section-heading archive-heading"><p className="eyebrow">2026 ARCHIVE</p><h2>Lab activities</h2></div>
      <div className="gallery-grid">
        {archive.map((g, i) => <article className="gallery-placeholder" key={g}><div className="gallery-index">ARCHIVE {String(i + 1).padStart(2, "0")}</div><p>{g}</p></article>)}
      </div>
    </section>
  </>;
}
