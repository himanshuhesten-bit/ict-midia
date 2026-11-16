import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import { Container, Eyebrow } from "@/components/ui";
import { caseStudies, clients } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Clients & Public Impact — ICT Media",
  description:
    "Explore the government departments, municipal corporations, public sector undertakings, and conservation bodies served by ICT Media across Maharashtra.",
};

const institutionalHighlights = [
  {
    icon: Landmark,
    title: "Civic & Municipal",
    count: "20+",
    detail: "Municipal corporations, zilla parishads, smart city administrations.",
  },
  {
    icon: Award,
    title: "State PSUs",
    count: "15+",
    detail: "Tourism, power generation, infrastructure boards, state universities.",
  },
  {
    icon: ShieldCheck,
    title: "Law & Safety",
    count: "08+",
    detail: "District police departments, fire & safety councils, security missions.",
  },
  {
    icon: TrendingUp,
    title: "Wildlife & Forests",
    count: "07+",
    detail: "Pench, Tadoba, Navegaon Nagzira tiger reserves, pollution control.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Clients & Impact" }]}
        eyebrow="Public Sector Track Record"
        title="Trusted by government. Built for public impact."
        description="Over 13 years of strategic PR, state conclaves, policy publications, and citizen engagement across Maharashtra."
        icon={Landmark}
        index="03 / CLIENTS & IMPACT"
      />

      {/* Sector Overview Ribbon - Low Scroll */}
      <section className="border-b border-line bg-mist py-8">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-line bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <item.icon className="h-5 w-5 text-teal" />
                  <span className="font-display text-xl font-bold text-navy">
                    {item.count}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-sm font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-navy/65">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full 23 Logos Showcase - Minimalist Grid */}
      <section className="bg-paper py-10 lg:py-14 border-b border-line">
        <Container>
          <div className="mb-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Institutional Partners
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
              Empanelled across Maharashtra.
            </h2>
          </div>

          <ClientLogoCarousel limit={23} />
        </Container>
      </section>

      {/* Case Studies - Minimalist Cards */}
      <section className="bg-white py-12 lg:py-16 border-b border-line" id="case-studies">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b border-navy pb-4">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Selected Assignments
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
                Demonstrated public sector outcomes.
              </h2>
            </div>
            <span className="font-mono text-xs text-teal">01—0{caseStudies.length}</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <div
                key={study.id}
                className="flex flex-col justify-between rounded-lg border border-line bg-paper p-5 shadow-sm transition-all hover:border-teal/50 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-teal font-semibold">
                      {study.category}
                    </span>
                    <span className="font-mono text-[10px] text-navy/40">0{i + 1}</span>
                  </div>

                  <h3 className="mt-2 font-display text-base font-bold text-navy">
                    {study.client}
                  </h3>
                  <h4 className="mt-1 font-display text-xs font-semibold text-teal">
                    {study.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-navy/70">
                    {study.summary}
                  </p>
                </div>

                <div className="mt-4 border-t border-line pt-3">
                  <p className="text-xs font-medium text-navy/80">
                    <span className="font-bold text-teal">Impact:</span> {study.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tendering & Empanelment Credentials Ribbon */}
      <section className="bg-mist py-8 border-b border-line">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-navy p-6 text-white sm:p-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
                Tendering & Empanelment
              </span>
              <h3 className="mt-1 font-display text-xl font-bold">
                Need ICT Media&apos;s Official Credentials & Empanelment Files?
              </h3>
              <p className="mt-1 text-xs text-white/70 max-w-xl">
                We maintain active compliance files, past work completion certificates, GIGW certifications, and audited financial statements for tenders and RFP bids.
              </p>
            </div>
            <Link
              href="/contact?interest=government-communications"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-lime px-6 text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:bg-white shrink-0"
            >
              Request RFP Documents
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <NextStep
        eyebrow="Government Communications"
        title="Partner with Maharashtra's leading public sector PR practice."
        description="Reach out to our government liaison desk for project briefs, department conclaves, or media campaigns."
        href="/contact?interest=government-communications"
        cta="Initiate Consultation"
      />
    </>
  );
}
