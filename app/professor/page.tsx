import type { Metadata } from "next";
import { professor } from "../../data/professor";
import styles from "./professor.module.css";

export const metadata: Metadata = {
  title: "Professor",
};

const researchFocus = [
  "Electrochemistry",
  "Photoelectrochemistry",
  "Electrocatalysis",
  "Materials Chemistry",
];

export default function ProfessorPage() {
  return (
    <>
      <section className={`section shell ${styles.profile}`}>
        <div className={styles.heading}>
          <p className="eyebrow">PRINCIPAL INVESTIGATOR</p>

          <h1>
            <span>{professor.name}</span>
            <small>{professor.degree}</small>
          </h1>

          <p className={styles.nameKo}>
            {professor.nameKo}
          </p>
        </div>

        <div className={styles.portrait}>
          <img
            src="/images/people/ki-min-nam.jpg"
            alt={`Professor ${professor.name}`}
          />
        </div>

        <div className={styles.details}>
          <p className={styles.role}>
            {professor.role}
            <br />
            {professor.department}
            <br />
            {professor.institution}
          </p>

          <div className={styles.contact}>
            <div>
              <span>Email</span>

              <a href={`mailto:${professor.email}`}>
                {professor.email}
              </a>
            </div>

            <div>
              <span>Phone</span>

              <p>{professor.phone}</p>
            </div>
          </div>

          <div className={styles.focus}>
            <p className={styles.focusLabel}>
              Research Focus
            </p>

            <div className={styles.focusTags}>
              {researchFocus.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cvSection}>
        <div className="shell">
          <div className={styles.cvBlock}>
            <div className={styles.cvHeading}>
              <p className="eyebrow">01</p>
              <h2>Research Experience</h2>
            </div>

            <div className={styles.timeline}>
              {professor.researchExperience.map((item) => (
                <div
                  className={styles.timelineRow}
                  key={item.period + item.description}
                >
                  <span>{item.period}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cvBlock}>
            <div className={styles.cvHeading}>
              <p className="eyebrow">02</p>
              <h2>Education</h2>
            </div>

            <div className={styles.timeline}>
              {professor.education.map((item) => (
                <div
                  className={styles.timelineRow}
                  key={item.period + item.description}
                >
                  <span>{item.period}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cvBlock}>
            <div className={styles.cvHeading}>
              <p className="eyebrow">03</p>
              <h2>Awards & Honors</h2>
            </div>

            <div className={styles.timeline}>
              {professor.awards.map((item) => (
                <div
                  className={styles.timelineRow}
                  key={item.year + item.description}
                >
                  <span>{item.year}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
