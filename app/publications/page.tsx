import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationsBrowser from "../../components/PublicationsBrowser";
import { publications } from "../../data/publications";
import styles from "./publications.module.css";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  const years = [...new Set(publications.map((pub) => pub.year))];
  const latestYear = Math.max(...years);
  const earliestYear = Math.min(...years);

  return (
    <>
      <PageHero
        kicker="PUBLICATIONS"
        title="Publications"
        description="Peer-reviewed research in electrochemistry, photoelectrochemistry, materials chemistry, and related fields."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>PUBLICATIONS</span>
          <strong>{publications.length}</strong>
          <p>Peer-reviewed articles</p>
        </div>

        <div className={styles.summaryItem}>
          <span>RESEARCH PERIOD</span>
          <strong>
            {earliestYear}–{latestYear}
          </strong>
          <p>Publication archive</p>
        </div>

        <div className={styles.summaryItem}>
          <span>LATEST</span>
          <strong>{latestYear}</strong>
          <p>Most recent publications</p>
        </div>
      </section>

      <section className="section shell publication-page">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">PUBLICATION ARCHIVE</p>
            <h2>Peer-reviewed research.</h2>
          </div>

          <p>
            Search by title, author, or journal, or browse the publication
            archive by year.
          </p>
        </div>

        <PublicationsBrowser publications={publications} />
      </section>
    </>
  );
}
