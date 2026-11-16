"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, Phone } from "lucide-react";
import heroImg from "../../public/images/banner-img/hero-img.jpg";
import eventsImg from "../../public/images/workshop-audience.jpg";
import communityImg from "../../public/images/community.jpg";
import mediaImg from "../../public/images/media-coverage.jpg";
import { site } from "@/lib/site";

interface HeroSlide {
  id: string;
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
}

const slides: HeroSlide[] = [
  {
    id: "policy-people",
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
  },
  {
    id: "state-conclaves",
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
  },
  {
    id: "citizen-outreach",
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
  },
  {
    id: "crisis-rebuttal",
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
      className="relative overflow-hidden rounded-2xl border border-line/70 bg-[#0b141a] text-white shadow-xl transition-all"
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#091116]/95 via-[#0c171e]/85 to-[#0b141a]/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091116] via-transparent to-transparent opacity-85" />
      </div>

      {/* Hero Foreground Content - Pure Minimalism with No Dividing Lines */}
      <div className="relative z-10 flex min-h-[440px] flex-col justify-center p-6 sm:p-12 lg:min-h-[480px] lg:p-16">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-lime">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {slide.badge}
          </div>

          {/* Headline */}
          <h1 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-white">
            {slide.headline} <br />
            <span className="text-lime">{slide.headlineAccent}</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-[16.5px]">
            {slide.description}
          </p>

          {/* Minimalist Action Cluster */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
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

        {/* Discrete Minimalist Slide Dots in Bottom Right Corner (No border lines) */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-8 sm:right-10">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx
                  ? "w-7 bg-lime"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
