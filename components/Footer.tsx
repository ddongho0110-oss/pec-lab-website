import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">PEC LAB</div>
          <p>Photoelectrochemistry & Electrocatalysis Laboratory</p>
          <p>Department of Chemistry, Pusan National University</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>2, Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan 46241, Republic of Korea</p>
          <p><a href="mailto:kimin.nam@pusan.ac.kr">kimin.nam@pusan.ac.kr</a></p>
          <p>+82-51-510-7416</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><Link href="/publications">Publications</Link></p>
          <p><Link href="/presentations">Presentations</Link></p>
          <p><Link href="/members">Members</Link></p>
          <p><Link href="/alumni">Alumni</Link></p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} PEC Lab. All rights reserved.</div>
    </footer>
  );
}
