type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  id: string;
  company: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  quickLinks: FooterLink[];
  legalLinks: FooterLink[];
};

export function Footer({
  id,
  company,
  description,
  contactEmail,
  contactPhone,
  address,
  quickLinks,
  legalLinks,
}: FooterProps) {
  return (
    <footer
      id={id}
      className="px-6 py-16 text-[var(--footer-text)] sm:px-10 lg:px-16"
      style={{ background: "var(--surface-footer)" }}
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-semibold uppercase tracking-[0.4em] text-[var(--footer-heading)]">
              {company}
            </h3>
            <p className="mt-6 max-w-md text-sm opacity-80">{description}</p>
          </div>
          <div className="space-y-4 text-sm">
            <h4 className="font-heading text-xs uppercase tracking-[0.35em] text-[var(--footer-subtle)]">
              Contact
            </h4>
            <p>{contactEmail}</p>
            <p>{contactPhone}</p>
            <p className="text-[var(--footer-subtle)]">{address}</p>
          </div>
          <div className="space-y-8 text-sm">
            <div>
              <h4 className="font-heading text-xs uppercase tracking-[0.35em] text-[var(--footer-subtle)]">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition duration-200 hover:text-[var(--footer-heading)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xs uppercase tracking-[0.35em] text-[var(--footer-subtle)]">
                Legal
              </h4>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition duration-200 hover:text-[var(--footer-heading)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--footer-subtle)]/40 pt-8 text-xs uppercase tracking-[0.3em] text-[var(--footer-subtle)]">
          &copy; {new Date().getFullYear()} {company}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
