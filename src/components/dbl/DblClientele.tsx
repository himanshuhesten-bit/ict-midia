import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";

export default function DblClientele() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-line" id="clientele">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-teal">
            <ShieldCheck className="h-3.5 w-3.5" />
            Institutional Empanelment
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy">
            OUR <span className="text-teal">CLIENTELE</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-navy/70">
            Empanelled PR & Strategic Communication Partner to Maharashtra Government Departments, Municipal Corporations, and State PSUs.
          </p>
        </div>

        {/* The Animated Infinite Marquee Logo Carousel */}
        <ClientLogoCarousel limit={23} />

        <div className="mt-8 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal hover:underline"
          >
            Review All 23 Government Partnerships & Case Studies
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
