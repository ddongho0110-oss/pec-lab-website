import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationsBrowser from "../../components/PublicationsBrowser";
import { publications } from "../../data/siteData";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <>
    <PageHero kicker="PUBLICATIONS" title="Publications" description="Peer-reviewed work in electrochemistry, photoelectrochemistry, materials chemistry, and related fields." />
    <section className="section shell publication-page">
      <div className="data-note">All numbered publications currently listed on the Wix site (No. 1–94, 2008–2026) have been migrated into structured data. New papers can be added by editing one array in data/siteData.ts.</div>
      <PublicationsBrowser publications={publications} />
    </section>
  </>;
}
