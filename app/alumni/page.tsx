import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { alumni } from "../../data/siteData";
export const metadata: Metadata = { title: "Alumni" };
export default function AlumniPage(){const years=[...new Set(alumni.map(a=>a.year))];return <><PageHero kicker="PEOPLE" title="Alumni" description="Former PEC Lab members and their next destinations."/><section className="section shell alumni-page">{years.map(year=><div className="alumni-year" key={year}><h2>{year}</h2><div>{alumni.filter(a=>a.year===year).map((a,i)=><article className="alumni-row" key={i}><div><span>{a.degree}</span><h3>{a.name}</h3></div><p>{a.period}</p><p>{a.next}</p></article>)}</div></div>)}</section></>}
