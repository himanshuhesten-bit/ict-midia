"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { BlogArticle } from "@/lib/blog";

type CardPost = BlogArticle & { readingTime: number };

function ArticleCard({ article, featured }: { article: CardPost; featured: boolean }) {
  return <article className={featured ? "lg:col-span-3" : ""}><Link href={`/blogs/${article.slug}`} className={`group block border-b border-line ${featured ? "lg:grid lg:grid-cols-[1.1fr_.9fr] lg:border-t lg:border-navy" : "border-t border-line/70"}`}>
    <div className={`relative overflow-hidden bg-mist ${featured ? "aspect-[1.7] lg:aspect-auto lg:min-h-[400px]" : "aspect-[1.55]"}`}><Image src={article.image} alt={article.imageAlt} fill sizes={featured?"(max-width: 1024px) 100vw, 650px":"(max-width: 1024px) 50vw, 400px"} className="object-cover saturate-[.88] transition-transform duration-500 group-hover:scale-105"/></div>
    <div className={`flex flex-col justify-between ${featured?"p-6 sm:p-9 lg:p-12":"py-6 lg:pr-6"}`}><div><span className="font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-teal">{article.category} &nbsp; / &nbsp; {article.readingTime} min read</span><h3 className={`mt-5 font-display font-semibold leading-[1.2] tracking-[-.045em] text-navy transition-colors group-hover:text-teal ${featured?"text-[clamp(1.85rem,3vw,3rem)]":"text-[22px]"}`}>{article.title}</h3><p className="mt-4 max-w-md text-[15px] leading-7 text-navy/60">{article.excerpt}</p></div><span className="mt-8 inline-flex items-center gap-3 self-start text-[13px] font-semibold text-teal">Read story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true"/></span></div>
  </Link></article>;
}

export default function BlogExplorer({ articles, categories }: { articles: CardPost[]; categories: string[] }) {
  const [active, setActive] = useState(categories[0] ?? "All articles");
  const [search, setSearch] = useState("");
  const needle = search.trim().toLowerCase();
  const filtered = useMemo(() => articles.filter(article => {
    if(active !== categories[0] && article.category !== active) return false;
    if(!needle) return true;
    return [article.title,article.excerpt,article.category,article.lead,...article.takeaways,...article.sections.flatMap(section=>[section.heading,...section.paragraphs])].join(" ").toLowerCase().includes(needle);
  }), [active,articles,categories,needle]);
  const defaultView=active===categories[0]&&!needle;

  return <section aria-labelledby="browse-articles" className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
    <div className="flex flex-wrap items-end justify-between gap-8"><div><p className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">The archive / ICT MEDIA</p><h2 id="browse-articles" className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-tight tracking-[-.05em] text-navy">Ideas to move us forward.</h2></div><label className="flex w-full max-w-[320px] items-center gap-3 border-b border-navy py-2 text-navy focus-within:border-teal"><Search className="h-4 w-4 shrink-0" aria-hidden="true"/><span className="sr-only">Search articles</span><input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search stories" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-navy/45"/>{search&&<button type="button" onClick={()=>setSearch("")} aria-label="Clear search" className="cursor-pointer p-1"><X className="h-4 w-4" aria-hidden="true"/></button>}</label></div>
    <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-y border-line" role="group" aria-label="Filter articles by topic">{categories.map(category=><button key={category} type="button" aria-pressed={category===active} onClick={()=>setActive(category)} className={`relative min-h-12 cursor-pointer font-mono text-[11px] font-semibold uppercase tracking-[.06em] transition-colors ${category===active?"text-teal after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-teal":"text-navy/50 hover:text-navy"}`}>{category}</button>)}</div>
    <p aria-live="polite" className="mt-6 font-mono text-[11px] uppercase tracking-[.1em] text-navy/45">{filtered.length} {filtered.length===1?"story":"stories"}{active!==categories[0]?` / ${active}`:""}{needle?` / “${search.trim()}”`:""}</p>
    {filtered.length?<div className="mt-5 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{filtered.map((article,i)=><ArticleCard key={article.slug} article={article} featured={defaultView&&i===0}/>)}</div>:<div className="border-b border-line py-16"><h3 className="font-display text-2xl font-semibold text-navy">Nothing found for that search.</h3><p className="mt-2 text-sm text-navy/60">Try a different word or topic.</p><button type="button" onClick={()=>{setActive(categories[0]);setSearch("")}} className="mt-5 cursor-pointer border-b border-teal pb-1 text-sm font-semibold text-teal">Clear filters</button></div>}
  </div></section>;
}
