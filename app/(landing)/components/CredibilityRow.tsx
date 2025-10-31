type CredibilityRowProps = {
  id: string;
  headline: string;
  items: string[];
};

export function CredibilityRow({ id, headline, items }: CredibilityRowProps) {
  return (
    <section
      id={id}
      className="px-6 py-14 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-sm font-heading text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
          {headline}
        </p>
        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="glass-chip flex h-16 items-center justify-center rounded-2xl px-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
