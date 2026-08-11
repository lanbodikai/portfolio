interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export default function ExperienceCard({
  company,
  role,
  date,
  location,
  summary,
  highlights,
  tech,
}: ExperienceCardProps) {
  return (
    <article className="group relative flex h-full flex-col border border-[var(--border)] bg-white/72 p-6 shadow-[0_18px_60px_rgba(41,112,232,0.06)] transition-transform duration-300 hover:-translate-y-1 md:p-8">
      <div className="absolute left-0 top-0 h-9 w-1 bg-rogCyan transition-all duration-300 group-hover:h-full" />
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-rogCyan">{role}</p>
          <h3 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">{company}</h3>
        </div>
        <div className="shrink-0 text-left font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-muted-2 sm:text-right">
          <p>{date}</p>
          <p>{location}</p>
        </div>
      </div>

      <p className="mb-4 text-base leading-relaxed text-muted">{summary}</p>
      <ul className="mb-6 space-y-2 text-sm leading-relaxed text-muted md:text-base">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rotate-45 bg-rogCyan" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="border border-[var(--border)] bg-[var(--card-2)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
