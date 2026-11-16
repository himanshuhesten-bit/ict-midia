import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { Container, Eyebrow, text } from "@/components/ui";
import { interestGroups, interestTitle } from "@/lib/interests";
import { site } from "@/lib/site";

export const metadata: Metadata = {title:"Contact",description:"Contact ICT Media in Nagpur for public relations, government communication, digital PR and more."};

export default async function ContactPage({searchParams}:{searchParams:Promise<{interest?:string|string[]}>}) {
  const {interest}=await searchParams;
  const defaultInterest=interestTitle(Array.isArray(interest)?interest[0]:interest);
  const groups=interestGroups.map(g=>({label:g.label,options:g.options.map(o=>o.title)}));
  return <>
    <PageHero crumbs={[{label:"Contact"}]} eyebrow="Government Liaison Desk" title="Good public work starts with a clear brief." description="Connect with our institutional communications team for department briefs, state conclaves, or media campaigns." icon={MessageCircle} index="05 / CONTACT" />
    <section className="bg-white py-10 lg:py-14"><Container className="grid gap-10 lg:grid-cols-[.76fr_1.24fr] lg:gap-16"><div><Eyebrow>Reach us directly</Eyebrow><h2 className={`mt-4 text-navy ${text.h2}`}>Official Liaison.</h2><div className="mt-6 border-t border-navy"><a href={site.phone.href} className="group flex items-center gap-4 border-b border-line py-4"><Phone className="h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="min-w-0 flex-1"><span className="block font-mono text-[10px] uppercase tracking-[.12em] text-teal">Direct Line</span><span className="mt-0.5 block font-display text-[16px] font-semibold text-navy">{site.phone.display}</span></span><ArrowUpRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" aria-hidden="true"/></a><a href={`mailto:${site.email}`} className="group flex items-center gap-4 border-b border-line py-4"><Mail className="h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="min-w-0 flex-1"><span className="block font-mono text-[10px] uppercase tracking-[.12em] text-teal">Official Email</span><span className="mt-0.5 block break-words font-display text-[15px] font-semibold text-navy">{site.email}</span></span><ArrowUpRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" aria-hidden="true"/></a><a href={site.mapUrl} target="_blank" rel="noreferrer" className="group flex items-start gap-4 border-b border-line py-4"><MapPin className="mt-1 h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="min-w-0 flex-1"><span className="block font-mono text-[10px] uppercase tracking-[.12em] text-teal">Head Office / Nagpur</span><span className="mt-0.5 block font-display text-[14px] font-medium leading-relaxed text-navy">{site.addressLines.map((line,i)=><span key={i} className="block">{line}</span>)}</span><span className="mt-1 block text-[11px] text-teal">Open in Google Maps ↗</span></span></a></div><div className="mt-6 border-l-2 border-teal pl-4"><p className="font-display text-sm font-medium leading-relaxed text-navy">Value Your Brand,<br />Brand Your Values.</p></div></div><ContactForm groups={groups} defaultInterest={defaultInterest}/></Container></section>
  </>;
}
