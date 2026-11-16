import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Landmark,
  Languages,
  Newspaper,
  Phone,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import CountUp from "@/components/CountUp";
import HeroSlider from "@/components/HeroSlider";
import InteractiveServiceExplorer from "@/components/InteractiveServiceExplorer";
import NextStep from "@/components/NextStep";
import { Container, Eyebrow } from "@/components/ui";
import { blogArticles, readingMinutes } from "@/lib/blog";
import { caseStudies } from "@/lib/clients";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ICT Media — Strategic Communications & PR for Government & Public Sector",
  description:
    "Empanelled PR & Strategic Communication Partner to Maharashtra Government Departments, Municipal Corporations, and Public Institutions since 2013.",
};

const metrics = [
  { value: "13+", label: "Years Public Sector PR", sub: "Est. 2013 in Nagpur" },
  { value: "50+", label: "Government Bodies", sub: "Departments, PSUs & Municipalities" },
  { value: "100+", label: "Assignments Delivered", sub: "Conclaves, Campaigns & Audits" },
  { value: "23+", label: "Empanelled Authorities", sub: "Pan-Maharashtra Reach" },
];

const standards = [
  {
    icon: ShieldCheck,
    title: "100% Protocol Fidelity",
    desc: "Strict adherence to official administrative clearance protocols, gazettes, and legislative frameworks.",
  },
  {
    icon: Newspaper,
    title: "Bureau Network",
    desc: "Daily liaison with accredited correspondents, regional press clubs, and television networks across all districts.",
  },
  {
    icon: ShieldAlert,
    title: "24/7 Crisis PR Desks",
    desc: "Continuous media monitoring and rapid-response desks to clarify rumors and protect institutional trust.",
  },
  {
    icon: Languages,
    title: "Multilingual Nuance",
    desc: "Flawless communication in Marathi, Hindi, and English—translating policy into citizen understanding.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          1. INTERACTIVE ANIMATED HERO SECTION: Low Scroll, Dynamic & High Contrast
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-8 lg:py-12">
        <Container>
          <HeroSlider />
        </Container>
      </section>

      {/* =========================================================================
          2. METRICS STRIP: High Density & Low Height
         ========================================================================= */}
      <section className="border-b border-line bg-mist py-5" aria-label="Key metrics">
        <Container>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`pl-4 ${i === 0 ? "border-l-2 border-teal" : "border-l border-line"}`}
              >
                <dd className="font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                  <CountUp value={m.value} />
                </dd>
                <dt className="text-xs font-bold text-navy">{m.label}</dt>
                <p className="text-[10.5px] text-navy/60">{m.sub}</p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* =========================================================================
          3. ANIMATED LOGO MARQUEE CAROUSEL: All 23 Government Partners
         ========================================================================= */}
      <section className="border-b border-line bg-white py-6" id="clients">
        <Container>
          <ClientLogoCarousel limit={23} />
        </Container>
      </section>

      {/* =========================================================================
          4. INTERACTIVE SERVICE EXPLORER: 9 Capabilities with Live Preview
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-10 lg:py-14" id="services">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-navy pb-4 mb-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Interactive Capabilities Matrix
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy lg:text-3xl">
                Nine public sector services. <span className="text-teal">Interactive explorer.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-teal hover:underline"
            >
              All Specifications →
            </Link>
          </div>

          <InteractiveServiceExplorer />
        </Container>
      </section>

      {/* =========================================================================
          5. INSTITUTIONAL STANDARDS: 4 Minimalist Highlights
         ========================================================================= */}
      <section className="border-b border-line bg-white py-10 lg:py-12">
        <Container>
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Institutional Discipline
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
              Why government departments choose ICT Media.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => (
              <div
                key={s.title}
                className="rounded-lg border border-line bg-paper p-4 transition-colors hover:border-teal/50"
              >
                <div className="flex items-center justify-between">
                  <s.icon className="h-4 w-4 text-teal" />
                  <span className="font-mono text-[10px] font-bold text-navy/40">0{i + 1}</span>
                </div>
                <h3 className="mt-2 font-display text-sm font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-navy/70">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. CURATED CASE STUDIES: 3 Compact Cards (Low Scroll)
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-10 lg:py-14">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b border-navy pb-4 mb-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Demonstrated Impact
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
                Recent public sector assignments.
              </h2>
            </div>
            <Link
              href="/clients#case-studies"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-teal hover:underline"
            >
              All Case Studies →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <div
                key={study.id}
                className="flex flex-col justify-between rounded-lg border border-line bg-white p-5 shadow-xs transition-all hover:border-teal/50"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-teal font-semibold">
                    {study.category}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-navy">
                    {study.client}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-navy/70">
                    {study.title}
                  </p>
                </div>

                <div className="mt-4 border-t border-line/70 pt-3">
                  <p className="text-[11.5px] font-medium text-navy/80">
                    <span className="font-bold text-teal">Outcome:</span> {study.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. JOURNAL: 2 Minimalist Stories
         ========================================================================= */}
      <section className="border-b border-line bg-white py-8 lg:py-10">
        <Container>
          <div className="flex items-center justify-between border-b border-navy pb-3 mb-5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Public PR Journal
            </span>
            <Link href="/blogs" className="font-mono text-xs text-teal hover:underline">
              All Stories →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {blogArticles.slice(0, 2).map((article) => (
              <Link
                key={article.slug}
                href={`/blogs/${article.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-4 transition-colors hover:border-teal/50 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-teal">
                    <span>{article.category}</span>
                    <span>{readingMinutes(article)} min read</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-sm font-bold text-navy group-hover:text-teal transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-navy/65">
                    {article.excerpt}
                  </p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10.5px] font-semibold text-teal">
                  Read Story <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION: Minimalist Proposal Request
         ========================================================================= */}
      <NextStep
        eyebrow="Government Consultation"
        title="Ready to structure your department's communication brief?"
        description="Connect with ICT Media's institutional PR team for project empanelment, tenders, state conclaves, or media campaigns."
        href="/contact?interest=government-communications"
        cta="Initiate Consultation"
        showMascot
      />
    </>
  );
}
