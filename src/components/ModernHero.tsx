"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Languages,
  Megaphone,
  Newspaper,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import heroImg from "../../public/images/banner-img/hero-img.jpg";
import eventsImg from "../../public/images/workshop-audience.jpg";
import communityImg from "../../public/images/community.jpg";
import mediaImg from "../../public/images/media-coverage.jpg";
import { site } from "@/lib/site";

interface HeroPillar {
  id: string;
  tabLabel: string;
  badge: string;
  icon: typeof Landmark;
  headline: string;
  headlineAccent: string;
  description: string;
  primaryHref: string;
  primaryCta: string;
  secondaryHref: string;
  secondaryCta: string;
  image: typeof heroImg;
  imageAlt: string;
  statNumber: string;
  statLabel: string;
  floatingPill: string;
}

const heroPillars: HeroPillar[] = [
  {
    id: "pr-strategy",
    tabLabel: "Strategic PR & Media",
    badge: "Empanelled Government PR Practice",
    icon: Megaphone,
    headline: "Where public policy",
    headlineAccent: "meets the people.",
    description:
      "Strategic media liaison, ministerial press conferences, and narrative architecture built to establish unwavering institutional authority and citizen trust across Maharashtra.",
    primaryHref: "/services/public-relations",
    primaryCta: "Explore PR Capabilities",
    secondaryHref: "/contact?interest=government-communications",
    secondaryCta: "Request Proposal (RFP)",
    image: heroImg,
    imageAlt: "ICT Media state communications briefing in Maharashtra",
    statNumber: "50+ Bodies",
    statLabel: "Govt. Departments Served",
    floatingPill: "100% Policy Fidelity",
  },
  {
    id: "conclaves-events",
    tabLabel: "State Conclaves & VIP Protocol",
    badge: "Turnkey Conclaves & Ceremonies",
    icon: CalendarCheck,
    headline: "High-level state conclaves &",
    headlineAccent: "ceremonies.",
    description:
      "Zero-defect dais protocol, ministerial security liaison, broadcast-grade 4K LED video walls, and accredited press centers for high-profile government summits and inaugurations.",
    primaryHref: "/services/government-events",
    primaryCta: "Event PR Services",
    secondaryHref: "/clients#case-studies",
    secondaryCta: "Review Conclave Work",
    image: eventsImg,
    imageAlt: "Audience and state dignitaries assembled at official state conclave",
    statNumber: "100+ Events",
    statLabel: "Turnkey State Summits",
    floatingPill: "VIP Protocol Adherence",
  },
  {
    id: "citizen-outreach",
    tabLabel: "Multilingual Citizen Outreach",
    badge: "Grassroots Public Engagement",
    icon: Languages,
    headline: "Translating policy into",
    headlineAccent: "citizen action.",
    description:
      "Transforming complex welfare schemes, gazette directives, and civic masterplans into clear, culturally attuned narratives across Marathi, Hindi, and English for all 36 Maharashtra districts.",
    primaryHref: "/government-pr",
    primaryCta: "Citizen PR Framework",
    secondaryHref: "/clients",
    secondaryCta: "Explore Grassroots Impact",
    image: communityImg,
    imageAlt: "Community outreach and citizen discussion in Maharashtra",
    statNumber: "36 Districts",
    statLabel: "Pan-Maharashtra Reach",
    floatingPill: "मराठी · हिंदी · English",
  },
  {
    id: "crisis-rebuttal",
    tabLabel: "24/7 Crisis PR & Rebuttals",
    badge: "Institutional Trust Protection",
    icon: ShieldAlert,
    headline: "Safeguarding public trust with",
    headlineAccent: "real-time rebuttals.",
    description:
      "Round-the-clock media and digital monitoring to immediately detect distorted reporting, clarify administrative facts, and deploy verified official government rebuttals.",
    primaryHref: "/services/public-relations",
    primaryCta: "Crisis Management PR",
    secondaryHref: "/contact",
    secondaryCta: "Contact Liaison Desk",
    image: mediaImg,
    imageAlt: "Press conference microphones and media broadcast desk",
    statNumber: "24/7 Desk",
    statLabel: "Real-Time Monitoring",
    floatingPill: "Rapid Fact-Checking",
  },
];

