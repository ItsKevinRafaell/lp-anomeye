type TimelineStep = {
  title: string;
  description: string;
};

type TimelineProps = {
  id: string;
  eyebrow: string;
  headline: string;
  steps: TimelineStep[];
};

export function Timeline({ id, eyebrow, headline, steps }: TimelineProps) {
  return (
    <section
      id={id}
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--brand-primary-strong)]">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
            {headline}
          </h2>
        </div>
        <div className="relative grid gap-10 md:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-8 top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent md:block" />
          {steps.map((step, index) => {
            const cardClass =
              index % 2 === 0
                ? "glass-card glass-variant-d"
                : "surface-card";
            const chipClass =
              index % 2 === 0
                ? "glass-chip glass-variant-b"
                : "surface-chip";
            return (
              <div
                key={step.title}
                className={`${cardClass} group relative flex flex-col gap-4 rounded-3xl p-6 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/45`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`${chipClass} flex h-10 w-10 items-center justify-center rounded-full font-heading text-sm font-semibold text-[var(--brand-primary-strong)] transition duration-200 hover:border-[var(--brand-primary)]/60`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl text-[var(--text-strong)]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
