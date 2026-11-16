"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Phone,
  ShieldCheck,
} from "lucide-react";
import heroImg from "../../public/images/banner-img/hero-img.jpg";
import eventsImg from "../../public/images/workshop-audience.jpg";
import communityImg from "../../public/images/community.jpg";
import mediaImg from "../../public/images/media-coverage.jpg";
import { site } from "@/lib/site";

interface HeroSlide {
  id: string;
  tag: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  description: string;
  primaryHref: string;
  primaryCta: string;
  secondaryHref: string;
  secondaryCta: string;
  image: typeof heroImg;
  imageAlt: string;
  metricNumber: string;
  metricLabel: string;
}

const slides: HeroSlide[] = [
  {
    id: "policy-people",
    tag: "01 / STRATEGIC PR & MEDIA",
    badge: "Empanelled Government PR Practice",
    headline: "Where policy",
    headlineAccent: "meets people.",
    description:
      "Strategic PR, ministerial media briefings, and narrative architecture built to establish enduring public authority and citizen trust across Maharashtra.",
    primaryHref: "/services/public-relations",
    primaryCta: "Explore PR Capabilities",
    secondaryHref: "/contact?interest=government-communications",
    secondaryCta: "Request Proposal (RFP)",
    image: heroImg,
    imageAlt: "Government communication and strategic PR briefing in Maharashtra",
    metricNumber: "50+ Bodies",
    metricLabel: "Government Departments Served",
  },
  {
    id: "state-conclaves",
    tag: "02 / STATE EVENTS & CONCLAVES",
    badge: "Turnkey Conclave & Ceremonial Production",
    headline: "Turnkey state conclaves &",
    headlineAccent: "ceremonies.",
    description:
      "Zero-defect dais protocol, ministerial security liaison, broadcast-grade 4K LED video walls, and accredited press centers for high-profile government summits.",
    primaryHref: "/services/government-events",
    primaryCta: "Event Management PR",
    secondaryHref: "/clients#case-studies",
    secondaryCta: "Review Conclave Work",
    image: eventsImg,
    imageAlt: "Audience and state dignitaries assembled at official state conclave",
    metricNumber: "100+ Events",
    metricLabel: "Turnkey Summits Delivered",
  },
  {
    id: "citizen-outreach",
    tag: "03 / GRASSROOTS CITIZEN OUTREACH",
    badge: "Multilingual Citizen Engagement",
    headline: "Connecting policy to",
    headlineAccent: "grassroots citizens.",
    description:
      "Translating complex welfare schemes, gazette directives, and civic masterplans into clear, actionable narratives in Marathi, Hindi, and English for all 36 Maharashtra districts.",
    primaryHref: "/government-pr",
    primaryCta: "Citizen PR Framework",
    secondaryHref: "/clients",
    secondaryCta: "Explore Grassroots Impact",
    image: communityImg,
    imageAlt: "Community dialogue and citizen participation in Maharashtra",
    metricNumber: "36 Districts",
    metricLabel: "Pan-Maharashtra Reach",
  },
  {
    id: "crisis-rebuttal",
    tag: "04 / CRISIS PR & FACT-CHECKING",
    badge: "24/7 Media & Digital Intelligence",
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
    metricNumber: "24/7 Desk",
    metricLabel: "Real-Time Fact Checking",
  },
];

export default function ModernHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = slides[current];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line/80 bg-[#0b141a] text-white shadow-xl transition-all"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Layer with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-all duration-700 scale-105"
        />
        {/* Minimalist Multi-Stop Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091116]/95 via-[#0c171e]/85 to-[#0b141a]/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091116] via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Foreground Content - Strict Minimalism */}
      <div className="relative z-10 flex min-h-[460px] flex-col justify-between p-6 sm:p-10 lg:min-h-[500px] lg:p-14">
        {/* Top Minimalist Tagline Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-lime">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              {slide.badge}
            </span>
            <span className="hidden text-white/30 sm:inline">|</span>
            <span className="hidden font-mono text-[10.5px] text-white/60 sm:inline">
              {slide.tag}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-white/60">
            <span className="hidden md:inline">
              <ShieldCheck className="mr-1.5 inline h-3.5 w-3.5 text-teal" />
              GIGW & Protocol Adherence
            </span>
            <span className="text-white/40">
              0{current + 1} / 0{slides.length}
            </span>
          </div>
        </div>

        {/* Center Minimalist Typographic Core */}
        <div className="my-auto max-w-3xl py-8">
          <h1 className="font-display text-[clamp(2.5rem,4.8vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-white">
            {slide.headline} <br />
            <span className="text-lime">{slide.headlineAccent}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-[16.5px]">
            {slide.description}
          </p>

          {/* Minimalist Action Cluster */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href={slide.primaryHref}
              className="inline-flex min-h-[46px] items-center gap-2 rounded bg-lime px-6 text-xs font-bold uppercase tracking-wider text-navy transition-all hover:bg-white hover:shadow-lg"
            >
              {slide.primaryCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={slide.secondaryHref}
              className="inline-flex min-h-[46px] items-center gap-2 rounded border border-white/25 bg-white/5 px-5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-lime hover:bg-white/10"
            >
              <Landmark className="h-3.5 w-3.5 text-lime" />
              {slide.secondaryCta}
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex min-h-[46px] items-center gap-2 px-3 font-mono text-xs font-semibold text-white/80 transition-colors hover:text-lime"
            >
              <Phone className="h-3.5 w-3.5 text-lime" />
              {site.phone.display}
            </a>
          </div>
        </div>

        {/* Bottom Minimalist Status & Navigation Bar */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-4">
          {/* Left: Client Trust Note */}
          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="font-display text-base font-extrabold text-lime">
              {slide.metricNumber}
            </span>
            <span className="font-mono text-[11px] text-white/60">
              {slide.metricLabel} · Central India & Maharashtra
            </span>
          </div>

          {/* Right: Minimalist Slide Switcher Tabs */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`Slide ${idx + 1}: ${s.headline}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    current === idx
                      ? "w-8 bg-lime"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 pl-2 border-l border-white/15">
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
                className="flex h-7 w-7 items-center justify-center rounded border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-lime hover:text-lime cursor-pointer"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                aria-label="Next slide"
                className="flex h-7 w-7 items-center justify-center rounded border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-lime hover:text-lime cursor-pointer"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
