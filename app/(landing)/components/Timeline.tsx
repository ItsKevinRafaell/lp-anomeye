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
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass-card group relative flex flex-col gap-4 rounded-3xl p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-[var(--brand-primary)] hover:shadow-[var(--shadow-glass)]"
            >
              <div className="flex items-center gap-3">
                <span className="glass-chip flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-primary)]/30 bg-transparent font-heading text-sm font-semibold text-[var(--brand-primary-strong)] shadow-none">
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
          ))}
        </div>
      </div>
    </section>
  );
}
