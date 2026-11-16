import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Compass,
  Landmark,
  Lightbulb,
  ShieldCheck,
  Shuffle,
  TrendingUp,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import aboutPhoto from "../../../../public/images/about-img/img1.jpg";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About ICT Media — Public Sector Strategic Communications Practice",
  description:
    "ICT Media is an empanelled strategic communication and PR partner to government departments, municipal corporations and public institutions across Maharashtra.",
};

const competencies: { title: string; detail: string; icon: LucideIcon }[] = [
  {
    title: "Government-Centric",
    detail: "Deep understanding of public sector protocols, gazettes, and official channels.",
    icon: Landmark,
  },
  {
    title: "Strategic Architecture",
    detail: "Insight-driven planning, perception auditing, and crisis PR mitigation.",
    icon: Compass,
  },
  {
    title: "100% Credibility",
    detail: "Factual, verifiable communications that build enduring public authority.",
    icon: BadgeCheck,
  },
  {
    title: "Multilingual Nuance",
    detail: "Authentic voice across Marathi, Hindi, and English reaching grassroots citizens.",
    icon: Lightbulb,
  },
  {
    title: "Multi-Agency Coordination",
    detail: "Flawless inter-departmental liaison with police, municipal, and state bodies.",
    icon: Waypoints,
  },
  {
    title: "Turnkey Reliability",
    detail: "End-to-end execution from narrative design to large-scale state conclaves.",
    icon: CalendarCheck,
  },
  {
    title: "Adaptive Agility",
    detail: "Rapid response to breaking civic events, rumors, and public discussions.",
    icon: Shuffle,
  },
  {
    title: "Measurable Impact",
    detail: "Quantified editorial reach, sentiment tracking, and high citizen participation.",
    icon: TrendingUp,
  },
];

const timeline = [
  {
    year: "2013",
    title: "Inception in Nagpur",
    detail: "Founded to bridge the gap between government administration and citizens.",
  },
  {
    year: "2016",
    title: "Vidarbha Expansion",
    detail: "Empanelled with leading municipal bodies, tiger reserves, and information bureaus.",
  },
  {
    year: "2020",
    title: "Crisis & Health PR",
    detail: "Delivered statewide public health advisories and digital citizen outreach.",
  },
  {
    year: "2026",
    title: "Pan-Maharashtra Reach",
    detail: "Trusted partner to 50+ government departments, PSUs, and smart cities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        eyebrow="Public Sector PR Heritage"
        title="We believe clarity builds public trust."
        description="A specialized strategic communication practice dedicated to government departments, municipal corporations, and public institutions across Maharashtra."
        icon={Landmark}
        index="01 / ABOUT US"
      />

      {/* Main Philosophy - Compact Split */}
      <section className="bg-white py-10 lg:py-14 border-b border-line">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line bg-mist shadow-md">
              <Image
                src={aboutPhoto}
                alt="ICT Media public communications team and state briefing"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-navy p-4 text-white shadow-lg">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-lime">
                Est. 2013 · Nagpur
              </span>
              <span className="block font-display text-sm font-bold">
                13+ Years of Public Sector Trust
              </span>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Institutional Heritage
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy lg:text-3xl">
              Bridging the gap between <span className="text-teal">policy and people.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-navy/75">
              The purpose of public sector communication is to create, maintain, and strengthen meaningful trust between an administration and the citizens it serves.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-navy/75">
              When government schemes, policies, and welfare programs are communicated with clarity and cultural resonance, citizen participation increases and public governance succeeds.
            </p>

            <div className="mt-6 border-t border-line pt-4">
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-navy">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> Official Protocol Adherence
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> Accredited Bureau Liaison
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> Marathi · Hindi · English
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal" /> Turnkey State Conclaves
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 13-Year Milestone Journey - Compact 4 Columns */}
      <section className="border-b border-line bg-paper py-10 lg:py-12">
        <Container>
          <div className="mb-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Key Milestones
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
              13+ years of dedicated public service PR.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-lg border border-line bg-white p-4 shadow-sm"
              >
                <span className="font-display text-2xl font-extrabold text-teal">
                  {item.year}
                </span>
                <h3 className="mt-2 font-display text-sm font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-navy/65">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8 Competencies - Compact Grid */}
      <section className="border-b border-line bg-mist py-10 lg:py-14">
        <Container>
          <div className="mb-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Operational Standards
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
              Eight strengths behind our public sector delivery.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map((item, i) => (
              <div
                key={item.title}
                className="rounded-lg border border-line bg-white p-4 transition-colors hover:border-teal/40"
              >
                <div className="flex items-center justify-between">
                  <item.icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] text-teal">0{i + 1}</span>
                </div>
                <h3 className="mt-2 font-display text-sm font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-navy/65">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Logos Preview - Low Scroll */}
      <section className="bg-white py-8 border-b border-line">
        <Container>
          <div className="mb-4">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              Empanelled Institutions
            </span>
          </div>
          <ClientLogoCarousel limit={12} />
        </Container>
      </section>

      <NextStep
        eyebrow="Public Sector Solutions"
        title="Ready to discuss your department's communication strategy?"
        description="Our senior consultants are available for in-person briefings in Nagpur, Mumbai, and district headquarters across Maharashtra."
        href="/contact?interest=government-communications"
        cta="Schedule a Consultation"
      />
    </>
  );
}
