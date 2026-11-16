import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export const text = {
  h1: "font-display text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.065em] text-balance",
  h2: "font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-balance",
  h3: "font-display text-xl font-semibold leading-snug tracking-[-0.035em]",
  lead: "text-[17px] leading-[1.75] text-pretty",
  body: "text-[16px] leading-[1.8] text-pretty",
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[.14em] ${onDark ? "text-lime" : "text-teal"}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 ${onDark ? "bg-lime" : "bg-teal"}`} />{children}
    </p>
  );
}

export function ButtonLink({ href, children, variant = "primary", className = "" }: {
  href: string; children: ReactNode; variant?: "primary" | "onDark"; className?: string;
}) {
  return (
    <Link href={href} className={`group inline-flex min-h-[52px] items-stretch font-sans text-sm font-semibold transition-colors focus-visible:outline-lime ${variant === "onDark" ? "bg-lime text-navy hover:bg-white" : "bg-navy text-white hover:bg-teal"} ${className}`}>
      <span className="flex items-center px-5 sm:px-6">{children}</span>
      <span className={`flex w-[52px] items-center justify-center border-l transition-transform ${variant === "onDark" ? "border-navy/15" : "border-white/20"}`}><ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
    </Link>
  );
}

export function TextLink({ href, children, onDark = false }: { href: string; children: ReactNode; onDark?: boolean }) {
  return <Link href={href} className={`group inline-flex min-h-11 items-center gap-4 border-b pb-1 text-sm font-semibold transition-colors ${onDark ? "border-lime/50 text-lime hover:border-lime" : "border-navy/40 text-navy hover:border-teal hover:text-teal"}`}>
    {children}<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>;
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center border border-line bg-paper px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[.04em] text-ink">{children}</span>;
}
