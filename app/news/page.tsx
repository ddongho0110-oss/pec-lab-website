import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { news } from "../../data/news";
import styles from "./news.module.css";

export const metadata: Metadata = {
  title: "News & Awards",
};

export default function NewsPage() {
  const years = [
    ...new Set(news.map((item) => Number(item.date.split(".")[0]))),
  ].sort((a, b) => b - a);

  const latestYear = Math.max(...years);
  const earliestYear = Math.min(...years);

  return (
    <>
      <PageHero
        kicker="LAB UPDATE"
        title="News & awards"
        description="Awards, honors, conference achievements, and milestones from PEC Lab."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>HIGHLIGHTS</span>
          <strong>{news.length}</strong>
          <p>Awards & milestones</p>
        </div>

        <div className={styles.summaryItem}>
          <span>ARCHIVE</span>
          <strong>
            {earliestYear}–{latestYear}
          </strong>
          <p>Lab achievement history</p>
        </div>

        <div className={styles.summaryItem}>
          <span>LATEST</span>
          <strong>{latestYear}</strong>
          <p>Most recent highlights</p>
        </div>
      </section>

      <section className="section shell">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">LAB HIGHLIGHTS</p>
            <h2>Celebrating our achievements.</h2>
          </div>

          <p>
            Awards and honors recognizing the research achievements of PEC Lab
            members at conferences, academic events, and university programs.
          </p>
        </div>

        <div className={styles.yearList}>
          {years.map((year) => {
            const items = news.filter(
              (item) => Number(item.date.split(".")[0]) === year
            );

            return (
              <section className={styles.yearBlock} key={year}>
                <div className={styles.yearHeading}>
                  <h2>{year}</h2>
                  <span>
                    {items.length} {items.length === 1 ? "highlight" : "highlights"}
                  </span>
                </div>

                <div className={styles.newsList}>
                  {items.map((item, index) => (
                    <article
                      className={styles.newsRow}
                      key={`${item.date}-${item.person}-${index}`}
                    >
                      <div className={styles.date}>
                        {item.date.slice(5)}
                      </div>

                      <div className={styles.content}>
                        <p className={styles.person}>{item.person}</p>
                        <h3>{item.title}</h3>
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
