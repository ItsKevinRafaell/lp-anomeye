'use client';

import Link from "next/link";
import { CTASection } from "./components/CTASection";
import { CredibilityRow } from "./components/CredibilityRow";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { ImpactSection } from "./components/ImpactSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ThemeToggle } from "./components/ThemeToggle";
import { Timeline } from "./components/Timeline";

const navLinks = [
  { label: "Why Anomeye", href: "#why-integrated" },
  { label: "ROI", href: "#roi-impact" },
  { label: "Lifecycle", href: "#solution-walkthrough" },
  { label: "Services", href: "#exclusive-services" },
  { label: "Testimonials", href: "#testimonials" },
];

const heroBullets = [
  "Federated AI covering global CCTV fleets in a single command surface",
  "Secure integrations with VMS, access control, and SOC workflows",
  "Executive-grade insights and compliance-ready reporting",
  "SLA-backed response orchestration with dedicated advisors",
];

const featureCards = [
  {
    pill: "Real-time Analytics",
    title: "Predict every threat before it reaches the perimeter.",
    description:
      "Streaming neural vision models correlate motion, behavior, and environmental telemetry to surface only actionable incidents at scale.",
  },
  {
    pill: "Centralized Monitoring",
    title: "Unify every site in one elite operations center.",
    description:
      "Command control workflows harmonize CCTV, access events, and incident tickets with auditable playbooks tailored to your governance requirements.",
  },
  {
    pill: "Automated Response",
    title: "Orchestrate containment with total confidence.",
    description:
      "Adaptive automation dispatches guards, locks doors, and briefs leadership while preserving full chain-of-custody documentation.",
  },
];

const impactStats = [
  {
    value: "42%",
    label: "Faster Resolution",
    descriptor:
      "Average reduction in incident dwell time across multi-site deployments within twelve weeks.",
  },
  {
    value: "73%",
    label: "Alert Reduction",
    descriptor:
      "Noise filtered from legacy camera feeds through AI-driven prioritization and correlation.",
  },
  {
    value: "$4.8M",
    label: "Losses Avoided",
    descriptor:
      "Documented prevention of theft, disruption, and compliance penalties over twelve months.",
  },
  {
    value: "99.3%",
    label: "Detection Confidence",
    descriptor:
      "Validated accuracy across diverse camera models with continuous model retraining.",
  },
];

const timelineSteps = [
  {
    title: "Assess",
    description:
      "Joint discovery with CISOs and security architects to map current infrastructure, risk posture, and executive reporting expectations.",
  },
  {
    title: "Deploy",
    description:
      "Rapid activation of secure connectors, sensor ingestion pipelines, and AI analytics tuned to your controls and escalation paths.",
  },
  {
    title: "Monitor",
    description:
      "Always-on oversight from our dedicated command team, reinforced by tailored dashboards and automated policy enforcement.",
  },
  {
    title: "Optimize",
    description:
      "Quarterly program reviews with your advisors to fine-tune models, expand coverage, and continuously elevate risk mitigation maturity.",
  },
];

const exclusiveServices = [
  {
    title: "Tailored Enterprise Onboarding",
    description:
      "A white-glove launch sequence that inventories every asset, aligns with your SOC procedures, and orchestrates executive-ready communications.",
  },
  {
    title: "Dedicated Security Advisors",
    description:
      "Named experts who understand your environment, attend strategy reviews, and act as an extension of your leadership team.",
  },
  {
    title: "SLA-Backed Reliability",
    description:
      "24/7 coverage backed by contractual uptime commitments, proactive health checks, and automated failover across global regions.",
  },
];

const testimonials = [
  {
    quote:
      "Anomeye fused our legacy CCTV footprint into a single, intelligent perimeter. Our SOC now anticipates incidents and briefs the board with defensible insights.",
    name: "Charlotte Hayes",
    title: "Chief Security Officer",
    company: "Helios Aeronautics",
  },
  {
    quote:
      "We gained precise, AI-driven visibility without disrupting existing access control tooling. The concierge-level advisory support is unmatched in the market.",
    name: "Raj Patel",
    title: "VP, Corporate Protection",
    company: "NordicTrust Financial",
  },
  {
    quote:
      "From assessment to optimization, Anomeye delivered a governed rollout that satisfied regulators and empowered our operators within weeks.",
    name: "Elena Morozov",
    title: "Director, Global Resilience",
    company: "Vectis Logistics",
  },
];

