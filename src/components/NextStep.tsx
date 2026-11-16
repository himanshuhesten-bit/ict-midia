import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Landmark, Phone } from "lucide-react";
import mascot from "../../public/images/mascot.webp";
import Reveal from "./Reveal";
import { Container } from "./ui";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  showMascot?: boolean;
};

export default function NextStep({
  eyebrow = "Government Consultation",
  title,
  description,
  href,
  cta,
  showMascot = false,
}: Props) {
  return (
    <section className="border-t border-line bg-mist py-10 lg:py-14">
      <Container>
        <Reveal
          className={`grid items-center gap-6 rounded-2xl border border-line bg-white p-6 sm:p-8 lg:p-10 shadow-sm ${
            showMascot ? "lg:grid-cols-[1fr_auto_110px]" : "lg:grid-cols-[1fr_auto]"
          }`}
        >
          <div>
            <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[.15em] text-teal">
              {eyebrow} · ICT Media
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy lg:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-navy/70">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-self-start lg:justify-self-end">
            <Link
              href={href}
              className="inline-flex min-h-[46px] items-center gap-2 bg-navy px-6 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal"
            >
              <Landmark className="h-4 w-4 text-lime" />
              {cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex min-h-[46px] items-center gap-2 border border-line bg-paper px-4 font-mono text-xs font-medium text-navy transition-colors hover:border-teal"
            >
              <Phone className="h-3.5 w-3.5 text-teal" />
              {site.phone.display}
            </a>
          </div>

          {showMascot && (
            <Image
              src={mascot}
              alt=""
              sizes="110px"
              className="hidden h-28 w-auto self-center justify-self-center lg:block"
            />
          )}
        </Reveal>
      </Container>
    </section>
  );
}
