import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  CalendarHeart,
  CheckCircle2,
  Landmark,
  MessagesSquare,
  PartyPopper,
  Presentation,
  ShieldAlert,
  Signpost,
  type LucideIcon,
} from "lucide-react";
import governanceImage from "../../../../public/images/governance-building.jpg";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Chip, Container, Eyebrow, text } from "@/components/ui";
import { caseStudies } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Government PR & Public Sector Communications — ICT Media",
  description:
    "Empanelled PR partner for Maharashtra State Departments, Municipal Corporations, and Public Bodies. Strategic narrative, institutional positioning, and citizen engagement.",
};

type GovSolution = {
  title: string;
  label: string;
  text: string;
  icon: LucideIcon;
  groups: { label: string; items: string[] }[];
};

const solutions: GovSolution[] = [
  {
    title: "Narrative Architecture",
    label: "What the Administration Communicates",
    text: "Strategic public communication that builds high recall for official policies, schemes, and milestones—factually, transparently, and with strict political neutrality.",
    icon: BookOpenText,
    groups: [
      {
        label: "Guiding Principles",
        items: ["Factual Accuracy", "Transparent Intent", "Citizen-Centricity", "Political Neutrality"],
      },
      {
        label: "Deliverables",
        items: ["Press Releases", "Executive Speeches", "Whitepapers", "Citizen Charters"],
      },
    ],
  },
  {
    title: "Institutional Positioning",
    label: "Where the Department Stands",
    text: "Modern communication frameworks shaped around public authority, departmental milestones, and administrative credibility across state and national forums.",
    icon: Signpost,
    groups: [
      {
        label: "Interpreted Accurately",
        items: ["State Acts & Policies", "Welfare Subsidies", "Civic Masterplans"],
      },
      {
        label: "Strict Adherence To",
        items: ["Administrative Protocols", "Clearance Hierarchy", "Official Nomenclature"],
      },
    ],
  },
  {
    title: "Citizen Engagement",
    label: "How People Participate",
    text: "Mass public awareness drives, grievance listening desks, and participatory campaigns powered by real-time public sentiment intelligence.",
    icon: MessagesSquare,
    groups: [
      {
        label: "Outreach Mediums",
        items: ["Regional Print Dailies", "TV Bureaus", "Official Handles", "OOH Hoardings"],
      },
    ],
  },
  {
    title: "Crisis PR & Rebuttal Desks",
    label: "Protecting Public Trust",
    text: "24/7 media and digital monitoring to immediately detect distorted reporting, clarify administrative facts, and issue authoritative rebuttals.",
    icon: ShieldAlert,
    groups: [
      {
        label: "Rapid Response",
        items: ["24/7 News Monitoring", "Fact-Checking Desk", "Departmental Rebuttals"],
      },
    ],
  },
];

const eventTypes: { title: string; detail: string; icon: LucideIcon }[] = [
  {
    title: "State Conclaves & Summits",
    detail: "Turnkey planning, VIP security coordination, broadcast-grade AV, and media centers.",
    icon: Presentation,
  },
  {
    title: "Project Foundation & Ceremonies",
    detail: "Flawless dais management, ministerial protocol, foundation stone ceremonies, and press logistics.",
    icon: Landmark,
  },
  {
    title: "Public Awareness Mahotsavs",
    detail: "Large-scale cultural festivals, wildlife weeks, agro-exhibitions, and citizen mobilization.",
    icon: PartyPopper,
  },
  {
    title: "Special Days & Commemorations",
    detail: "Maharashtra Day, Constitution Day, Wildlife Week, and institutional centenary books.",
    icon: CalendarHeart,
  },
];

export default function GovernmentPrPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Government PR" }]}
        eyebrow="Public Sector Strategic PR"
        title="Communication built for government. Made for people."
        description="Clear, credible, and protocol-compliant communication connecting state institutions with the citizens they serve across Maharashtra."
        icon={Landmark}
        index="02 / GOVERNMENT PR"
      />

      {/* Main Mission Section - Low Scroll */}
      <section className="bg-white py-10 lg:py-14 border-b border-line">
        <Container className="grid lg:grid-cols-[1fr_.9fr] gap-8 items-center">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-line bg-mist lg:min-h-[380px]">
            <Image
              src={governanceImage}
              alt="Civic government institutions and public communications in India"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-navy p-8 text-white lg:p-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
              Institutional Purpose
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight lg:text-3xl">
              Informed citizens. <br />
              <span className="text-lime">Stronger public trust.</span>
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-white/75">
              Every government policy represents months of administrative effort. Its ultimate success depends on whether the public understands it, trusts it, and knows how to access its benefits.
            </p>
            <div className="mt-6 border-t border-white/15 pt-4 font-mono text-[10.5px] uppercase tracking-[.13em] text-white/60">
              Listen · Demystify · Engage
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Pillars - Minimalist Grid */}
      <section className="bg-paper py-12 lg:py-16 border-b border-line" id="solutions">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b border-navy pb-4">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Strategic Disciplines
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
                Four pillars of public communication.
              </h2>
            </div>
            <span className="font-mono text-xs text-teal">01—04</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {solutions.map((solution, i) => (
              <div
                key={solution.title}
                className="flex flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-teal">0{i + 1}</span>
                    <solution.icon className="h-5 w-5 text-teal" />
                  </div>
                  <span className="mt-3 block font-mono text-[10px] uppercase tracking-wider text-teal">
                    {solution.label}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-navy">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy/70">
                    {solution.text}
                  </p>
                </div>

                <div className="mt-4 border-t border-line/60 pt-3 flex flex-wrap gap-1.5">
                  {solution.groups.flatMap((g) => g.items).map((item) => (
                    <span
                      key={item}
                      className="rounded bg-mist px-2 py-0.5 font-mono text-[9.5px] text-navy/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Government Events - Minimalist Row */}
      <section id="events" className="border-b border-line bg-white py-12 lg:py-14">
        <Container>
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              State Events & Ceremonies
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
              Turnkey event management for public administration.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((ev, i) => (
              <div
                key={ev.title}
                className="rounded-lg border border-line bg-paper p-5 transition-colors hover:border-teal/40"
              >
                <div className="flex items-center justify-between">
                  <ev.icon className="h-5 w-5 text-teal" />
                  <span className="font-mono text-[10px] font-bold text-navy/40">0{i + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-navy">
                  {ev.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy/70">
                  {ev.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Logos Ribbon */}
      <section className="bg-paper py-8 border-b border-line">
        <Container>
          <div className="mb-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-teal font-semibold">
              Empanelled Government Partners
            </span>
          </div>
          <ClientLogoCarousel limit={12} />
        </Container>
      </section>

      <NextStep
        eyebrow="Plan with our Government PR Team"
        title="The next public conversation starts here."
        description="Tell us about your department's upcoming schemes, state events, or media outreach objectives."
        href="/contact?interest=government-communications"
        cta="Initiate Briefing"
      />
    </>
  );
}
