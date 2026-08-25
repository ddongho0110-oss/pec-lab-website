import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { news } from "../../data/news";
export const metadata: Metadata = { title: "News" };
export default function NewsPage(){return <><PageHero kicker="LAB UPDATE" title="News & awards" description="Recent awards, conference highlights, and laboratory milestones."/><section className="section shell"><div className="news-list">{news.map((n,i)=><article className="news-row" key={i}><div className="news-date-large">{n.date}</div><div><h3>{n.person}</h3><p>{n.title}</p></div></article>)}</div></section></>}
