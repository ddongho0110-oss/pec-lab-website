import type { Metadata } from "next";
import FallbackImage from "../../components/FallbackImage";
import PageHero from "../../components/PageHero";
import { media } from "../../data/media";
import { professor } from "../../data/professor";

export const metadata: Metadata = { title: "Professor" };

export default function ProfessorPage() {
  return <>
    <PageHero kicker="PRINCIPAL INVESTIGATOR" title={professor.name} description={`${professor.role}, ${professor.department}, ${professor.institution}`} />
    <section className="section shell professor-grid">
      <div className="portrait-card"><FallbackImage primarySrc={media.professor.local} fallbackSrc={media.professor.fallback} alt={`Professor ${professor.name}`} /></div>
      <div className="profile-copy">
        <p className="profile-name-ko">{professor.nameKo}</p>
        <h2>{professor.name}, {professor.degree}</h2>
        <p className="profile-role">{professor.role} · {professor.department} · {professor.institution}</p>
        <div className="contact-strip"><a href={`mailto:${professor.email}`}>{professor.email}</a><span>{professor.phone}</span></div>
        <div className="profile-section"><h3>Research Experience</h3><ul>
          {professor.researchExperience.map((item) => <li key={item.period + item.description}><strong>{item.period}</strong> {item.description}</li>)}
        </ul></div>
        <div className="profile-section"><h3>Education</h3><ul>
          {professor.education.map((item) => <li key={item.period + item.description}><strong>{item.period}</strong> {item.description}</li>)}
        </ul></div>
        <div className="profile-section"><h3>Awards</h3><ul>
          {professor.awards.map((item) => <li key={item.year + item.description}><strong>{item.year}</strong> {item.description}</li>)}
        </ul></div>
      </div>
    </section>
  </>;
}
