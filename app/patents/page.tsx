import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { patents } from "../../data/patents";
import styles from "./patents.module.css";

export const metadata: Metadata = {
  title: "Patents",
};

export default function PatentsPage() {
  const registered = patents.filter(
    (patent) => patent.status === "등록"
  ).length;

  const filed = patents.filter(
    (patent) => patent.status === "출원"
  ).length;

  return (
    <>
      <PageHero
        kicker="INTELLECTUAL PROPERTY"
        title="Patents"
        description="Patented technologies and filed inventions developed through research at PEC Lab."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>TOTAL PATENTS</span>
          <strong>{patents.length}</strong>
          <p>Intellectual property portfolio</p>
        </div>

        <div className={styles.summaryItem}>
          <span>REGISTERED</span>
          <strong>{registered}</strong>
          <p>Granted patents</p>
        </div>

        <div className={styles.summaryItem}>
          <span>FILED</span>
          <strong>{filed}</strong>
          <p>Patent applications</p>
        </div>
      </section>

      <section className={`section shell>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">PATENT PORTFOLIO</p>
            <h2>Research translated into technology.</h2>
          </div>

          <p>
            Our intellectual property portfolio spans electrochemistry,
            materials synthesis, energy conversion, catalysis, and sensing
            technologies.
          </p>
        </div>

        <div className={styles.list}>
          {patents.map((patent) => {
            const isRegistered = patent.status === "등록";

            return (
              <article
                className={styles.row}
                key={patent.no}
              >
                <div className={styles.index}>
                  {String(patent.no).padStart(2, "0")}
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span
                      className={
                        isRegistered
                          ? styles.registered
                          : styles.filed
                      }
                    >
                      {isRegistered ? "REGISTERED" : "FILED"}
                    </span>

                    <span className={styles.patentNumber}>
                      {patent.number}
                    </span>
                  </div>

                  <h3>{patent.title}</h3>

                  <div className={styles.inventors}>
                    <span>Inventors</span>
                    <p>{patent.inventors}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
