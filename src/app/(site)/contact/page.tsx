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
    <PageHero crumbs={[{label:"Contact"}]} eyebrow="Get in touch" title="Good work starts with a conversation." description="Have a public message to share, an idea to develop or a question for our team? We're listening." icon={MessageCircle} index="05 / CONTACT" />
    <section className="bg-white py-20 lg:py-28"><Container className="grid gap-14 lg:grid-cols-[.76fr_1.24fr] lg:gap-20"><div><Eyebrow>Reach us directly</Eyebrow><h2 className={`mt-6 text-navy ${text.h2}`}>Start where it suits you.</h2><div className="mt-9 border-t border-navy"><a href={site.phone.href} className="group flex items-center gap-5 border-b border-line py-6"><Phone className="h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="min-w-0 flex-1"><span className="block font-mono text-[10px] uppercase tracking-[.12em] text-teal">Call</span><span className="mt-1 block font-display text-[18px] font-semibold text-navy">{site.phone.display}</span></span><ArrowUpRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" aria-hidden="true"/></a><a href={`mailto:${site.email}`} className="group flex items-center gap-5 border-b border-line py-6"><Mail className="h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="min-w-0 flex-1"><span className="block font-mono text-[10px] uppercase tracking-[.12em] text-teal">Email</span><span className="mt-1 block break-words font-display text-[17px] font-semibold text-navy">{site.email}</span></span><ArrowUpRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" aria-hidden="true"/></a><a href={site.mapUrl} target="_blank" rel="noreferrer" className="group flex items-start gap-5 border-b border-line py-6"><MapPin className="mt-2 h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="min-w-0 flex-1"><span className="block font-mono text-[10px] uppercase tracking-[.12em] text-teal">Visit / Nagpur</span><span className="mt-1 block font-display text-[16px] font-semibold leading-7 text-navy">{site.addressLines.map((line,i)=><span key={i} className="block">{line}</span>)}</span><span className="mt-3 block text-[12px] text-teal">Open in Google Maps ↗</span></span></a></div><div className="mt-12 border-l-2 border-teal pl-5"><p className="font-display text-[17px] font-medium leading-7 text-navy">Value Your Brand,<br />Brand Your Values.</p></div></div><ContactForm groups={groups} defaultInterest={defaultInterest}/></Container></section>
  </>;
}
