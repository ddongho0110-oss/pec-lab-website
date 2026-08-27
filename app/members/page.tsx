import type { Metadata } from "next";
import Link from "next/link";
import FallbackImage from "../../components/FallbackImage";
import PageHero from "../../components/PageHero";
import { media } from "../../data/media";
import { members } from "../../data/members";
import styles from "./members.module.css";

export const metadata: Metadata = {
  title: "Members",
};

const roleOrder = [
  "Postdoctoral Fellow",
  "Ph.D. Candidate",
  "M.S. Candidate",
  "Undergraduate Student",
];

export default function MembersPage() {
  const researchers = members.filter(
    (member) => member.role !== "Undergraduate Student"
  ).length;

  const undergraduates = members.filter(
    (member) => member.role === "Undergraduate Student"
  ).length;

  return (
    <>
      <PageHero
        kicker="PEOPLE"
        title="Members"
        description="Researchers and students working together across electrochemistry, photoelectrochemistry, and materials chemistry."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>TEAM MEMBERS</span>
          <strong>{members.length}</strong>
          <p>Current members</p>
        </div>

        <div className={styles.summaryItem}>
          <span>RESEARCHERS</span>
          <strong>{researchers}</strong>
          <p>Postdoctoral & graduate researchers</p>
        </div>

        <div className={styles.summaryItem}>
          <span>UNDERGRADUATES</span>
          <strong>{undergraduates}</strong>
          <p>Undergraduate researchers</p>
        </div>
      </section>

      <section className={`section shell ${styles.team}`}>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">OUR TEAM</p>
            <h2>People behind the research.</h2>
          </div>

          <p>
            PEC Lab brings together researchers at different stages of their
            academic careers to investigate electrochemical and
            photoelectrochemical systems.
          </p>
        </div>

        <div className={styles.roleList}>
          {roleOrder.map((role) => {
            const roleMembers = members.filter(
              (member) => member.role === role
            );

            return (
              <section className={styles.roleSection} key={role}>
                <div className={styles.roleHeading}>
                  <h2>{role}</h2>
                  <span>{roleMembers.length}</span>
                </div>

                <div className={styles.grid}>
                  {roleMembers.map((member) => {
                    const local = media.members[member.name];

                    return (
                      <article
                        className={styles.card}
                        key={member.name}
                      >
                        <div className={styles.photo}>
                          {member.image && local ? (
                            <FallbackImage
                              primarySrc={local}
                              fallbackSrc={member.image}
                              alt={member.name}
                            />
                          ) : member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                            />
                          ) : (
                            <div className={styles.avatar}>
                              {member.name
                                .split(" ")
                                .map((name) => name[0])
                                .slice(0, 2)
                                .join("")}
                            </div>
                          )}
                        </div>

                        <div className={styles.cardCopy}>
                          <p className={styles.role}>{member.role}</p>

                          <h3>{member.name}</h3>

                          {member.email && (
                            <a href={`mailto:${member.email}`}>
                              {member.email}
                            </a>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className={styles.alumniLink}>
          <Link href="/alumni">
            View alumni
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
