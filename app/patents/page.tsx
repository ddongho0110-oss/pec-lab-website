import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { patents } from "../../data/patents";

export const metadata: Metadata = { title: "Patents" };
export default function PatentsPage() {
  return <><PageHero kicker="INTELLECTUAL PROPERTY" title="Patents" description="Registered and filed inventions from the PEC Lab." />
  <section className="section shell"><div className="patent-list">{patents.map(p => <article className="patent-row" key={p.no}><div className="patent-no">{String(p.no).padStart(2,"0")}</div><div><div className="patent-meta"><span className={p.status === "등록" ? "status registered" : "status"}>{p.status}</span>{p.number}</div><h3>{p.title}</h3><p>{p.inventors}</p></div></article>)}</div></section></>;
}
