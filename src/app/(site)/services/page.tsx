import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Workflow } from "lucide-react";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, text } from "@/components/ui";
import { services, stages, flow, serviceNumber } from "@/lib/services";

export const metadata: Metadata = { title: "Services", description: "Explore ICT Media's six capabilities: public relations, creative services, publications, media management, digital PR and IT solutions." };

export default function ServicesPage() {
  return <>
    <PageHero crumbs={[{ label: "Services" }]} eyebrow="What we do" title="The work behind the message." description="Six connected capabilities. One purpose: making communication useful to the people it is meant to reach." icon={Workflow} index="02 / SERVICES" />
    <section className="border-b border-line bg-white py-20 lg:py-24"><Container><Eyebrow>A connected system</Eyebrow><div className="mt-9 grid border-t border-navy lg:grid-cols-3">{flow.map((key,i)=><div key={key} className={`border-b border-line py-6 lg:border-b-0 lg:py-8 ${i>0 ? "lg:border-l lg:pl-8" : ""}`}><span className="font-mono text-[11px] text-teal">0{i+1} / 03</span><h2 className="mt-4 font-display text-[27px] font-semibold tracking-[-.04em] text-navy">{stages[key].label}<span className="ml-3 text-teal">↗</span></h2><p className="mt-1 text-[14px] text-navy/60">{stages[key].question}</p></div>)}</div><p className="mt-5 text-[13px] text-navy/50"><span className="font-semibold text-teal">+ Technology</span> supports every stage.</p></Container></section>
    <section className="bg-paper py-20 lg:py-28"><Container><div className="flex items-end justify-between gap-5 border-b border-navy pb-8"><div><Eyebrow>The capabilities</Eyebrow><h2 className={`mt-5 text-navy ${text.h2}`}>Find the right expertise.</h2></div><span className="hidden font-mono text-xs text-teal sm:block">INDEX / 01—06</span></div>
      <Reveal as="ol" stagger={55} className="divide-y divide-line">{services.map((service,i)=><li key={service.slug}><Link href={`/services/${service.slug}`} className="group grid items-center gap-4 py-5 transition-colors hover:bg-mist sm:grid-cols-[45px_minmax(0,1fr)_160px_30px] sm:gap-6 sm:px-4 lg:grid-cols-[55px_minmax(0,1fr)_190px_100px_30px] lg:gap-9 lg:py-6"><span className="font-mono text-[11px] text-teal">{serviceNumber(i)}</span><div><h3 className="font-display text-[clamp(1.35rem,2.8vw,2.35rem)] font-semibold leading-tight tracking-[-.05em] text-navy transition-colors group-hover:text-teal">{service.title}</h3><p className="mt-2 max-w-xl text-[14px] leading-6 text-navy/60">{service.lead}</p></div><div className="relative hidden aspect-[1.75] overflow-hidden bg-mist sm:block"><Image src={service.image} alt={service.imageAlt} fill placeholder="blur" sizes="190px" style={{objectPosition:service.imagePosition}} className="object-cover saturate-[.8] transition-transform duration-500 group-hover:scale-105" /></div><span className="hidden font-mono text-[10px] uppercase tracking-[.1em] text-teal lg:block">{stages[service.stage].label}</span><ArrowUpRight aria-hidden="true" className="hidden h-5 w-5 text-teal transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"/></Link></li>)}</Reveal>
    </Container></section>
    <NextStep eyebrow="For public institutions" title="Working on a public message?" description="See how narrative, positioning and engagement work together for government." href="/government-pr" cta="Government PR" />
  </>;
}
