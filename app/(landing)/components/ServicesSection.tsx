type Service = {
  title: string;
  description: string;
};

type ServicesSectionProps = {
  id: string;
  eyebrow: string;
  headline: string;
  services: Service[];
};

export function ServicesSection({
  id,
  eyebrow,
  headline,
  services,
}: ServicesSectionProps) {
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
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const isGlass = index % 3 === 1;
            const cardClass = isGlass
              ? "glass-card glass-variant-a"
              : "surface-card";
            return (
              <article
                key={service.title}
                className={`${cardClass} rounded-3xl p-8 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/45`}
              >
                <h3 className="font-heading text-xl text-[var(--text-strong)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-[var(--text-muted)]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
