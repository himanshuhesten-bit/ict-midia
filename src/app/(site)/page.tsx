import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Landmark,
  Languages,
  Megaphone,
  MonitorSmartphone,
  Newspaper,
  Palette,
  Phone,
  Radio,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Tv,
  Video,
} from "lucide-react";
import heroBanner from "../../../public/images/banner-img/hero-img.jpg";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import CountUp from "@/components/CountUp";
import NextStep from "@/components/NextStep";
import { Container, Eyebrow } from "@/components/ui";
import { blogArticles, readingMinutes } from "@/lib/blog";
import { caseStudies } from "@/lib/clients";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ICT Media — Strategic Communications & PR for Government & Public Sector",
  description:
    "Empanelled PR & Strategic Communication Partner to Maharashtra Government Departments, Municipal Corporations, and Public Institutions since 2013.",
};

const metrics = [
  { value: "13+", label: "Years Public Sector PR", sub: "Established 2013 in Nagpur" },
  { value: "50+", label: "Government Bodies", sub: "Departments, PSUs & Municipalities" },
  { value: "100+", label: "Assignments Delivered", sub: "Conclaves, Campaigns & Audits" },
  { value: "23+", label: "Empanelled Authorities", sub: "Pan-Maharashtra Reach" },
];

const standards = [
  {
    icon: ShieldCheck,
    title: "100% Protocol & Policy Fidelity",
    desc: "Strict adherence to official administrative clearance protocols, gazettes, and legislative frameworks.",
  },
  {
    icon: Newspaper,
    title: "Pan-Maharashtra Bureau Network",
    desc: "Daily liaison with accredited correspondents, regional press clubs, and television networks across all districts.",
  },
  {
    icon: ShieldAlert,
    title: "24/7 Crisis PR & Rebuttal Desks",
    desc: "Continuous media monitoring and rapid-response desks to clarify rumors and protect institutional trust.",
  },
  {
    icon: Languages,
    title: "Grassroots Multilingual Reach",
    desc: "Flawless communication in Marathi, Hindi, and English—translating policy into citizen understanding.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          1. COMPACT HERO SECTION: Minimalist & Low Scroll
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-8 lg:py-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded border border-teal/20 bg-mint-soft px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-teal">
                <Landmark className="h-3.5 w-3.5" />
                Strategic PR & Communication Partner to Government
              </div>

              <h1 className="mt-4 font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-extrabold leading-[1.06] tracking-[-.055em] text-navy">
                Where policy <br className="hidden sm:inline" />
                meets <span className="text-teal">people.</span>
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy/75 sm:text-[16px]">
                Empanelled and trusted by Maharashtra State Departments, Municipal Corporations, and Public Institutions since 2013 to shape credible public narratives, citizen engagement, and transparent policy outreach.
              </p>

              {/* Minimalist Action Cluster */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-navy px-5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal"
                >
                  Explore Capabilities
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact?interest=government-communications"
                  className="inline-flex min-h-[44px] items-center gap-2 border border-line bg-white px-5 text-xs font-semibold uppercase tracking-wider text-navy transition-colors hover:border-teal hover:bg-mist"
                >
                  <Landmark className="h-3.5 w-3.5 text-teal" />
                  Request Proposal (RFP)
                </Link>
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-[44px] items-center gap-1.5 px-3 font-mono text-xs font-semibold text-navy/80 hover:text-teal"
                >
                  <Phone className="h-3.5 w-3.5 text-teal" />
                  {site.phone.display}
                </a>
              </div>

              {/* Minimalist Micro Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line/80 pt-4 font-mono text-[11px] text-navy/60">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> GIGW & Protocol Adherence
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> Marathi · Hindi · English
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> Head Office: Nagpur
                </span>
              </div>
            </div>

            {/* Compact Media Card */}
            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line bg-mist shadow-lg">
                <Image
                  src={heroBanner}
                  alt="ICT Media public sector briefing in Maharashtra"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-lime">
                        Central India · Maharashtra
                      </span>
                      <h2 className="font-display text-sm font-bold">
                        13+ Years of Public Sector Trust & Impact
                      </h2>
                    </div>
                    <span className="rounded bg-lime/90 px-2 py-0.5 font-mono text-[9.5px] font-bold text-navy">
                      EST. 2013
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. METRICS STRIP: Low Height & High Density
         ========================================================================= */}
      <section className="border-b border-line bg-mist py-6" aria-label="Key metrics">
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
                <p className="text-[11px] text-navy/60">{m.sub}</p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* =========================================================================
          3. CLIENT LOGOS: Compact Low-Scroll Strip
         ========================================================================= */}
      <section className="border-b border-line bg-white py-8" id="clients">
        <Container>
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Institutional Partners · Empanelled Bodies
            </span>
            <Link
              href="/clients"
              className="font-mono text-xs font-semibold text-teal hover:underline"
            >
              All 23+ Clients & Case Studies →
            </Link>
          </div>
          <ClientLogoCarousel limit={12} />
        </Container>
      </section>

      {/* =========================================================================
          4. CORE SERVICES: Minimalist Clean 3x3 Grid (Low Scroll)
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-12 lg:py-16" id="services">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-navy pb-5">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Public Sector Capabilities
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy lg:text-3xl">
                Nine specialized services. <span className="text-teal">One clear outcome.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-teal hover:underline"
            >
              Full Specifications →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-line bg-white p-5 transition-all hover:border-teal hover:bg-mist/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-teal">0{i + 1}</span>
                    <span className="rounded bg-mist px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-navy/60">
                      {service.stage}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2.5">
                    <service.icon className="h-5 w-5 text-teal" />
                    <h3 className="font-display text-base font-bold text-navy group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-navy/70">
                    {service.lead}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-[11px] font-mono text-teal">
                  <span>View Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. INSTITUTIONAL STANDARDS: 4 Minimalist Highlights
         ========================================================================= */}
      <section className="border-b border-line bg-white py-12 lg:py-14">
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Institutional Discipline
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
              Why government departments choose ICT Media.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => (
              <div
                key={s.title}
                className="rounded-lg border border-line bg-paper p-5 transition-colors hover:border-teal/50"
              >
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-teal" />
                  <span className="font-mono text-[10px] font-bold text-navy/40">0{i + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy/70">
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
      <section className="border-b border-line bg-paper py-12 lg:py-16">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b border-navy pb-5">
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

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <div
                key={study.id}
                className="flex flex-col justify-between rounded-lg border border-line bg-white p-5 shadow-sm transition-all hover:border-teal/50"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-teal font-semibold">
                    {study.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-bold text-navy">
                    {study.client}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-navy/70">
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
          7. JOURNAL: 2 Minimalist Editorial Stories
         ========================================================================= */}
      <section className="border-b border-line bg-white py-10 lg:py-12">
        <Container>
          <div className="flex items-center justify-between border-b border-navy pb-4">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Public PR Journal
            </span>
            <Link href="/blogs" className="font-mono text-xs text-teal hover:underline">
              All Stories →
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {blogArticles.slice(0, 2).map((article) => (
              <Link
                key={article.slug}
                href={`/blogs/${article.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-5 transition-colors hover:border-teal/50 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-teal">
                    <span>{article.category}</span>
                    <span>{readingMinutes(article)} min read</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold text-navy group-hover:text-teal transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs text-navy/65">
                    {article.excerpt}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-teal">
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
