import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { Container } from "./ui";
import { mainNav, site } from "@/lib/site";

export default function Footer() {
  return <footer className="overflow-hidden bg-navy-deep text-white">
    <Container>
      <div className="grid gap-12 border-b border-white/20 py-16 lg:grid-cols-[1.2fr_.8fr_.9fr] lg:gap-20 lg:py-20">
        <div>
          <Link href="/" aria-label="ICT Media home" className="inline-flex items-center gap-3"><Logo className="h-12 w-auto text-lime" /><span className="font-display text-xl font-bold tracking-[-.05em]">ICT MEDIA</span></Link>
          <p className="mt-6 max-w-xs text-[15px] leading-7 text-white/60">{site.tagline}.<br />{site.expansion}.</p>
          <span className="mt-8 block font-mono text-[11px] uppercase tracking-[.15em] text-lime">Communication for public impact.</span>
        </div>
        <nav aria-label="Footer navigation"><h2 className="font-mono text-[11px] font-semibold uppercase tracking-[.15em] text-lime">Navigate</h2><ul className="mt-5 grid gap-3">{mainNav.filter(l=>l.href !== "/").map(item => <li key={item.href}><Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">{item.label}</Link></li>)}<li><Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-white">Contact</Link></li></ul></nav>
        <div><h2 className="font-mono text-[11px] font-semibold uppercase tracking-[.15em] text-lime">Get in touch</h2><a href={`mailto:${site.email}`} className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-lime">{site.email}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><a href={site.phone.href} className="mt-3 block text-sm text-white/70 hover:text-white">{site.phone.display}</a><address className="mt-7 text-sm not-italic leading-6 text-white/55">{site.addressLines.map((line,i)=><span className="block" key={i}>{line}</span>)}</address></div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 py-7 font-mono text-[11px] text-white/45"><span>© {new Date().getFullYear()} {site.name}</span><span>Built for clarity. Designed for impact.</span></div>
      <div aria-hidden="true" className="pointer-events-none -mb-6 select-none whitespace-nowrap font-display text-[clamp(5rem,17vw,17rem)] font-extrabold leading-[.85] tracking-[-.09em] text-white/[.045]">ICT MEDIA</div>
    </Container>
  </footer>;
}
