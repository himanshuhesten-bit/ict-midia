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
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import CountWrapper from "@/components/CountWrapper";
import InteractiveServiceExplorer from "@/components/InteractiveServiceExplorer";
import ModernHero from "@/components/ModernHero";
import NextStep from "@/components/NextStep";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Container, Eyebrow } from "@/components/ui";
import { blogArticles, readingMinutes } from "@/lib/blog";
import { caseStudies } from "@/lib/clients";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ICT Media — Strategic Communications & PR for Government & Public Sector",
  description:
    "Empanelled PR & Strategic Communication Partner to Maharashtra Government Departments, Municipal Corporations, and Public Institutions since 2013.",
};

const processSteps = [
  {
    num: "01",
    title: "Institutional Audit & Perception Intelligence",
    detail: "Evaluating public sentiment, media footprint, and departmental priorities across regional and national channels.",
  },
  {
    num: "02",
    title: "Policy & Message Architecture",
    detail: "Structuring factual, protocol-compliant key messages, speeches, and citizen charters in Marathi, Hindi, and English.",
  },
  {
    num: "03",
    title: "Omnichannel Dissemination",
    detail: "Orchestrated release across print bureaus, television broadcast, digital handles, hoardings, and on-ground forums.",
  },
  {
    num: "04",
    title: "Impact Verification & Citizen Feedback",
    detail: "Quantifying editorial reach, public perception shifts, and actionable citizen feedback for administrative leadership.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          1. MODERN INTERACTIVE HERO SECTION: Agencyo/Digitos Inspired Authority
         ========================================================================= */}
      <section className="bg-paper pt-6 pb-2 sm:pt-8 sm:pb-4 lg:pt-10 lg:pb-4">
        <Container>
          <ModernHero />

          {/* =========================================================================
              2. COUNT WRAPPER: Vidarbha Infotech Inspired Metric Counter Strip
             ========================================================================= */}
          <div className="mt-6 sm:mt-8">
            <CountWrapper />
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE US: Vidarbha Infotech Inspired .choose-wrapper
         ========================================================================= */}
      <section className="border-y border-line bg-mist py-10 lg:py-16">
        <Container>
          <WhyChooseUs />
        </Container>
      </section>

      {/* =========================================================================
          4. OUR CLIENTELE: 23 Empanelled Government Partners Marquee
         ========================================================================= */}
      <section className="border-b border-line bg-white py-10 lg:py-12" id="clients">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Institutional Empanelment
            </p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
              OUR <span className="text-teal">CLIENTELE</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-navy/70">
              Trusted by MTDC, Mahagenco, Nagpur Municipal Corporation, Maharashtra Police, and 50+ Public Sector Bodies.
            </p>
          </div>
          <ClientLogoCarousel limit={23} />
        </Container>
      </section>

      {/* =========================================================================
          5. INTERACTIVE SERVICE EXPLORER: 9 Public Sector Capabilities
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-10 lg:py-14" id="services">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-navy pb-4 mb-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Public Sector Capabilities
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy lg:text-3xl">
                Nine specialized services. <span className="text-teal">Interactive explorer.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-teal hover:underline"
            >
              All Service Specifications →
            </Link>
          </div>

          <InteractiveServiceExplorer />
        </Container>
      </section>

      {/* =========================================================================
          6. CURATED CASE STUDIES: Demonstrated Public Outcomes
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-10 lg:py-14">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b border-navy pb-4 mb-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Demonstrated Impact
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
                Key government assignments.
              </h2>
            </div>
            <Link
              href="/clients#case-studies"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-teal hover:underline"
            >
              All 6 Case Studies →
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
          7. THE 4-STAGE PUBLIC PR METHODOLOGY ROADMAP
         ========================================================================= */}
      <section className="border-b border-line bg-white py-10 lg:py-12">
        <Container>
          <div className="flex items-center justify-between border-b border-navy pb-3 mb-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Government PR Methodology
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
                From policy gazette to citizen impact.
              </h2>
            </div>
            <span className="font-mono text-xs text-navy/50">4-Stage Protocol</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-lg border border-line bg-paper p-4"
              >
                <span className="font-mono text-xs font-bold text-teal">
                  STAGE {step.num}
                </span>
                <h3 className="mt-2 font-display text-sm font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-navy/65 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. PUBLIC PR JOURNAL: 2 Minimalist Stories
         ========================================================================= */}
      <section className="border-b border-line bg-paper py-8 lg:py-10">
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
                className="group flex flex-col justify-between rounded-lg border border-line bg-white p-4 transition-colors hover:border-teal/50"
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
          9. CALL TO ACTION: Minimalist Proposal Request
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
