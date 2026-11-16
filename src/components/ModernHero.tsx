"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Landmark, Phone } from "lucide-react";
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
      "Strategic PR, ministerial briefings, and narrative architecture built to establish enduring public authority and citizen trust across Maharashtra.",
    primaryHref: "/services/public-relations",
    primaryCta: "Explore PR Practice",
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
      "Zero-defect dais protocol, ministerial security liaison, broadcast-grade 4K LED video walls, and accredited press centers for high-profile summits.",
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
      "Translating complex welfare schemes, gazette directives, and civic masterplans into clear, actionable narratives in Marathi, Hindi, and English.",
    primaryHref: "/government-pr",
    primaryCta: "Citizen PR Framework",
    secondaryHref: "/clients",
    secondaryCta: "Explore Citizen Impact",
    image: communityImg,
    imageAlt: "Community dialogue and citizen participation in Maharashtra",
  },
  {
    id: "crisis-rebuttal",
    badge: "24/7 Media & Digital Intelligence",
    headline: "Safeguarding public trust with",
    headlineAccent: "real-time rebuttals.",
    description:
      "Round-the-clock media and digital monitoring to immediately detect distorted reporting, clarify administrative facts, and deploy verified official rebuttals.",
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

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <div
      className="relative h-[580px] sm:h-[500px] lg:h-[520px] w-full overflow-hidden rounded-2xl border border-line/70 bg-[#111e25] text-white shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Layer with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              priority={idx === 0}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center brightness-[0.85] contrast-[1.05] transition-transform duration-1000 ease-out scale-100"
            />
          </div>
        ))}

        {/* Matching Brand Overlay: Deep Navy (#111e25), Navy (#182831), and Brand Teal (#236b62) */}
        {/* 1. Horizontal Directional Gradient: Deep navy on left for readability, opens up on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111e25] via-[#111e25]/92 to-[#182831]/50" />
        {/* 2. Vertical Ambient Grounding Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111e25]/95 via-transparent to-[#111e25]/35" />
        {/* 3. Subtle Brand Teal Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(35,107,98,0.25),transparent_70%)] pointer-events-none" />
      </div>

      {/* Hero Foreground Content - Strictly Fixed Size & Clean Minimalist Structure */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-lime">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {slide.badge}
          </div>

          {/* Headline with Fixed Height Container to Prevent Layout Jumps */}
          <div className="mt-4 flex min-h-[105px] sm:min-h-[115px] lg:min-h-[125px] flex-col justify-center">
            <h1 className="font-display text-[clamp(2.1rem,4.2vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-white">
              {slide.headline} <br />
              <span className="text-lime">{slide.headlineAccent}</span>
            </h1>
          </div>

          {/* Description with Fixed Height Container */}
          <div className="mt-3 flex min-h-[56px] sm:min-h-[64px] items-center">
            <p className="max-w-2xl text-[14.5px] leading-relaxed text-white/80 sm:text-[16px]">
              {slide.description}
            </p>
          </div>

          {/* Minimalist Action Cluster */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={slide.primaryHref}
              className="inline-flex min-h-[44px] items-center gap-2 rounded bg-lime px-5 text-xs font-bold uppercase tracking-wider text-navy transition-all hover:bg-white hover:shadow-lg"
            >
              {slide.primaryCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={slide.secondaryHref}
              className="inline-flex min-h-[44px] items-center gap-2 rounded border border-white/25 bg-white/5 px-4 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-lime hover:bg-white/10"
            >
              <Landmark className="h-3.5 w-3.5 text-lime" />
              {slide.secondaryCta}
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex min-h-[44px] items-center gap-2 px-3 font-mono text-xs font-semibold text-white/80 transition-colors hover:text-lime"
            >
              <Phone className="h-3.5 w-3.5 text-lime" />
              {site.phone.display}
            </a>
          </div>
        </div>

        {/* Minimalist Slide Footer: Slide Counter on Left, Minimal Navigation on Right (No dividing lines) */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-2.5 font-mono text-xs text-white/50">
            <span className="font-bold text-lime">0{current + 1}</span>
            <span>/</span>
            <span>0{slides.length}</span>
            <span className="hidden sm:inline text-white/25">•</span>
            <span className="hidden sm:inline text-white/70 font-sans text-xs">{slide.badge}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Minimalist Pill Indicators */}
            <div className="flex items-center gap-1.5">
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

            {/* Subtle Navigation Chevrons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-7 w-7 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-lime hover:text-white cursor-pointer"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-7 w-7 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-lime hover:text-white cursor-pointer"
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
