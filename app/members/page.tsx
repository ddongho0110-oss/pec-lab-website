import type { Metadata } from "next";
import Link from "next/link";
import FallbackImage from "../../components/FallbackImage";
import PageHero from "../../components/PageHero";
import { media } from "../../data/media";
import { members } from "../../data/siteData";

export const metadata: Metadata = { title: "Members" };
const roleOrder = ["Postdoctoral Fellow", "Ph.D. Candidate", "M.S. Candidate", "Undergraduate Student"];

export default function MembersPage() {
  return <>
    <PageHero kicker="PEOPLE" title="Members" description="Researchers and students working together across electrochemistry, photoelectrochemistry, and materials chemistry." />
    <section className="section shell">
      {roleOrder.map((role) => (
        <div className="member-section" key={role}>
          <div className="member-role"><h2>{role}</h2></div>
          <div className="member-grid">
            {members.filter((m) => m.role === role).map((m) => {
              const local = media.members[m.name];
              return <article className="member-card" key={m.name}>
                {m.image && local ? <FallbackImage className="member-photo" primarySrc={local} fallbackSrc={m.image} alt={m.name} /> : m.image ? <img className="member-photo" src={m.image} alt={m.name} /> : <div className="avatar">{m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}</div>}
                <div className="member-card-copy"><h3>{m.name}</h3><p>{m.role}</p>{m.email && <a href={`mailto:${m.email}`}>{m.email}</a>}</div>
              </article>;
            })}
          </div>
        </div>
      ))}
      <div className="alumni-link"><Link className="button outline" href="/alumni">View alumni</Link></div>
    </section>
  </>;
}
