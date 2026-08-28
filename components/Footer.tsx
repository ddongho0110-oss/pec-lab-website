import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className={styles.affiliations}>
        <p className={styles.affiliationLabel}>
          AFFILIATED WITH
        </p>

        <div className={styles.logoGrid}>
          <a
            href="https://www.pusan.ac.kr/kor/intro.do"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoCard}
            aria-label="Pusan National University"
          >
            <img
              src="/images/logos/pnu.png"
              alt="Pusan National University"
              className={styles.pnuLogo}
            />
          </a>

          <a
            href="https://chem.pusan.ac.kr/chem/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoCard}
            aria-label="Department of Chemistry, Pusan National University"
          >
            <img
              src="/images/logos/chemistry.jpg"
              alt="Department of Chemistry, Pusan National University"
              className={styles.chemistryLogo}
            />
          </a>

          <a
            href="https://sites.google.com/pusan.ac.kr/cemc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoCard}
            aria-label="Center for Electrochemical Molecular Conversion"
          >
            <img
              src="/images/logos/cemc.png"
              alt="Center for Electrochemical Molecular Conversion"
              className={styles.cemcLogo}
            />
          </a>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            PEC LAB
          </div>

          <p className="footer-lead">
            Photoelectrochemistry & Electrocatalysis Laboratory
          </p>

          <p>
            Department of Chemistry, Pusan National University
          </p>
        </div>

        <div>
          <h4>Contact</h4>

          <p>
            2, Busandaehak-ro 63beon-gil,
            Geumjeong-gu, Busan 46241,
            Republic of Korea
          </p>

          <p>
            <a href="mailto:kimin.nam@pusan.ac.kr">
              kimin.nam@pusan.ac.kr
            </a>
          </p>

          <p>
            +82-51-510-7416
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <p>
            <Link href="/research">
              Research
            </Link>
          </p>

          <p>
            <Link href="/publications">
              Publications
            </Link>
          </p>

          <p>
            <Link href="/members">
              Members
            </Link>
          </p>

          <p>
            <Link href="/alumni">
              Alumni
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} PEC Lab. All rights reserved.
        </span>

        <span>
          Pusan National University · Busan, Republic of Korea
        </span>
      </div>
    </footer>
  );
}
