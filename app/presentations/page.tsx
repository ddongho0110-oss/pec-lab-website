import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { presentations } from "../../data/presentations";
import styles from "./presentations.module.css";

export const metadata: Metadata = {
  title: "Presentations",
};

export default function PresentationsPage() {
  const years = [...new Set(presentations.map((p) => p.year))].sort(
    (a, b) => b - a
  );

  const latestYear = Math.max(...years);
  const earliestYear = Math.min(...years);

  const awards = presentations.filter(
    (presentation) => presentation.award
  ).length;

  return (
    <>
      <PageHero
        kicker="CONFERENCES"
        title="Presentations"
        description="Oral and poster presentations at national and international scientific conferences."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>PRESENTATIONS</span>
          <strong>{presentations.length}</strong>
          <p>Conference presentations</p>
        </div>

        <div className={styles.summaryItem}>
          <span>AWARDS</span>
          <strong>{awards}</strong>
          <p>Award-winning presentations</p>
        </div>

        <div className={styles.summaryItem}>
          <span>ARCHIVE</span>
          <strong>
            {earliestYear}–{latestYear}
          </strong>
          <p>Conference activity</p>
        </div>
      </section>

      <section className="section shell">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">CONFERENCE ARCHIVE</p>
            <h2>Sharing our research.</h2>
          </div>

          <p>
            Our group presents research at national and international
            conferences across electrochemistry, photoelectrochemistry,
            catalysis, and materials chemistry.
          </p>
        </div>

        <div className={styles.yearList}>
          {years.map((year) => {
            const yearPresentations = presentations.filter(
              (presentation) => presentation.year === year
            );

            return (
              <section className={styles.yearBlock} key={year}>
                <div className={styles.yearHeading}>
                  <h2>{year}</h2>
                  <span>
                    {yearPresentations.length}{" "}
                    {yearPresentations.length === 1
                      ? "presentation"
                      : "presentations"}
                  </span>
                </div>

                <div className={styles.presentationList}>
                  {yearPresentations.map((presentation, index) => (
                    <article
                      className={styles.presentationRow}
                      key={`${year}-${index}`}
                    >
                      <div className={styles.index}>
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className={styles.content}>
                        <div className={styles.meta}>
                          {presentation.date && (
                            <span className={styles.date}>
                              {presentation.date}
                            </span>
                          )}

                          <span>{presentation.event}</span>
                        </div>

                        <h3>{presentation.title}</h3>

                        <p className={styles.authors}>
                          {presentation.authors}
                        </p>

                        {presentation.award && (
                          <div className={styles.award}>
                            <span>AWARD</span>
                            {presentation.award}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
