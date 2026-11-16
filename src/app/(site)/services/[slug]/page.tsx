import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ButtonLink, Chip, Container, Eyebrow, text } from "@/components/ui";
import { serviceNumber, services, stages } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return services.map(({slug})=>({slug})); }
export async function generateMetadata({params}:Props):Promise<Metadata> { const {slug}=await params; const s=services.find(x=>x.slug===slug); return s?{title:s.title,description:s.lead}:{title:"Service not found"}; }

export default async function ServicePage({params}:Props) {
  const {slug}=await params;
  const index=services.findIndex(s=>s.slug===slug);
  if(index<0) notFound();
  const service=services[index];
  const previous=services[(index+services.length-1)%services.length];
  const next=services[(index+1)%services.length];
  return <>
    <PageHero crumbs={[{label:"Services",href:"/services"},{label:service.title}]} eyebrow={`Capability / ${serviceNumber(index)}`} title={service.title} description={service.lead} icon={service.icon} index={`${stages[service.stage].label.toUpperCase()} / 0${index+1}`}><ButtonLink href={`/contact?interest=${service.slug}`}>Discuss this service</ButtonLink></PageHero>
    <section className="bg-paper"><Container><div className="relative h-[270px] overflow-hidden bg-mist sm:h-[380px] lg:h-[480px]"><Image src={service.image} alt={service.imageAlt} fill priority placeholder="blur" sizes="(max-width: 1380px) 100vw, 1250px" style={{objectPosition:service.imagePosition}} className="object-cover saturate-[.82]"/><span className="absolute bottom-0 left-0 bg-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[.1em] text-navy">ICT MEDIA / {service.title}</span></div></Container></section>
    <section className="bg-white py-20 lg:py-28"><Container><div className="grid gap-7 lg:grid-cols-[.55fr_1fr] lg:gap-24"><div><Eyebrow>What&apos;s included</Eyebrow><h2 className={`mt-5 max-w-md text-navy ${text.h2}`}>Built around the right details.</h2><p className="mt-5 max-w-xs text-[15px] leading-7 text-navy/60">Explore the work behind {service.title.toLowerCase()}.</p></div><div className="border-t border-navy">{service.groups.map((group,gIndex)=><div key={group.heading??gIndex} className="border-b border-line py-6 first:pt-6">{group.heading && <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">{group.heading}</h3>}{group.intro&&<p className="mb-4 text-[14px] text-navy/60">{group.intro}</p>}<Reveal as="ol" stagger={65} className="divide-y divide-line/80">{group.items.map((item,i)=><li key={item.title} className="grid gap-3 py-5 sm:grid-cols-[38px_minmax(155px,.85fr)_1.15fr] sm:gap-5"><span className="font-mono text-[11px] text-teal">0{i+1}</span><h4 className="font-display text-[17px] font-semibold leading-6 tracking-[-.03em] text-navy">{item.title}</h4><p className="text-[14px] leading-7 text-navy/60">{item.text}</p></li>)}</Reveal></div>)}</div></div></Container></section>
    <section className="border-y border-line bg-mist py-12"><Container className="grid gap-5 lg:grid-cols-[.55fr_1fr] lg:gap-24"><span className="font-mono text-[11px] font-semibold uppercase tracking-[.13em] text-teal">Also part of this capability</span><ul className="flex flex-wrap gap-2">{service.alsoCovers.map(item=><li key={item}><Chip>{item}</Chip></li>)}</ul></Container></section>
    <nav aria-label="More services" className="bg-white"><Container className="grid sm:grid-cols-2"><Link href={`/services/${previous.slug}`} className="group flex min-h-[140px] items-center gap-5 border-b border-line py-8 sm:border-b-0 sm:border-r sm:pr-8"><ArrowLeft className="h-5 w-5 text-teal transition-transform group-hover:-translate-x-1" aria-hidden="true"/><span><span className="font-mono text-[11px] uppercase tracking-[.12em] text-teal">Previous capability</span><span className="mt-2 block font-display text-[22px] font-semibold tracking-[-.04em] text-navy">{previous.title}</span></span></Link><Link href={`/services/${next.slug}`} className="group flex min-h-[140px] items-center justify-end gap-5 py-8 text-right sm:pl-8"><span><span className="font-mono text-[11px] uppercase tracking-[.12em] text-teal">Next capability</span><span className="mt-2 block font-display text-[22px] font-semibold tracking-[-.04em] text-navy">{next.title}</span></span><ArrowRight className="h-5 w-5 text-teal transition-transform group-hover:translate-x-1" aria-hidden="true"/></Link></Container></nav>
    <NextStep eyebrow="Work with us" title="Have a project in mind?" description={`Tell us what you need from ${service.title}, and we'll find the right way forward.`} href={`/contact?interest=${service.slug}`} cta="Let's discuss it" />
  </>;
}