const quickLinks = [
  { label: "Platform Overview", href: "#hero" },
  { label: "Why Integrated AI", href: "#why-integrated" },
  { label: "ROI Impact", href: "#roi-impact" },
  { label: "Lifecycle", href: "#solution-walkthrough" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Security & Trust", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen text-[var(--text-primary)]">
      <header className="sticky top-0 z-50 px-6 pt-8 sm:px-10 lg:px-16">
        <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-6 py-4">
          <Link
            href="#hero"
            className="font-heading text-sm font-semibold uppercase tracking-[0.4em] text-[var(--text-strong)]"
          >
            Anomeye
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition duration-200 hover:text-[var(--text-strong)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#enterprise-cta"
              className="hidden rounded-full bg-[var(--brand-primary)] px-6 py-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-white transition duration-200 hover:bg-[var(--brand-primary-strong)] md:inline-flex"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>
      </header>

      <main className="font-body">
        <HeroSection
          id="hero"
          eyebrow="Integrated AI CCTV Security"
          headline="Executive-grade security, orchestrated by intelligent vision."
          subheadline="Anomeye unifies every camera, sensor, and security workflow into a single, AI-driven platform built for enterprise decision makers who refuse compromise."
          bullets={heroBullets}
          primaryCta={{
            href: "#enterprise-cta",
            label: "Request Enterprise Demo",
          }}
          secondaryCta={{
            href: "#contact-sales",
            label: "Schedule Security Consultation",
          }}
        />
        <CredibilityRow
          id="credibility"
          headline="Trusted by global leaders in aviation, finance, logistics, and critical infrastructure."
          items={["Fortress", "Polaris", "Northwind", "Aperture"]}
        />
        <FeatureGrid
          id="why-integrated"
          eyebrow="Why Integrated AI Security"
          headline="Eliminate blind spots with a single source of truth."
          description="Bring CCTV, access control, IoT telemetry, and SOC operations into one intelligent fabric. Anomeye empowers CISOs to act decisively while proving governance to the board."
          features={featureCards}
        />
        <ImpactSection
          id="roi-impact"
          eyebrow="ROI & Impact"
          headline="Security that pays for itself in months, not years."
          narrative="Our enterprise deployments deliver measurable risk reduction and operational efficiency. We help teams shift from reactive surveillance to proactive, AI-backed assurance with analytics tailored for leadership and regulators."
          stats={impactStats}
        />
        <Timeline
          id="solution-walkthrough"
          eyebrow="Solution Walkthrough"
          headline="A refined lifecycle engineered for enterprise velocity."
          steps={timelineSteps}
        />
        <ServicesSection
          id="exclusive-services"
          eyebrow="Exclusive Services"
          headline="A partnership designed for leaders who demand certainty."
          services={exclusiveServices}
        />
        <TestimonialCarousel
          id="testimonials"
          eyebrow="Testimonial"
          headline="Security leaders choose Anomeye for intelligence, integration, and trust."
          testimonials={testimonials}
        />
        <CTASection
          id="enterprise-cta"
          headline="Ready to orchestrate proactive enterprise security?"
          subheadline="Request a tailored platform demonstration with your dedicated security advisor. We will map readiness, define executive goals, and align deployment milestones in the first session."
          primaryCta={{ href: "#contact-sales", label: "Request Enterprise Demo" }}
          secondaryCta={{
            href: "#contact-sales",
            label: "Schedule Security Consultation",
          }}
        />
      </main>

      <Footer
        id="contact-sales"
        company="Anomeye"
        description="Integrated, AI-powered CCTV security platform for enterprises that require complete visibility, accelerated response, and unwavering compliance."
        contactEmail="enterprise@anomeye.ai"
        contactPhone="+1 (415) 555-0180"
        address="One Maritime Plaza, 18th Floor, San Francisco, CA 94111"
        quickLinks={quickLinks}
        legalLinks={legalLinks}
      />
    </div>
  );
}
