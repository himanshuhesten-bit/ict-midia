import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck } from "lucide-react";
import prBriefingImg from "../../../public/images/hero/gov-pr-briefing.jpg";

export default function DblWhoWeAre() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-paper" id="who-we-are">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Government Photography with Floating DBL-Style Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden rounded-2xl border border-line shadow-lg">
              <Image
                src={prBriefingImg}
                alt="ICT Media official government press conference and media briefing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            </div>

            {/* Floating Experience Badge (DBL Signature Element) */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 rounded-xl border border-line bg-white p-4 sm:p-5 shadow-xl max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal text-white">
                  <Landmark className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-2xl font-black text-navy leading-none">13+ Years</div>
                  <div className="text-[11px] font-bold text-teal uppercase tracking-wide mt-1">
                    Public Sector PR
                  </div>
                  <div className="text-[10px] text-navy/60">Founded 2013 in Nagpur</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Introduction & Value Pillars */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-teal">
              Who We Are
            </div>

            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy leading-tight">
              Architecting Public Authority & Enduring Citizen Trust.
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-navy/70">
              Maharashtra’s empanelled communications and PR practice—translating government policy, ministerial briefings, and state conclaves into transparent public understanding since 2013.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-line bg-white p-3.5 shadow-2xs">
                <div className="font-mono text-xs font-bold text-teal">01 / IN-HOUSE</div>
                <div className="font-display text-sm font-bold text-navy mt-1">100% Team Control</div>
                <div className="text-[11px] text-navy/60 mt-0.5">Zero subcontracting</div>
              </div>

              <div className="rounded-xl border border-line bg-white p-3.5 shadow-2xs">
                <div className="font-mono text-xs font-bold text-teal">02 / PROTOCOL</div>
                <div className="font-display text-sm font-bold text-navy mt-1">Zero-Defect Dais</div>
                <div className="text-[11px] text-navy/60 mt-0.5">VVIP & gazette fidelity</div>
              </div>

              <div className="rounded-xl border border-line bg-white p-3.5 shadow-2xs">
                <div className="font-mono text-xs font-bold text-teal">03 / NETWORK</div>
                <div className="font-display text-sm font-bold text-navy mt-1">36 Districts</div>
                <div className="text-[11px] text-navy/60 mt-0.5">Pan-state press bureaus</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex min-h-[42px] items-center gap-2 rounded bg-navy px-5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-teal hover:shadow-md"
              >
                Corporate Profile
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/clients"
                className="inline-flex min-h-[42px] items-center gap-2 rounded border border-line bg-white px-4 text-xs font-semibold uppercase tracking-wider text-navy transition-all hover:border-teal hover:text-teal"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-teal" />
                Empanelled Bodies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
