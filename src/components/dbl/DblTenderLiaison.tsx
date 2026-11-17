import Link from "next/link";
import { ArrowRight, FileText, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export default function DblTenderLiaison() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-paper" id="tender-desk">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#111e25] via-[#182831] to-[#111e25] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Briefing & Official Hotline */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-lime">
                <ShieldCheck className="h-3.5 w-3.5" />
                Government Tender & Empanelment Desk
              </div>

              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to structure your department’s communication brief?
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 max-w-xl">
                Connect with ICT Media’s institutional liaison team for project empanelment, tenders, turnkey conclaves, or ministerial media campaigns across Maharashtra.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?interest=government-communications"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded bg-lime px-6 text-xs font-bold uppercase tracking-wider text-navy transition-all hover:bg-white hover:shadow-lg"
                >
                  Initiate Consultation (RFP)
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded border border-white/20 bg-white/5 px-5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-lime hover:bg-white/10"
                >
                  <Phone className="h-3.5 w-3.5 text-lime" />
                  {site.phone.display}
                </a>
              </div>
            </div>

            {/* Right Column: Institutional Coordinates */}
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-md">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-lime">
                Official Liaison Desks
              </h3>

              <div className="mt-4 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  <div>
                    <div className="font-bold text-white">Central Operations Headquarters</div>
                    <div className="text-white/70">{site.fullAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  <div>
                    <div className="font-bold text-white">State Secretariat Liaison</div>
                    <div className="text-white/70">Mumbai Desk &bull; Mantralaya Coordination</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  <div>
                    <div className="font-bold text-white">Official Correspondence Email</div>
                    <a href={`mailto:${site.email}`} className="text-white/70 hover:text-lime transition-colors">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  <div>
                    <div className="font-bold text-white">Vendor Empanelment Status</div>
                    <div className="text-white/70">Maharashtra State Empanelled Partner (Active)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