export default function ModernHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroPillars.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = heroPillars[activeIndex];
  const Icon = current.icon;

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#0c161d] text-white shadow-2xl border border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-lime/15 blur-3xl" />

      {/* Top Interactive Tabs Switcher */}
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {heroPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeIndex === idx
                    ? "bg-lime text-navy shadow-md ring-1 ring-lime/40"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    activeIndex === idx ? "bg-navy" : "bg-lime/60"
                  }`}
                />
                {pillar.tabLabel}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 font-mono text-[11px] text-white/50 md:flex">
            <span>0{activeIndex + 1} / 0{heroPillars.length}</span>
            <span className="text-lime">● Auto-advancing</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12">
        {/* Left Column: Bold Typographic Pitch */}
        <div className="flex flex-col justify-center">
          {/* Government Empanelled Status Pill */}
          <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-lime">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <Icon className="h-3.5 w-3.5" />
            {current.badge}
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-display text-[clamp(2.4rem,4.4vw,4.4rem)] font-black leading-[1.05] tracking-[-0.055em] text-white">
            {current.headline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-mint to-teal">
              {current.headlineAccent}
            </span>
          </h1>

          {/* Lead Copy */}
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/75 sm:text-[15.5px]">
            {current.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={current.primaryHref}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-lime px-6 text-xs font-bold uppercase tracking-wider text-navy transition-all hover:bg-white hover:shadow-lg shadow-md"
            >
              {current.primaryCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={current.secondaryHref}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-lime hover:bg-white/10"
            >
              <Landmark className="h-3.5 w-3.5 text-lime" />
              {current.secondaryCta}
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex min-h-[46px] items-center gap-2 px-3 font-mono text-xs font-semibold text-white/80 hover:text-lime"
            >
              <Phone className="h-3.5 w-3.5 text-lime" />
              {site.phone.display}
            </a>
          </div>

          {/* Client Trust Proof Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-white/60">
            <div className="flex -space-x-2 overflow-hidden">
              {["/images/logos/img1.png", "/images/logos/img2.png", "/images/logos/img3.png", "/images/logos/img4.png"].map(
                (logoSrc, i) => (
                  <div
                    key={i}
                    className="inline-block h-7 w-7 rounded-full border-2 border-navy bg-white p-0.5"
                  >
                    <Image
                      src={logoSrc}
                      alt="Government Client Logo"
                      width={28}
                      height={28}
                      className="h-full w-full object-contain filter grayscale"
                    />
                  </div>
                )
              )}
            </div>
            <span className="font-mono text-[11px] text-white/70">
              Trusted by MTDC, Mahagenco, NMC, Police & 50+ Public Bodies
            </span>
          </div>
        </div>

        {/* Right Column: Layered Visual Graphic Showcase */}
        <div className="relative">
          <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-white/15 bg-navy shadow-2xl">
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c161d] via-transparent to-transparent opacity-90" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/20 bg-navy/90 p-3.5 backdrop-blur-md">
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-lime">
                  Institutional Standard
                </span>
                <span className="block font-display text-xs font-bold text-white">
                  {current.floatingPill}
                </span>
              </div>
              <div className="text-right">
                <span className="block font-display text-sm font-extrabold text-lime">
                  {current.statNumber}
                </span>
                <span className="block font-mono text-[9px] text-white/70">
                  {current.statLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Floating Metric Badge 1 (Top Left) */}
          <div className="absolute -left-3 -top-3 hidden rounded-lg border border-white/15 bg-navy/95 px-3 py-2 text-white shadow-xl sm:flex sm:items-center sm:gap-2 backdrop-blur-md animate-float">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-lime/10 text-lime">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold text-white">
                GIGW & Protocol Compliant
              </p>
              <p className="font-mono text-[9px] text-white/60">
                Maharashtra State Empanelled
              </p>
            </div>
          </div>

          {/* Floating Metric Badge 2 (Top Right) */}
          <div className="absolute -right-3 -top-3 hidden rounded-lg border border-white/15 bg-navy/95 px-3 py-2 text-white shadow-xl sm:flex sm:items-center sm:gap-2 backdrop-blur-md">
            <span className="font-display text-sm font-extrabold text-lime">
              13+ Yrs
            </span>
            <span className="font-mono text-[9.5px] text-white/70">
              PR Excellence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
