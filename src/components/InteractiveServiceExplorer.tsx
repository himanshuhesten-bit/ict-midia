"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, stages, serviceNumber } from "@/lib/services";

export default function InteractiveServiceExplorer() {
  const [activeSlug, setActiveSlug] = useState<string>(services[0].slug);

  const activeIndex = services.findIndex((s) => s.slug === activeSlug);
  const activeService = services[activeIndex >= 0 ? activeIndex : 0];
  const ActiveIcon = activeService.icon;

  return (
    <div className="w-full">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 items-stretch">
        {/* Left: Interactive Navigation List */}
        <div className="flex flex-col gap-1.5 max-h-[460px] overflow-y-auto pr-1">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = service.slug === activeService.slug;
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setActiveSlug(service.slug)}
                onMouseEnter={() => setActiveSlug(service.slug)}
                className={`group flex items-center justify-between rounded-lg px-4 py-2.5 text-left transition-all ${
                  isSelected
                    ? "bg-navy text-white shadow-sm ring-1 ring-navy"
                    : "border border-line/60 bg-white text-navy hover:border-teal/40 hover:bg-mist/40"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? "text-lime" : "text-teal"
                    }`}
                  >
                    {serviceNumber(idx)}
                  </span>
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isSelected ? "text-lime" : "text-teal"
                    }`}
                  />
                  <span className="truncate text-[13.5px] font-bold">
                    {service.title}
                  </span>
                </div>

                <span
                  className={`font-mono text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected
                      ? "bg-white/10 text-lime"
                      : "bg-paper text-navy/50"
                  }`}
                >
                  {stages[service.stage].label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Active Service Live Interactive Detail Panel */}
        <div className="flex flex-col justify-between rounded-xl border border-line bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-xs font-bold text-teal">
                SERVICE {serviceNumber(activeIndex)} · {stages[activeService.stage].label.toUpperCase()}
              </span>
              <span className="rounded bg-mint-soft px-2.5 py-0.5 font-mono text-[10px] font-semibold text-teal">
                Active Protocol
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <ActiveIcon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">
                {activeService.title}
              </h3>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-navy/75">
              {activeService.lead}
            </p>

            <div className="relative mt-4 aspect-[16/7] overflow-hidden rounded-lg bg-mist">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                style={{ objectPosition: activeService.imagePosition }}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Deliverables Checklist */}
            <div className="mt-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-teal font-semibold">
                Core Deliverables
              </span>
              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {activeService.deliverables.slice(0, 4).map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-1.5 text-[11.5px] text-navy/80"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal" />
                    <span className="truncate">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-line pt-3 flex items-center justify-between">
            <Link
              href={`/services/${activeService.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal hover:underline"
            >
              Full Service Specifications
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={`/contact?interest=${activeService.slug}`}
              className="font-mono text-xs text-navy/60 hover:text-navy underline"
            >
              Inquire Brief →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

