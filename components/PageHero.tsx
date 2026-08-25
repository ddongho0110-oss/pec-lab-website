export default function PageHero({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
