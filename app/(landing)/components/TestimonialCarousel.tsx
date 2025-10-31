"use client";

import { useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

type TestimonialCarouselProps = {
  id: string;
  eyebrow: string;
  headline: string;
  testimonials: Testimonial[];
};

export function TestimonialCarousel({
  id,
  eyebrow,
  headline,
  testimonials,
}: TestimonialCarouselProps) {
  const items = useMemo(() => testimonials, [testimonials]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) {
    return null;
  }

  const active = items[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section
      id={id}
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl space-y-12 text-center">
        <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--brand-primary-strong)]">
          {eyebrow}
        </span>
        <h2 className="font-heading text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
          {headline}
        </h2>
        <div className="glass-card relative overflow-hidden rounded-3xl p-10">
          <blockquote className="space-y-6">
            <p className="text-xl italic text-[var(--text-strong)]">
              &ldquo;{active.quote}&rdquo;
            </p>
            <footer className="space-y-1 text-sm text-[var(--text-muted)]">
              <div className="font-heading text-base uppercase tracking-[0.3em] text-[var(--text-strong)]">
                {active.name}
              </div>
              <div>
                {active.title} / {active.company}
              </div>
            </footer>
          </blockquote>
          <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            <button
              type="button"
              onClick={handlePrev}
              className="glass-chip rounded-full px-5 py-2 font-heading text-[var(--brand-primary)] transition duration-200 hover:border-[var(--brand-primary-strong)] hover:text-[var(--brand-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              Prev
            </button>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="glass-chip rounded-full px-5 py-2 font-heading text-[var(--brand-primary)] transition duration-200 hover:border-[var(--brand-primary-strong)] hover:text-[var(--brand-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
