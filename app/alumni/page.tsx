import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { alumni } from "../../data/alumni";
import styles from "./alumni.module.css";

export const metadata: Metadata = {
  title: "Alumni",
};

export default function AlumniPage() {
  const years = [...new Set(alumni.map((item) => item.year))].sort(
    (a, b) => b - a
  );

  const latestYear = Math.max(...years);
  const earliestYear = Math.min(...years);

  return (
    <>
      <PageHero
        kicker="PEOPLE"
        title="Alumni"
        description="Former PEC Lab members and their academic and professional destinations."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>ALUMNI RECORDS</span>
          <strong>{alumni.length}</strong>
          <p>Former member entries</p>
        </div>

        <div className={styles.summaryItem}>
          <span>ARCHIVE</span>
          <strong>
            {earliestYear}–{latestYear}
          </strong>
          <p>Alumni history</p>
        </div>

        <div className={styles.summaryItem}>
          <span>LATEST</span>
          <strong>{latestYear}</strong>
          <p>Most recent alumni</p>
        </div>
      </section>

      <section className={`section shell ${styles.archive}`}>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">ALUMNI NETWORK</p>
            <h2>Where our members go next.</h2>
          </div>

          <p>
            PEC Lab alumni continue their careers across academia, research
            institutes, government organizations, and industry.
          </p>
        </div>

        <div className={styles.yearList}>
          {years.map((year) => {
            const yearAlumni = alumni.filter(
              (item) => item.year === year
            );

            return (
              <section className={styles.yearBlock} key={year}>
                <div className={styles.yearHeading}>
                  <h2>{year}</h2>
                  <span>
                    {yearAlumni.length}{" "}
                    {yearAlumni.length === 1 ? "record" : "records"}
                  </span>
                </div>

                <div className={styles.list}>
                  {yearAlumni.map((item, index) => (
                    <article
                      className={styles.row}
                      key={`${year}-${item.name}-${index}`}
                    >
                      <div className={styles.identity}>
                        <span>{item.degree}</span>
                        <h3>{item.name}</h3>
                      </div>

                      <div className={styles.period}>
                        <span>Period</span>
                        <p>{item.period || "—"}</p>
                      </div>

                      <div className={styles.destination}>
                        <span>Next Destination</span>
                        <p>{item.next}</p>
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
