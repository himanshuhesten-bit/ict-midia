"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { mainNav, site } from "@/lib/site";

type ServiceLink = { slug: string; title: string };

export default function Header({ services }: { services: ServiceLink[] }) {
  const pathname = usePathname();
  // A menu opened on one path closes automatically when the route changes.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const servicesOpen = servicesPath === pathname;
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menuOpen) mobileButton.current?.focus(); else if (servicesOpen) servicesButton.current?.focus();
      setMenuPath(null); setServicesPath(null);
    };
    const onOutside = (e: PointerEvent) => {
      if (servicesOpen && !servicesRef.current?.contains(e.target as Node)) setServicesPath(null);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWidth = () => { if (mq.matches) setMenuPath(null); };
    document.addEventListener("keydown", onKey); document.addEventListener("pointerdown", onOutside); mq.addEventListener("change", onWidth);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onOutside); mq.removeEventListener("change", onWidth); };
  }, [menuOpen, servicesOpen]);

  return <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12 xl:px-16">
      <Link href="/" aria-label={`${site.shortName} home`} onClick={() => setMenuPath(null)} className="flex shrink-0 items-center gap-2.5 text-navy">
        <Logo className="h-10 w-auto text-navy" />
        <span className="border-l border-navy/20 pl-3 font-display text-[17px] font-extrabold leading-[1.1] tracking-[-.07em]">ICT<br /><span className="font-semibold tracking-[-.045em]">MEDIA</span></span>
      </Link>
      <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-9">
        {mainNav.map(item => item.href !== "/services" ? <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : isActive(item.href) ? "location" : undefined} className={`relative py-3 font-mono text-[11px] font-semibold uppercase tracking-[.1em] transition-colors hover:text-teal ${isActive(item.href) ? "text-teal after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-teal" : "text-navy"}`}>{item.label}</Link> :
          <div key={item.href} ref={servicesRef} className="relative flex items-center" onPointerEnter={e => { if(e.pointerType === "mouse") setServicesPath(pathname); }} onPointerLeave={e => { if(e.pointerType === "mouse") setServicesPath(null); }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesPath(null); }}>
            <Link href="/services" aria-current={pathname === "/services" ? "page" : isActive("/services") ? "location" : undefined} className={`relative py-3 font-mono text-[11px] font-semibold uppercase tracking-[.1em] transition-colors hover:text-teal ${isActive("/services") ? "text-teal after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-teal" : "text-navy"}`}>Services</Link>
            <button ref={servicesButton} type="button" aria-label="Show services" aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesPath(servicesOpen ? null : pathname)} className="ml-1 flex h-8 w-5 cursor-pointer items-center justify-center text-navy"><ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} /></button>
            {servicesOpen && <div id="services-menu" className="absolute left-0 top-full w-[380px] border border-line bg-paper p-2 shadow-[0_20px_50px_rgba(17,30,37,.14)]">
              <p className="border-b border-line px-3 py-3 font-mono text-[10px] uppercase tracking-[.15em] text-teal">Explore our work / 06</p>
              {services.map((service, i) => <Link key={service.slug} href={`/services/${service.slug}`} aria-current={pathname === `/services/${service.slug}` ? "page" : undefined} onClick={() => setServicesPath(null)} className="group flex items-center justify-between border-b border-line/60 px-3 py-3 text-sm font-semibold text-navy transition-colors last:border-0 hover:bg-mint-soft"><span><span className="mr-4 font-mono text-[11px] text-teal">0{i+1}</span>{service.title}</span><ArrowUpRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>)}
            </div>}
          </div>)}
      </nav>
      <div className="flex items-center gap-2.5">
        <Link href="/contact" className="hidden min-h-11 items-center gap-4 bg-navy px-5 text-[13px] font-semibold text-white transition-colors hover:bg-teal sm:inline-flex">Let&apos;s talk <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        <button ref={mobileButton} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuPath(menuOpen ? null : pathname)} className="flex h-11 w-11 cursor-pointer items-center justify-center border border-line text-navy lg:hidden">{menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}</button>
      </div>
    </div>
    {menuOpen && <div className="lg:hidden"><div className="fixed inset-x-0 top-[76px] h-dvh bg-navy/55" onClick={() => setMenuPath(null)} aria-hidden="true" /><nav id="mobile-menu" aria-label="Mobile" className="absolute inset-x-0 top-[76px] max-h-[calc(100dvh-76px)] overflow-y-auto bg-paper px-5 pb-8 shadow-xl sm:px-8">
      <p className="border-b border-line py-5 font-mono text-[11px] uppercase tracking-[.15em] text-teal">Navigation / ICT Media</p>
      {mainNav.map((item, i) => <div key={item.href} className="border-b border-line"><Link href={item.href} onClick={() => setMenuPath(null)} aria-current={pathname === item.href ? "page" : isActive(item.href) ? "location" : undefined} className={`flex min-h-16 items-center justify-between font-display text-[26px] font-semibold tracking-[-.04em] ${isActive(item.href) ? "text-teal" : "text-navy"}`}><span><span className="mr-5 font-mono text-[11px] tracking-normal text-teal">0{i+1}</span>{item.label}</span><ArrowUpRight aria-hidden="true" className="h-5 w-5" /></Link>{item.href === "/services" && <div className="mb-4 grid grid-cols-2 gap-2 pl-9">{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setMenuPath(null)} className="py-1.5 text-[13px] text-navy/70 hover:text-teal">{service.title}</Link>)}</div>}</div>)}
      <Link href="/contact" onClick={() => setMenuPath(null)} className="mt-6 flex min-h-12 items-center justify-between bg-navy px-5 text-sm font-semibold text-white">Start a conversation <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
    </nav></div>}
  </header>;
}
