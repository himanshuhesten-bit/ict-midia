"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, stages } from "@/lib/services";

export default function ServiceShowcase() {
  const [selected, setSelected] = useState(0);
  const active = services[selected];

  return <div className="grid border-t border-navy lg:grid-cols-[.9fr_1.1fr]">
    <div className="relative min-h-[370px] overflow-hidden bg-navy lg:min-h-[650px]">
      <Image key={active.slug} src={active.image} alt={active.imageAlt} fill sizes="(max-width: 1024px) 100vw, 550px" placeholder="blur" style={{ objectPosition: active.imagePosition }} className="service-image object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-7 text-white sm:p-10">
        <span className="font-mono text-[11px] uppercase tracking-[.14em] text-white/85">ICT MEDIA / OUR CAPABILITIES</span>
        <div className="max-w-md"><span className="font-mono text-[11px] uppercase tracking-[.14em] text-lime">{String(selected+1).padStart(2,"0")} / 06 &nbsp; · &nbsp; {stages[active.stage].label}</span><p className="mt-4 font-display text-[clamp(1.7rem,3vw,2.65rem)] font-semibold leading-[1.18] tracking-[-.045em]">{active.lead}</p></div>
      </div>
    </div>
    <ol className="border-l border-line bg-paper">
      {services.map((service, index) => {
        const isSelected = selected === index;
        return <li key={service.slug} className="border-b border-line last:border-b-0">
          <Link href={`/services/${service.slug}`} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)} aria-label={`${service.title} — view service`} className={`group relative flex min-h-[107px] items-center gap-4 px-5 py-4 transition-colors sm:gap-7 sm:px-8 lg:min-h-[108px] lg:px-9 ${isSelected ? "bg-mint-soft" : "bg-paper hover:bg-mist"}`}>
            {isSelected && <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-teal" />}
            <span className="w-7 shrink-0 font-mono text-[11px] text-teal">{String(index+1).padStart(2,"0")}</span>
            <span className="flex-1 font-display text-[clamp(1.15rem,2vw,1.65rem)] font-semibold leading-snug tracking-[-.035em] text-navy">{service.title}</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[.1em] text-navy/50 sm:block">{stages[service.stage].label}</span>
            <ArrowUpRight aria-hidden="true" className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isSelected ? "text-teal" : "text-navy/40"}`} />
          </Link>
        </li>;
      })}
    </ol>
  </div>;
}
