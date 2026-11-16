import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import editorialHero from "../../../public/images/editorial-hero.jpg";
import communityImage from "../../../public/images/community.jpg";
import mediaImage from "../../../public/images/media-coverage.jpg";
import CountUp from "@/components/CountUp";
import NextStep from "@/components/NextStep";
import Reveal from "@/components/Reveal";
import ServiceShowcase from "@/components/ServiceShowcase";
import { ButtonLink, Container, Eyebrow, TextLink, text } from "@/components/ui";
import { blogArticles, readingMinutes } from "@/lib/blog";

export const metadata: Metadata = {
  title: "ICT Media — Communication for public impact",
};

const metrics = [
  { value: "13+", label: "Years of communication excellence" },
  { value: "50+", label: "Government & public institutions served" },
  { value: "100+", label: "Strategic assignments delivered" },
];

const steps = [
  { number: "01", title: "Understand", body: "Listen to the institution and the people it serves." },
  { number: "02", title: "Translate", body: "Turn complexity into clear, useful information." },
  { number: "03", title: "Connect", body: "Reach people through the channels that matter." },
];

export default function HomePage() {
  return <>
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <Container>
        <div className="flex items-center justify-between border-b border-line py-5 font-mono text-[10px] font-medium uppercase tracking-[.14em] text-navy/55">
          <span>Independent communication practice / India</span><span className="hidden sm:inline">Nagpur, Maharashtra · Est. 2012</span><span className="sm:hidden">EST. 2012</span>
        </div>
        <div className="grid lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center py-14 pr-0 sm:py-20 lg:py-24 lg:pr-14">
            <Eyebrow>Strategic communication for the public sector</Eyebrow>
            <h1 className="mt-9 max-w-[720px] font-display text-[clamp(3.25rem,6.15vw,6.3rem)] font-semibold leading-[1.03] tracking-[-.077em] text-navy">Where policy<br />meets <span className="text-teal">people.</span></h1>
            <div className="mt-9 flex max-w-[520px] gap-5 border-l-2 border-teal pl-5"><p className="text-[16px] leading-[1.7] text-navy/65 sm:text-[17px]">We make the complex understandable, the important visible, and public communication genuinely useful.</p></div>
            <div className="mt-10 flex flex-wrap items-center gap-5"><ButtonLink href="/government-pr">Explore our work</ButtonLink><TextLink href="/contact">Start a conversation</TextLink></div>
            <div className="mt-16 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[.12em] text-navy/45 lg:flex"><ArrowDown className="h-4 w-4" aria-hidden="true" /> Scroll to explore <span className="ml-auto">01 / 05</span></div>
          </div>
          <div className="relative min-h-[450px] bg-mint-soft sm:min-h-[560px] lg:my-8 lg:min-h-[630px]">
            <Image src={editorialHero} alt="Conceptual illustration of a conversation among Indian citizens beside civic architecture" fill priority placeholder="blur" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[58%_50%]" />
            <div className="corner-mark absolute inset-0" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 flex max-w-[325px] items-center gap-5 bg-navy px-6 py-5 text-white sm:px-7"><span className="font-mono text-[11px] text-lime">01 / 04</span><span className="text-[13px] leading-5">Inform. Engage.<br />Create impact.</span><ArrowUpRight className="ml-auto h-5 w-5 text-lime" aria-hidden="true" /></div>
            <span className="absolute right-4 top-7 hidden [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[.2em] text-navy/65 sm:block">ICT MEDIA — PUBLIC IMPACT</span>
          </div>
        </div>
      </Container>
    </section>

    <section className="border-b border-line bg-mist" aria-label="ICT Media in numbers"><Container><dl className="grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-3 lg:py-12">{metrics.map((m,i)=><div key={m.value} className={`pl-5 sm:pl-8 lg:pl-10 ${i===0 ? "border-l-2 border-teal" : "border-l border-line"}`}><dd className="font-display text-[clamp(2.5rem,4.2vw,4rem)] font-semibold leading-none tracking-[-.06em] text-navy"><CountUp value={m.value}/></dd><dt className="mt-3 max-w-[200px] text-[13px] leading-5 text-navy/60">{m.label}</dt></div>)}</dl></Container></section>

    <section className="bg-paper py-24 lg:py-32"><Container>
      <div className="grid gap-10 lg:grid-cols-[.48fr_1fr] lg:gap-20"><div><Eyebrow>01 / Why we exist</Eyebrow><div className="mt-8 hidden h-[1px] w-full bg-line lg:block" /><p className="mt-6 max-w-xs font-mono text-[11px] uppercase leading-6 tracking-[.07em] text-navy/50">Good governance depends on a public that feels informed, included and heard.</p></div><div><h2 className="font-display text-[clamp(2.4rem,4.6vw,5.1rem)] font-medium leading-[1.16] tracking-[-.065em] text-navy">Information is only the beginning. <span className="text-teal">Understanding changes everything.</span></h2><p className="mt-8 max-w-2xl text-[16px] leading-8 text-navy/65">ICT Media brings together public relations, media, content and technology to build stronger connections between institutions and the communities they serve.</p></div></div>
      <Reveal as="ol" stagger={100} className="mt-20 grid gap-0 border-t border-navy lg:grid-cols-3">{steps.map((step,i)=><li key={step.number} className={`relative border-b border-line py-8 lg:border-b-0 lg:py-10 ${i>0 ? "lg:border-l lg:pl-9" : ""}`}><span className="font-mono text-[11px] text-teal">{step.number} / 03</span><h3 className="mt-7 font-display text-[27px] font-semibold tracking-[-.05em] text-navy">{step.title}</h3><p className="mt-3 max-w-[270px] text-[15px] leading-7 text-navy/60">{step.body}</p>{i<2&&<ArrowRight className="absolute right-6 top-9 hidden h-5 w-5 text-teal/50 lg:block" aria-hidden="true" />}</li>)}</Reveal>
    </Container></section>

    <section className="bg-navy py-24 text-white lg:py-28" id="services"><Container>
      <div className="grid gap-7 pb-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16"><div><Eyebrow onDark>02 / What we do</Eyebrow><h2 className={`mt-5 max-w-2xl ${text.h2}`}>The whole story. <span className="text-lime">From first word to last mile.</span></h2></div><div className="lg:pb-1"><p className="max-w-lg text-[16px] leading-8 text-white/65">One connected set of capabilities, built to take a message from strategy to the people it is meant to reach.</p><div className="mt-4"><TextLink href="/services" onDark>Explore all services</TextLink></div></div></div>
      <ServiceShowcase />
    </Container></section>

    <section className="bg-paper py-24 lg:py-32"><Container>
      <div className="grid items-stretch lg:grid-cols-[1.04fr_.96fr]"><div className="relative min-h-[410px] overflow-hidden bg-mint-soft lg:min-h-[575px]"><Image src={communityImage} alt="Community members gathered in a circle for an outdoor discussion" fill placeholder="blur" sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-[52%_60%] saturate-[.85]"/><span className="absolute bottom-0 left-0 bg-paper px-5 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-navy">The people behind the policy / visual reference</span></div><div className="flex flex-col justify-center bg-mint-soft px-7 py-12 sm:px-12 lg:px-14 lg:py-16"><Eyebrow>03 / Government PR</Eyebrow><h2 className="mt-7 font-display text-[clamp(2.3rem,3.6vw,4rem)] font-semibold leading-[1.12] tracking-[-.06em] text-navy">A clearer connection between <span className="text-teal">institutions and people.</span></h2><p className="mt-7 max-w-md text-[16px] leading-8 text-navy/65">From shaping a narrative to supporting citizen engagement, we help public institutions communicate with accuracy, clarity and purpose.</p><div className="mt-10"><TextLink href="/government-pr">Explore Government PR</TextLink></div><span aria-hidden="true" className="mt-16 font-mono text-[11px] tracking-[.16em] text-teal/60">NARRATIVE — POSITIONING — ENGAGEMENT</span></div></div>
    </Container></section>

    <section className="border-y border-line bg-white py-24 lg:py-28"><Container><div className="flex flex-wrap items-end justify-between gap-6 border-b border-navy pb-8"><div><Eyebrow>04 / Ideas worth sharing</Eyebrow><h2 className={`mt-5 text-navy ${text.h2}`}>From our journal.</h2></div><TextLink href="/blogs">All articles</TextLink></div><div className="grid border-b border-line lg:grid-cols-2">{blogArticles.slice(0,2).map((article,i)=><Link href={`/blogs/${article.slug}`} key={article.slug} className={`group grid gap-5 py-7 sm:grid-cols-[145px_1fr] sm:items-center lg:py-9 ${i===0 ? "lg:border-r lg:border-line lg:pr-7" : "lg:pl-7"}`}><div className="relative aspect-[1.25] overflow-hidden bg-mist"><Image src={i===0?communityImage:mediaImage} alt={article.imageAlt} fill placeholder="blur" sizes="145px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div><p className="font-mono text-[10px] uppercase tracking-[.1em] text-teal">{article.category} / {readingMinutes(article)} min read</p><h3 className="mt-3 max-w-md font-display text-[20px] font-semibold leading-[1.35] tracking-[-.04em] text-navy transition-colors group-hover:text-teal">{article.title}</h3><span className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-teal">Read story <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></div></Link>)}</div></Container></section>

    <NextStep eyebrow="05 / Let's work together" title="Let's make something clear." description="Have a message that matters? Let's find the best way to share it with the people who need it." href="/contact" cta="Start a conversation" showMascot />
  </>;
}
