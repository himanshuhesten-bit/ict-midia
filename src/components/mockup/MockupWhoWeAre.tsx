import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MockupWhoWeAre() {
  return (
    <section className="bg-paper py-14 sm:py-20 border-b border-line" id="who-we-are">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6f3d] mb-3">
              WHO WE ARE
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111e25] leading-[1.1]">
              Your purpose. <br />
              Our creative force.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end gap-4">
            <p className="text-base sm:text-lg text-[#111e25]/75 leading-relaxed font-sans max-w-md lg:text-right">
              Public-sector understanding. <br />
              Creative thinking. Clear communication.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111e25] hover:text-[#5c6f3d] transition-colors"
            >
              About ICT Media
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
