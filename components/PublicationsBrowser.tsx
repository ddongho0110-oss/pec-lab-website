"use client";

import { useMemo, useState } from "react";
import type { Publication } from "../data/publications";

export default function PublicationsBrowser({ publications }: { publications: Publication[] }) {
  const years = useMemo(() => [...new Set(publications.map((p) => p.year))], [publications]);
  const [year, setYear] = useState<number | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = publications.filter((pub) => {
    const matchesYear = year === "all" || pub.year === year;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || `${pub.title} ${pub.authors} ${pub.journal}`.toLowerCase().includes(q);
    return matchesYear && matchesQuery;
  });

  const visibleYears = [...new Set(filtered.map((p) => p.year))];

  return (
    <>
      <div className="pub-tools">
        <label className="pub-search"><span>Search</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title, author, journal…" /></label>
        <div className="year-filters" aria-label="Publication year filter">
          <button className={year === "all" ? "active" : ""} onClick={() => setYear("all")}>All</button>
          {years.map((y) => <button key={y} className={year === y ? "active" : ""} onClick={() => setYear(y)}>{y}</button>)}
        </div>
      </div>

      {visibleYears.length === 0 && <div className="empty-state">No publications match your search.</div>}
      {visibleYears.map((y) => (
        <div className="year-block" key={y}>
          <div className="year-label">{y}</div>
          <div className="pub-list">
            {filtered.filter((p) => p.year === y).map((pub) => {
              const scholar = `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`;
              return <article className="pub-row" key={pub.no}>
                <div className="pub-no">{pub.no}</div>
                <div>
                  <div className="pub-meta">{pub.journal}{pub.details ? ` · ${pub.details}` : ""}</div>
                  <h3>{pub.title}</h3>
                  <p>{pub.authors}</p>
                  <div className="pub-actions">
                    {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">DOI ↗</a>}
                    {pub.url && <a href={pub.url} target="_blank" rel="noreferrer">Publisher ↗</a>}
                    <a href={scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a>
                  </div>
                  {pub.badge && <span className="badge">{pub.badge}</span>}
                </div>
              </article>;
            })}
          </div>
        </div>
      ))}
    </>
  );
}
