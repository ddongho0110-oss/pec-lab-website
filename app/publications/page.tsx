import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationsBrowser from "../../components/PublicationsBrowser";
import { publications } from "../../data/siteData";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <>
    <PageHero kicker="PUBLICATIONS" title="Publications" description="Peer-reviewed work in electrochemistry, photoelectrochemistry, materials chemistry, and related fields." />
    <section className="section shell publication-page">
      <PublicationsBrowser publications={publications} />
    </section>
  </>;
}
