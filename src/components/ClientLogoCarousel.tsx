"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Grid } from "lucide-react";
import { clients } from "@/lib/clients";

export default function ClientLogoCarousel({ limit = 23 }: { limit?: number }) {
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");

  // Duplicate list for seamless infinite loop
  const marqueeList = [...clients, ...clients];

  return (
    <div className="w-full">
      {/* Mode Switcher Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
          Empanelled Government & Civic Partners (23)
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === "marquee" ? "grid" : "marquee")}
            className="inline-flex items-center gap-1.5 rounded border border-line bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-navy/70 transition-colors hover:border-teal hover:text-teal"
          >
            {viewMode === "marquee" ? (
              <>
                <Grid className="h-3 w-3" /> View Grid
              </>
            ) : (
              <>
                <Play className="h-3 w-3" /> Auto Marquee
              </>
            )}
          </button>
          <Link
            href="/clients"
            className="hidden font-mono text-[11px] font-semibold text-teal hover:underline sm:inline"
          >
            All Case Studies →
          </Link>
        </div>
      </div>

      {viewMode === "marquee" ? (
        /* Animated Infinite Marquee Carousel */
        <div className="relative overflow-hidden rounded-xl border border-line bg-white py-3 shadow-xs">
          {/* Subtle gradient fades on left & right edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="animate-marquee gap-4 items-center">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                title={`${client.name} — ${client.full}`}
                className="group flex h-16 w-36 shrink-0 items-center justify-center rounded-lg border border-line/60 bg-paper/50 px-3 transition-all hover:border-teal/50 hover:bg-white hover:shadow-sm"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={110}
                  height={45}
                  className="max-h-9 w-auto object-contain filter grayscale opacity-75 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Interactive Grid Mode */
        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6">
          {clients.slice(0, limit).map((client) => (
            <div
              key={client.id}
              title={`${client.name} — ${client.full}`}
              className="group flex h-16 items-center justify-center rounded-lg border border-line bg-white p-2.5 transition-colors hover:border-teal/50 hover:bg-mist/30"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={110}
                height={45}
                className="max-h-9 w-auto object-contain filter grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      <p className="mt-2 text-right font-mono text-[10px] text-navy/40">
        Hover on carousel to pause · Click any department on{" "}
        <Link href="/clients" className="text-teal underline">
          Clients Page
        </Link>
      </p>
    </div>
  );
}
