"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import conclaveImg from "../../../public/images/workshop-audience.jpg";

export default function MockupHero() {
  return (
    <section className="bg-paper pt-8 sm:pt-12 lg:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8 sm:mb-10">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6f3d] mb-3">
              INFLUENCE &bull; AUDIENCE &bull; CREATIVITY
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06]">
              <span className="text-[#111e25] block">Building trust.</span>
              <span className="text-[#5c6f3d] block">Creating impact.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:text-left flex flex-col items-start lg:items-end justify-end gap-4">
            <p className="text-sm sm:text-base text-[#111e25]/75 leading-relaxed font-sans max-w-sm lg:text-right">
              Government. Brands. People. <br />
              Connected through communication.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#111e25] px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-teal hover:shadow-lg"
            >
              Explore expertise
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Hero Visual Card with Floating Lime Pill */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-3xl border border-line/60 shadow-lg">
          <Image
            src={conclaveImg}
            alt="State conclave and public sector communication forum"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Floating Lime Pill Badge on Bottom-Left */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
            <div className="inline-flex items-center rounded-full bg-[#d8ed9f] px-5 py-2 sm:px-6 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-[#111e25] shadow-lg">
              BIG IDEAS. PUBLIC PURPOSE.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
