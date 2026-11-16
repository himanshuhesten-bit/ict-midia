import Link from "next/link";
import { ArrowUpRight, Landmark, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { Container } from "./ui";
import { mainNav, site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0d161c] text-white">
      {/* Pre-footer Institutional Credibility Banner */}
      <div className="border-b border-white/10 bg-[#111e25] py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                <Landmark className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Strategic Communication for Government & Public Sector
                </h3>
                <p className="text-sm text-white/60">
                  Empanelled agency serving Maharashtra state ministries, municipal bodies, and PSUs since 2013.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?interest=government-communications"
                className="inline-flex min-h-11 items-center gap-2 bg-lime px-6 text-sm font-bold text-navy transition-colors hover:bg-white"
              >
                Request Official Proposal
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phone.href}
                className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-lime hover:text-lime"
              >
                <Phone className="h-4 w-4 text-lime" />
                {site.phone.display}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid gap-12 border-b border-white/15 py-16 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:gap-14 lg:py-20">
          <div>
            <Link href="/" aria-label="ICT Media home" className="inline-flex items-center gap-3">
              <Logo className="h-11 w-auto text-lime" />
              <div className="border-l border-white/20 pl-3">
                <span className="block font-display text-xl font-extrabold tracking-[-.05em] text-white">
                  ICT MEDIA
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[.15em] text-lime">
                  Pvt. Ltd. · Nagpur
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              {site.expansion}. Innovating communication frameworks to connect public policy with citizen understanding across Maharashtra.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-lime">
              <ShieldCheck className="h-4 w-4" />
              <span>GIGW & Official Protocol Adherence</span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[.15em] text-lime">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[.15em] text-lime">
              Core Capabilities
            </h2>
            <ul className="mt-5 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs text-white/70 transition-colors hover:text-lime"
                  >
                    • {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[.15em] text-lime">
              Government Liaison Desk
            </h2>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-[14px] font-semibold text-white hover:text-lime"
              >
                <Mail className="h-4 w-4 text-lime" />
                {site.email}
              </a>
              <a
                href={site.phone.href}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Phone className="h-4 w-4 text-lime" />
                {site.phone.display}
              </a>
              <div className="flex items-start gap-2 pt-2 text-xs leading-relaxed text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-teal" />
                <address className="not-italic">
                  {site.fullAddress}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-8 font-mono text-[11px] text-white/50">
          <span>© {new Date().getFullYear()} {site.name} · All rights reserved.</span>
          <span>Government & Public Sector Strategic Communications Practice</span>
        </div>
      </Container>
    </footer>
  );
}
