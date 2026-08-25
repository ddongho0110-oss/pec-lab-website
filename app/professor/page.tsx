import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = { title: "Professor" };
const portrait = "https://static.wixstatic.com/media/af2495_ec71bafae647489f8f4b66aa3bbb0dd6~mv2.jpg/v1/fill/w_297%2Ch_396%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/af2495_ec71bafae647489f8f4b66aa3bbb0dd6~mv2.jpg";

export default function ProfessorPage() {
  return <>
    <PageHero kicker="PRINCIPAL INVESTIGATOR" title="Ki Min Nam" description="Professor, Department of Chemistry, Pusan National University" />
    <section className="section shell professor-grid">
      <div className="portrait-card"><img src={portrait} alt="Professor Ki Min Nam" /></div>
      <div className="profile-copy">
        <p className="profile-name-ko">남 기 민</p>
        <h2>Ki Min Nam, Ph.D.</h2>
        <p className="profile-role">Professor · Department of Chemistry · Pusan National University</p>
        <div className="contact-strip"><a href="mailto:kimin.nam@pusan.ac.kr">kimin.nam@pusan.ac.kr</a><span>+82-51-510-7416</span></div>
        <div className="profile-section"><h3>Research Experience</h3><ul>
          <li><strong>2024–Present</strong> Full Professor, Department of Chemistry, Pusan National University</li>
          <li><strong>2014–2019</strong> Assistant / Associate Professor, Department of Chemistry, Mokpo National University</li>
          <li><strong>Postdoctoral Research Fellow</strong> The University of Texas at Austin · Advisor: Prof. Allen J. Bard</li>
        </ul></div>
        <div className="profile-section"><h3>Education</h3><ul>
          <li><strong>2006–2011</strong> M.S. & Ph.D., KAIST · Advisor: Prof. Joon Taik Park</li>
          <li><strong>1999–2006</strong> B.S., Kyungpook National University</li>
        </ul></div>
        <div className="profile-section"><h3>Selected Awards</h3><ul>
          <li><strong>2025</strong> Outstanding Research Award, PNU Best Biz Partners Ceremony</li>
          <li><strong>2022</strong> i-SENS Young Electrochemical Scientist Award, Korean Chemical Society</li>
          <li><strong>2019</strong> Outstanding Research Award, MNU</li>
        </ul></div>
      </div>
    </section>
  </>;
}
