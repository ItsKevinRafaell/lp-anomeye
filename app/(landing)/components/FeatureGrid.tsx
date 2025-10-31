type Feature = {
  title: string;
  description: string;
  pill: string;
};

type FeatureGridProps = {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  features: Feature[];
};

export function FeatureGrid({
  id,
  eyebrow,
  headline,
  description,
  features,
}: FeatureGridProps) {
  return (
    <section
      id={id}
      className="px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-6 text-center">
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--brand-primary-strong)]">
            {eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl lg:text-[2.875rem]">
            {headline}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            {description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card group flex flex-col gap-5 rounded-3xl p-8 transition duration-200 hover:-translate-y-1 hover:border-[var(--brand-primary)] hover:shadow-[var(--shadow-glass)]"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-[var(--brand-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary-strong)]">
                {feature.pill}
              </span>
              <h3 className="font-heading text-2xl text-[var(--text-strong)]">
                {feature.title}
              </h3>
              <p className="text-base text-[var(--text-muted)]">
                {feature.description}
              </p>
              <div className="mt-auto h-0.5 w-12 bg-[var(--brand-primary)] transition group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
