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
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--surface-contrast)] px-10 py-16 text-left text-[var(--text-on-contrast)] shadow-[var(--shadow-soft)] transition duration-200 sm:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold sm:text-[2.75rem]">
              {headline}
            </h2>
            <p className="max-w-2xl text-lg opacity-80">{subheadline}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-200 hover:bg-[var(--brand-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-[var(--text-on-contrast)] px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-on-contrast)] transition duration-200 hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
