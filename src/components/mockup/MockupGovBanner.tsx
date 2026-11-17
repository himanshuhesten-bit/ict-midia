import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import bldgImg from "../../../public/images/governance-building.jpg";

export default function MockupGovBanner() {
  return (
    <section className="bg-[#111e25] text-white py-14 sm:py-20 lg:py-24" id="government-communications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Architecture Image with Rounded Corners */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={bldgImg}
                alt="Government infrastructure and institutional administration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111e25]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: High-Impact Typography & Action */}
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-lime/90 mb-4">
              GOVERNMENT COMMUNICATIONS
            </p>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Policy. <br />
              People. <br />
              Possibility.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              Inform clearly. Engage respectfully.
            </p>

            <div className="mt-8">
              <Link
                href="/government-pr"
                className="inline-flex items-center gap-2 rounded-full bg-[#d8ed9f] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#111e25] transition-all hover:bg-white hover:shadow-lg"
              >
                Explore government PR
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
