"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import Logo from "./Logo";
import { mainNav, site } from "@/lib/site";

type ServiceLink = { slug: string; title: string };

export default function Header({ services }: { services: ServiceLink[] }) {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const servicesOpen = servicesPath === pathname;
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menuOpen) mobileButton.current?.focus();
      else if (servicesOpen) servicesButton.current?.focus();
      setMenuPath(null);
      setServicesPath(null);
    };
    const onOutside = (e: PointerEvent) => {
      if (servicesOpen && !servicesRef.current?.contains(e.target as Node)) {
        setServicesPath(null);
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWidth = () => {
      if (mq.matches) setMenuPath(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    mq.addEventListener("change", onWidth);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      mq.removeEventListener("change", onWidth);
    };
  }, [menuOpen, servicesOpen]);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Government Partner Information Ribbon */}
      <div className="hidden border-b border-white/10 bg-[#111e25] py-2 text-[12px] text-white/80 md:block">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-wide text-lime">
              <ShieldCheck className="h-3.5 w-3.5 text-lime" aria-hidden="true" />
              Empanelled Public Sector PR & Strategic Communications Partner
            </span>
            <span className="hidden items-center gap-2 text-white/60 lg:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              Nagpur, Maharashtra · Est. 2013
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-lime"
            >
              <Phone className="h-3 w-3 text-lime" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-lime"
            >
              <Mail className="h-3 w-3 text-lime" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-line bg-paper/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12 xl:px-16">
          <Link
            href="/"
            aria-label={`${site.shortName} home`}
            onClick={() => setMenuPath(null)}
            className="flex shrink-0 items-center gap-3 text-navy"
          >
            <Logo className="h-10 w-auto text-navy" />
            <div className="border-l-2 border-navy/20 pl-3">
              <span className="block font-display text-[19px] font-extrabold leading-[1.05] tracking-[-0.05em] text-navy">
                ICT MEDIA
              </span>
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.14em] text-teal">
                Government & Public Sector PR
              </span>
            </div>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-8">
            {mainNav.map((item) =>
              item.href !== "/services" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    pathname === item.href
                      ? "page"
                      : isActive(item.href)
                      ? "location"
                      : undefined
                  }
                  className={`relative py-3 font-mono text-[11px] font-semibold uppercase tracking-[.1em] transition-colors hover:text-teal ${
                    isActive(item.href)
                      ? "text-teal after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-teal"
                      : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.href}
                  ref={servicesRef}
                  className="relative flex items-center"
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setServicesPath(pathname);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setServicesPath(null);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                      setServicesPath(null);
                  }}
                >
                  <Link
                    href="/services"
                    aria-current={
                      pathname === "/services"
                        ? "page"
                        : isActive("/services")
                        ? "location"
                        : undefined
                    }
                    className={`relative py-3 font-mono text-[11px] font-semibold uppercase tracking-[.1em] transition-colors hover:text-teal ${
                      isActive("/services")
                        ? "text-teal after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-teal"
                        : "text-navy"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    ref={servicesButton}
                    type="button"
                    aria-label="Show services dropdown"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesPath(servicesOpen ? null : pathname)}
                    className="ml-1 flex h-8 w-5 cursor-pointer items-center justify-center text-navy"
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div
                      id="services-menu"
                      className="absolute left-0 top-full w-[440px] rounded-lg border border-line bg-paper p-3 shadow-[0_20px_50px_rgba(17,30,37,.18)]"
                    >
                      <div className="flex items-center justify-between border-b border-line px-3 pb-2.5">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[.15em] text-teal">
                          Public Sector Capabilities / 0{services.length}
                        </p>
                        <span className="font-mono text-[10px] text-navy/50">State & Civic</span>
                      </div>
                      <div className="mt-2 grid max-h-[380px] overflow-y-auto divide-y divide-line/60">
                        {services.map((service, i) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            aria-current={
                              pathname === `/services/${service.slug}` ? "page" : undefined
                            }
                            onClick={() => setServicesPath(null)}
                            className="group flex items-center justify-between px-3 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:bg-white hover:text-teal rounded-md"
                          >
                            <span className="flex items-center gap-3">
                              <span className="font-mono text-[11px] text-teal">0{i + 1}</span>
                              {service.title}
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-teal/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 border-t border-line pt-2 text-center">
                        <Link
                          href="/services"
                          onClick={() => setServicesPath(null)}
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-teal hover:underline"
                        >
                          View Full Services Architecture →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden min-h-10 items-center gap-2 rounded-full bg-[#111e25] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-teal hover:shadow md:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>

            <button
              ref={mobileButton}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuPath(menuOpen ? null : pathname)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-white text-navy lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-x-0 top-[118px] h-dvh bg-navy/60 backdrop-blur-sm"
            onClick={() => setMenuPath(null)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-[76px] max-h-[calc(100dvh-76px)] overflow-y-auto bg-paper px-6 pb-12 pt-4 shadow-2xl sm:px-8"
          >
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[.15em] text-teal">
                Government PR Navigation
              </span>
              <span className="font-mono text-[10px] text-navy/50">ICT Media Pvt. Ltd.</span>
            </div>

            <div className="mt-2 divide-y divide-line">
              {mainNav.map((item, i) => (
                <div key={item.href} className="py-2">
                  <Link
                    href={item.href}
                    onClick={() => setMenuPath(null)}
                    aria-current={
                      pathname === item.href
                        ? "page"
                        : isActive(item.href)
                        ? "location"
                        : undefined
                    }
                    className={`flex min-h-12 items-center justify-between font-display text-[22px] font-semibold tracking-[-.04em] ${
                      isActive(item.href) ? "text-teal" : "text-navy"
                    }`}
                  >
                    <span>
                      <span className="mr-4 font-mono text-[11px] tracking-normal text-teal">
                        0{i + 1}
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-teal" />
                  </Link>

                  {item.href === "/services" && (
                    <div className="my-2 grid grid-cols-1 gap-1.5 rounded-lg bg-mist/70 p-3 sm:grid-cols-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMenuPath(null)}
                          className="py-1 text-[13px] font-medium text-navy/80 hover:text-teal"
                        >
                          • {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <Link
                href="/contact?interest=government-communications"
                onClick={() => setMenuPath(null)}
                className="flex min-h-12 items-center justify-center gap-3 bg-navy px-5 text-sm font-semibold text-white"
              >
                <Landmark className="h-4 w-4 text-lime" />
                Request Proposal / RFP
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href={site.phone.href}
                className="flex min-h-11 items-center justify-center gap-2 border border-navy/20 bg-white text-sm font-semibold text-navy"
              >
                <Phone className="h-4 w-4 text-teal" />
                Call Office: {site.phone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
