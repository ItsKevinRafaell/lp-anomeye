import Link from "next/link";

type CTASectionProps = {
  id: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
};

export function CTASection({
  id,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="glass-panel glass-variant-b mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--glass-border)] px-10 py-16 text-left text-[var(--text-strong)] transition duration-200 sm:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold sm:text-[2.75rem]">
              {headline}
            </h2>
            <p className="max-w-2xl text-lg text-[var(--text-muted)]">
              {subheadline}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="glass-chip glass-variant-c inline-flex items-center justify-center rounded-full border border-[var(--brand-primary)]/60 bg-[var(--brand-primary)]/18 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-primary-strong)] transition duration-200 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/26 hover:text-[var(--text-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="surface-chip inline-flex items-center justify-center rounded-full px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] transition duration-200 hover:border-[var(--brand-primary)]/50 hover:text-[var(--brand-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
