import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import govBldgImg from "../../../public/images/governance-building.jpg";
import eventsImg from "../../../public/images/workshop-audience.jpg";
import communityImg from "../../../public/images/community.jpg";
import itImg from "../../../public/images/services/it-solutions.jpg";

export default function MockupBentoGrid() {
  return (
    <section className="bg-paper py-14 sm:py-20 border-b border-line" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6f3d] mb-2">
            OUR EXPERTISE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111e25]">
            Less noise. More connection.
          </h2>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ===================== LEFT COLUMN ===================== */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 1: Tall Architecture Card with Floating Dark Overlay */}
            <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden rounded-3xl border border-line shadow-sm group">
              <Image
                src={govBldgImg}
                alt="Government communications and public sector administration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111e25]/60 via-transparent to-transparent" />

              {/* Overlaid Dark Navy Box on Bottom */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <Link
                  href="/government-pr"
                  className="block rounded-2xl bg-[#111e25]/95 p-5 sm:p-6 text-white backdrop-blur-md transition-all hover:bg-[#111e25] hover:shadow-xl"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-lime/80 block mb-1">
                    01 / PUBLIC SECTOR PR
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      Government communications
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-lime shrink-0" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Card 2: Deep Navy Card (04 / PUBLIC AFFAIRS) */}
            <div className="rounded-3xl bg-[#111e25] p-7 sm:p-9 text-white shadow-sm flex flex-col justify-between min-h-[200px]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-lime/80 block mb-2">
                  04 / PUBLIC AFFAIRS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Reputation. <br />
                  Built right.
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs sm:text-sm text-white/70 font-sans">
                  Media relations &bull; Crisis management &bull; Policy briefs
                </p>
                <Link
                  href="/services/public-relations"
                  className="p-1 text-lime hover:text-white transition-colors"
                  aria-label="View Public Affairs"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ===================== RIGHT COLUMN ===================== */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 3: Events & Experiences (Stage/Auditorium) */}
            <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden rounded-3xl border border-line shadow-sm group">
              <Image
                src={eventsImg}
                alt="Events and conclave experiences"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111e25]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <Link
                  href="/services/government-events"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111e25]/90 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-[#111e25] hover:text-lime"
                >
                  Events & experiences
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Middle Row: 2 Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 4a: Lime Card (02 / BRAND IDENTITY) */}
              <div className="rounded-3xl bg-[#d8ed9f] p-6 sm:p-7 text-[#111e25] shadow-sm flex flex-col justify-between min-h-[190px]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111e25]/70 block mb-1.5">
                    02 / BRAND IDENTITY
                  </span>
                  <h3 className="font-display text-2xl font-black text-[#111e25] leading-tight">
                    Stand <br />
                    apart.
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#111e25]/15 flex items-center justify-between text-xs font-medium text-[#111e25]/80">
                  <span>Branding &bull; Design &bull; Film</span>
                  <Link href="/services/creative-services" aria-label="Brand identity">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Card 4b: Scenic/Nature Card (Content & production) */}
              <div className="relative h-[190px] w-full overflow-hidden rounded-3xl border border-line shadow-sm group">
                <Image
                  src={communityImg}
                  alt="Content & production"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111e25]/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <Link
                    href="/services/publications"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111e25]/90 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur-md transition-all hover:bg-[#111e25] hover:text-lime"
                  >
                    Content & production
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5: Team at Laptops (Digital & IT solutions) */}
            <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden rounded-3xl border border-line shadow-sm group">
              <Image
                src={itImg}
                alt="Digital and IT solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111e25]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <Link
                  href="/services/digital-pr"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111e25]/90 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-[#111e25] hover:text-lime"
                >
                  Digital & IT solutions
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
