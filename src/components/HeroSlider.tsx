"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Languages,
  Megaphone,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";
import heroBanner from "../../public/images/banner-img/hero-img.jpg";
import eventsImage from "../../public/images/workshop-audience.jpg";
import communityImage from "../../public/images/community.jpg";
import mediaImage from "../../public/images/media-coverage.jpg";
import { site } from "@/lib/site";

interface HeroSlide {
  id: string;
  badge: string;
  icon: typeof Landmark;
  title: string;
  titleHighlight: string;
  description: string;
  primaryHref: string;
  primaryText: string;
  secondaryHref: string;
  secondaryText: string;
  image: typeof heroBanner;
  imageAlt: string;
  statLabel: string;
  statValue: string;
  captionTag: string;
}

const slides: HeroSlide[] = [
  {
    id: "policy-people",
    badge: "Empanelled Government PR Practice",
    icon: Landmark,
    title: "Where policy",
    titleHighlight: "meets people.",
    description:
      "Empanelled and trusted by Maharashtra State Departments, Municipal Corporations, and Public Institutions since 2013 to shape credible public narratives, citizen engagement, and transparent policy outreach.",
    primaryHref: "/services",
    primaryText: "Explore Capabilities",
    secondaryHref: "/contact?interest=government-communications",
    secondaryText: "Request Proposal (RFP)",
    image: heroBanner,
    imageAlt: "ICT Media state communications briefing in Maharashtra",
    statLabel: "Government Bodies Served",
    statValue: "50+ Bodies",
    captionTag: "EST. 2013 · NAGPUR HQ",
  },
  {
    id: "state-conclaves",
    badge: "VIP Protocol & State Ceremonies",
    icon: CalendarCheck,
    title: "Turnkey state events &",
    titleHighlight: "conclaves.",
    description:
      "Zero-defect dais protocol, ministerial security liaison, broadcast-grade 4K LED video walls, and accredited press centers for high-profile government summits and inaugurations.",
    primaryHref: "/services/government-events",
    primaryText: "Event Management PR",
    secondaryHref: "/clients#case-studies",
    secondaryText: "Review Assignments",
    image: eventsImage,
    imageAlt: "Audience and state dignitaries at official conclave",
    statLabel: "VIP Conclaves Delivered",
    statValue: "100+ Events",
    captionTag: "ZERO-DEFECT PROTOCOL",
  },
  {
    id: "multilingual-outreach",
    badge: "Grassroots Citizen Engagement",
    icon: Languages,
    title: "Connecting policy to",
    titleHighlight: "grassroots citizens.",
    description:
      "Translating complex welfare schemes, gazette directives, and civic masterplans into clear, culturally attuned narratives across Marathi, Hindi, and English for all 36 Maharashtra districts.",
    primaryHref: "/government-pr",
    primaryText: "Citizen PR Framework",
    secondaryHref: "/clients",
    secondaryText: "View Case Studies",
    image: communityImage,
    imageAlt: "Community dialogue and citizen participation in Maharashtra",
    statLabel: "Multilingual Coverage",
    statValue: "36 Districts",
    captionTag: "मराठी · हिंदी · ENGLISH",
  },
  {
    id: "crisis-pr",
    badge: "24/7 Media Intelligence",
    icon: ShieldAlert,
    title: "Protecting institutional",
    titleHighlight: "credibility.",
    description:
      "Round-the-clock media and digital monitoring to immediately detect distorted reporting, clarify administrative facts, and deploy verified official rebuttals in real time.",
    primaryHref: "/services/public-relations",
    primaryText: "Crisis PR Mitigation",
    secondaryHref: "/contact",
    secondaryText: "Contact Liaison Desk",
    image: mediaImage,
    imageAlt: "Press conference microphones and media broadcast desk",
    statLabel: "Rapid Response Window",
    statValue: "24/7 Monitoring",
    captionTag: "INSTITUTIONAL TRUST",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, current]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Left Column: Animated Text Content */}
        <div className="flex flex-col justify-center">
          {/* Interactive Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded border border-teal/25 bg-mint-soft px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-teal">
              <Icon className="h-3.5 w-3.5 text-teal" />
              {slide.badge}
            </span>
            <span className="font-mono text-[11px] text-navy/50">
              0{current + 1} / 0{slides.length}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 font-display text-[clamp(2.4rem,4.4vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-.055em] text-navy min-h-[110px] sm:min-h-[135px]">
            {slide.title} <br className="hidden sm:inline" />
            <span className="text-teal transition-colors duration-300">
              {slide.titleHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-navy/75 sm:text-[15.5px] min-h-[72px]">
            {slide.description}
          </p>

          {/* Interactive CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={slide.primaryHref}
              className="inline-flex min-h-[44px] items-center gap-2 bg-navy px-5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-teal shadow-sm"
            >
              {slide.primaryText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={slide.secondaryHref}
              className="inline-flex min-h-[44px] items-center gap-2 border border-line bg-white px-5 text-xs font-semibold uppercase tracking-wider text-navy transition-all hover:border-teal hover:bg-mist/50"
            >
              <Landmark className="h-3.5 w-3.5 text-teal" />
              {slide.secondaryText}
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex min-h-[44px] items-center gap-1.5 px-3 font-mono text-xs font-semibold text-navy/80 hover:text-teal"
            >
              <Phone className="h-3.5 w-3.5 text-teal" />
              {site.phone.display}
            </a>
          </div>

          {/* Slider Interactive Navigation Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-4">
            {/* Interactive Progress Tabs / Dots */}
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`group relative h-2.5 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-8 bg-teal"
                      : "w-2.5 bg-line hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center rounded border border-line bg-white text-navy transition-colors hover:border-teal hover:text-teal"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center rounded border border-line bg-white text-navy transition-colors hover:border-teal hover:text-teal"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Media with Floating Interactive Badge */}
        <div className="relative">
          <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line bg-mist shadow-xl">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-lime">
                    {slide.captionTag}
                  </span>
                  <p className="mt-0.5 font-display text-sm font-bold">
                    {slide.badge}
                  </p>
                </div>
                <div className="text-right">
                  <span className="block font-display text-base font-extrabold text-lime">
                    {slide.statValue}
                  </span>
                  <span className="block font-mono text-[9px] text-white/70">
                    {slide.statLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Interactive Metric Badge */}
          <div className="absolute -left-4 -top-4 hidden rounded-lg border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex sm:items-center sm:gap-2.5 animate-float">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-teal/10 text-teal">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-navy">
                GIGW & Protocol Compliant
              </p>
              <p className="font-mono text-[9.5px] text-navy/60">
                Maharashtra State Empanelled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
