import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export default function MockupImpactCta() {
  return (
    <section className="bg-[#d8ed9f] text-[#111e25] py-16 sm:py-20 lg:py-24" id="contact-impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#111e25]/75 mb-3">
              HAVE A COMMUNICATION CHALLENGE?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111e25] leading-[1.05]">
              Let’s make <br />
              an impact.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#111e25] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-teal hover:shadow-lg"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="flex flex-col items-start lg:items-end text-xs sm:text-sm font-mono text-[#111e25]/85 space-y-1">
              <a href={`mailto:${site.email}`} className="hover:text-black transition-colors font-semibold">
                {site.email}
              </a>
              <a href={site.phone.href} className="hover:text-black transition-colors font-semibold">
                {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
