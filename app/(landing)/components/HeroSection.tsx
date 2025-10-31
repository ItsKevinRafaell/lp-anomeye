import Link from "next/link";

type CTA = {
  href: string;
  label: string;
};

type HeroSectionProps = {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  bullets: string[];
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export function HeroSection({
  id,
  eyebrow,
  headline,
  subheadline,
  bullets,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden px-6 pb-20 pt-28 text-[var(--text-primary)] sm:px-10 lg:px-16 lg:pb-28 lg:pt-36"
    >
      <span className="pointer-events-none absolute -left-24 top-16 hidden h-96 w-96 rounded-full bg-[var(--brand-highlight)]/25 blur-3xl lg:block" />
      <span className="pointer-events-none absolute right-[-18rem] top-1/3 h-80 w-80 rounded-full bg-[var(--brand-primary)]/15 blur-3xl sm:right-[-12rem]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center rounded-full border border-[var(--glass-border-subtle)] bg-[var(--surface-chip)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] backdrop-blur-lg">
            {eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl lg:text-[3.5rem]">
            {headline}
          </h1>
          <p className="max-w-2xl text-lg text-[var(--text-muted)] lg:text-xl">
            {subheadline}
          </p>
          <ul className="grid gap-3 text-base text-[var(--text-primary)] sm:grid-cols-2 sm:gap-4">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="glass-chip flex items-start gap-3 rounded-2xl px-4 py-3 text-sm"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
                <span className="font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-200 hover:bg-[var(--brand-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-primary)] px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-primary)] transition duration-200 hover:border-[var(--brand-primary-strong)] hover:text-[var(--brand-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="glass-card relative overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-x-8 inset-y-10 rounded-3xl border border-[var(--glass-border-subtle)]" />
            <div className="relative space-y-4 text-sm text-[var(--text-muted)]">
              <div className="flex items-center justify-between">
                <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--brand-primary-strong)]">
                  Operational View
                </span>
                <span className="rounded-full bg-[var(--brand-primary)]/15 px-3 py-1 font-medium text-[var(--brand-primary-strong)]">
                  Live
                </span>
              </div>
              <div className="glass-chip grid gap-3 rounded-2xl p-4 shadow-none">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm text-[var(--text-primary)]">
                    AI Threat Detection
                  </span>
                  <span className="rounded-full bg-[var(--brand-primary)]/15 px-3 py-1 text-xs font-semibold text-[var(--brand-primary)]">
                    99.3% Accuracy
                  </span>
                </div>
                <p>
                  Elevated anomaly identified in Tower West. Autonomous incident
                  response triggered and routed to executive dashboard.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Sites Protected",
                    value: "184",
                  },
                  {
                    label: "Signals Correlated Daily",
                    value: "2.8M",
                  },
                  {
                    label: "Average Response",
                    value: "37s",
                  },
                  {
                    label: "Downtime Prevented",
                    value: "12h",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-chip rounded-2xl p-4 text-center"
                  >
                    <div className="font-heading text-2xl font-semibold text-[var(--text-strong)]">
                      {item.value}
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* TODO: Replace with rendered platform visualization once available */}
          </div>
        </div>
      </div>
    </section>
  );
}
