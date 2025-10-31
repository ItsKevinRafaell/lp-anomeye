type Stat = {
  label: string;
  value: string;
  descriptor: string;
};

type ImpactSectionProps = {
  id: string;
  eyebrow: string;
  headline: string;
  narrative: string;
  stats: Stat[];
};

export function ImpactSection({
  id,
  eyebrow,
  headline,
  narrative,
  stats,
}: ImpactSectionProps) {
  return (
    <section
      id={id}
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
        <div className="flex-1 space-y-6">
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--brand-primary-strong)]">
            {eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
            {headline}
          </h2>
          <p className="text-lg text-[var(--text-muted)]">{narrative}</p>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {stats.map((stat, index) => {
            const cardStyles =
              index % 2 === 0
                ? "glass-card glass-variant-a rounded-3xl p-8"
                : "surface-card rounded-3xl p-8";
            return (
              <div
                key={stat.label}
                className={`${cardStyles} transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/45`}
              >
                <div className="font-heading text-4xl font-semibold text-[var(--brand-primary-strong)]">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
                  {stat.label}
                </div>
                <p className="mt-4 text-base text-[var(--text-muted)]">
                  {stat.descriptor}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
