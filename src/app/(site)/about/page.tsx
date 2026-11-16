import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, CalendarCheck, Compass, GraduationCap, Landmark, Lightbulb, MapPinned, Shuffle, TrendingUp, Users, Waypoints, type LucideIcon } from "lucide-react";
import aboutImage from "../../../../public/images/media-coverage.jpg";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, text } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "ICT Media is a strategic communication partner to government departments, municipal corporations and public institutions across Maharashtra." };

const competencies: { title: string; detail: string; icon: LucideIcon }[] = [
  { title: "Government-centric", detail: "Deep understanding of public sector communication.", icon: Landmark },
  { title: "Strategic", detail: "Insight-driven planning and execution.", icon: Compass },
  { title: "Credible", detail: "Building trust through authentic communication.", icon: BadgeCheck },
  { title: "Innovative", detail: "Creative ideas backed by technology.", icon: Lightbulb },
  { title: "Collaborative", detail: "Strong coordination with stakeholders.", icon: Waypoints },
  { title: "Reliable", detail: "Consistent quality and timely delivery.", icon: CalendarCheck },
  { title: "Adaptive", detail: "Solutions tailored to evolving communication needs.", icon: Shuffle },
  { title: "Impactful", detail: "Focused on measurable outcomes.", icon: TrendingUp },
];

export default function AboutPage() {
  return <>
    <PageHero crumbs={[{ label: "About" }]} eyebrow="The people behind the message" title="We believe clarity builds trust." description="A communication partner for government departments, municipal corporations and public sector organizations across Maharashtra." icon={Users} index="01 / ABOUT" />
    <section className="bg-white py-20 lg:py-28"><Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
      <div className="relative"><div className="relative aspect-[5/4] overflow-hidden bg-mist"><Image src={aboutImage} alt="News camera crews covering a public event in India" fill placeholder="blur" sizes="(max-width: 1024px) 100vw, 650px" className="object-cover saturate-[.8]" /></div><span className="absolute bottom-0 right-0 bg-lime px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[.1em] text-navy">Communicating with purpose / ICT</span></div>
      <div><Eyebrow>Our point of view</Eyebrow><h2 className={`mt-6 text-navy ${text.h2}`}>Building trust. <span className="text-teal">Creating impact.</span></h2><p className="mt-7 text-[16px] leading-8 text-navy/65">The purpose of public relations is to create, maintain and strengthen meaningful relationships between an organisation and the people it serves.</p><p className="mt-5 text-[16px] leading-8 text-navy/65">Strategic communication shapes public perception and supports long-term resilience when it is credible, transparent, consistent and guided by intent.</p><div className="mt-9 border-t border-navy pt-5"><span className="font-mono text-[11px] uppercase tracking-[.13em] text-teal">What we bring to every brief</span><ul className="mt-5 divide-y divide-line">{[{icon:GraduationCap,title:"Deep domain expertise"},{icon:Users,title:"A multidisciplinary team"},{icon:MapPinned,title:"Experience across Maharashtra"}].map((item,i)=><li key={item.title} className="flex items-center gap-4 py-3"><span className="font-mono text-[11px] text-teal">0{i+1}</span><item.icon className="h-5 w-5 text-teal" strokeWidth={1.5} aria-hidden="true"/><span className="font-display text-[15px] font-semibold text-navy">{item.title}</span></li>)}</ul></div></div>
    </Container></section>
    <section className="bg-mist py-20 lg:py-28"><Container><div className="grid gap-7 lg:grid-cols-[.8fr_1fr] lg:items-end"><div><Eyebrow>Our foundations</Eyebrow><h2 className={`mt-6 text-navy ${text.h2}`}>The thinking behind <span className="text-teal">the work.</span></h2></div><p className="max-w-md text-[16px] leading-8 text-navy/60">Eight practical strengths shape how we listen, plan and deliver for the public sector.</p></div><Reveal as="ul" stagger={65} className="mt-12 grid border-t border-navy sm:grid-cols-2 lg:grid-cols-4">{competencies.map((item,i)=><li key={item.title} className={`min-h-[205px] border-b border-line px-3 py-7 sm:px-5 lg:px-6 ${i%4!==0 ? "lg:border-l" : ""}`}><div className="flex items-center justify-between"><item.icon className="h-6 w-6 text-teal" strokeWidth={1.4} aria-hidden="true"/><span className="font-mono text-[11px] text-teal">0{i+1}</span></div><h3 className="mt-9 font-display text-[19px] font-semibold tracking-[-.035em] text-navy">{item.title}</h3><p className="mt-2 text-[14px] leading-6 text-navy/60">{item.detail}</p></li>)}</Reveal></Container></section>
    <NextStep eyebrow="The next chapter" title="See how we put it to work." description="Strategy, content and reach—connected into one clear communication system." href="/services" cta="Explore services" />
  </>;
}
