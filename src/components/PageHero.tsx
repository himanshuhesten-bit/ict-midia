import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow, text } from "./ui";

type Crumb = { label: string; href?: string };
type Props = { crumbs: Crumb[]; eyebrow: string; title: string; description: string; icon?: LucideIcon; aside?: ReactNode; children?: ReactNode; index?: string };

export default function PageHero({ crumbs, eyebrow, title, description, icon: Icon, aside, children, index }: Props) {
  return <section className="border-b border-line bg-paper">
    <Container>
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 border-b border-line py-3.5 font-mono text-[10.5px] uppercase tracking-[.08em] text-navy/55"><Link href="/" className="hover:text-teal">Home</Link>{crumbs.map(crumb => <span key={crumb.label} className="flex items-center gap-2"><span className="text-teal">/</span>{crumb.href ? <Link href={crumb.href} className="hover:text-teal">{crumb.label}</Link> : <span aria-current="page" className="text-navy">{crumb.label}</span>}</span>)}</nav>
      <div className="grid gap-6 pb-8 pt-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,.65fr)] lg:items-end lg:gap-12 lg:pb-10 lg:pt-8">
        <div><Eyebrow>{eyebrow}</Eyebrow><h1 className={`mt-3 max-w-4xl text-navy ${text.h1}`}>{title}</h1>{children && <div className="mt-5">{children}</div>}</div>
        <div className="lg:border-l lg:border-line lg:pl-8"><div className="flex items-center justify-between gap-6"><span className="font-mono text-[10.5px] uppercase tracking-[.1em] text-teal">{index ?? "ICT / MEDIA"}</span>{Icon && <Icon className="h-6 w-6 text-teal" strokeWidth={1.3} aria-hidden="true" />}</div><p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{description}</p>{aside && <div className="mt-4">{aside}</div>}</div>
      </div>
    </Container>
  </section>;
}
