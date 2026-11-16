"use client";

import Link from "next/link";
import { ArrowRight, Languages, Newspaper, ShieldCheck } from "lucide-react";

interface ChooseCard {
  id: string;
  icon: typeof Newspaper;
  title: string;
  accentTitle: string;
  description: string;
  href: string;
  cta: string;
}

const chooseCards: ChooseCard[] = [
  {
    id: "comprehensive-pr",
    icon: Newspaper,
    title: "Comprehensive ",
    accentTitle: "Government PR",
    description:
      "ICT Media crafts an orchestrated framework of public sector communications—harmonizing ministerial press briefings, accredited bureau relations, crisis rebuttals, and narrative architecture across all 36 Maharashtra districts.",
    href: "/services/public-relations",
    cta: "Explore PR Practice",
  },
  {
    id: "protocol-fidelity",
    icon: ShieldCheck,
    title: "100% Protocol & ",
    accentTitle: "Dais Fidelity",
    description:
      "At ICT Media, administrative protocol is our driving standard—ensuring zero-defect ministerial liaison, security coordination, 4K broadcast staging, and gazette compliance for high-profile state conclaves.",
    href: "/services/government-events",
    cta: "Review Conclave Work",
  },
  {
    id: "multilingual-outreach",
    icon: Languages,
    title: "Unmatched ",
    accentTitle: "Multilingual Impact",
    description:
      "Our unwavering commitment to citizen nuance translates complex administrative policies, welfare gazettes, and civic directives into clear, compelling narratives in Marathi, Hindi, and English for grassroots citizens.",
    href: "/government-pr",
    cta: "View Citizen PR Framework",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-paper" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading Styled Exactly like Vidarbha Infotech .choose-wrapper */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal">
            Institutional Distinction
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#182831] sm:text-4xl lg:text-[42px] uppercase">
            WHY <span className="text-teal">CHOOSE US</span>
          </h2>
          <p className="mt-3 text-sm text-[#182831]/75 sm:text-base leading-relaxed">
            ICT Media delivers authoritative communication solutions that empower government institutions to build enduring citizen trust and public authority.
          </p>
        </div>

        {/* 3 Interactive Choose Cards with Vidarbha Infotech Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {chooseCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/50 hover:bg-[#111e25] hover:shadow-2xl cursor-default"
              >
                <div>
                  {/* Icon Container with Smooth Hover Transition */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-all duration-300 group-hover:bg-lime group-hover:text-[#111e25] group-hover:scale-110 shadow-sm">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>

                  {/* Title with Hover Color Switch */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-[#182831] transition-colors duration-300 group-hover:text-white">
                    {card.title}
                    <span className="text-teal transition-colors duration-300 group-hover:text-lime">
                      {card.accentTitle}
                    </span>
                  </h3>

                  {/* Content Paragraph */}
                  <p className="mt-3.5 text-sm leading-relaxed text-[#182831]/70 transition-colors duration-300 group-hover:text-white/80">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Link CTA */}
                <div className="mt-6 pt-5 border-t border-line/60 transition-colors duration-300 group-hover:border-white/10">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal transition-colors duration-300 group-hover:text-lime"
                  >
                    {card.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
