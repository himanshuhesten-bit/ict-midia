import Image from "next/image";
import mascot from "../../public/images/mascot.webp";
import Reveal from "./Reveal";
import { ButtonLink, Container, text } from "./ui";

type Props = { eyebrow?: string; title: string; description: string; href: string; cta: string; showMascot?: boolean };

export default function NextStep({ eyebrow = "Next step", title, description, href, cta, showMascot = false }: Props) {
  return <section className="border-t border-line bg-lime py-16 lg:py-20">
    <Container><Reveal className={`grid items-center gap-8 ${showMascot ? "lg:grid-cols-[1fr_auto_140px]" : "lg:grid-cols-[1fr_auto]"}`}>
      <div><span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">{eyebrow} / ICT MEDIA</span><h2 className={`mt-4 max-w-2xl text-navy ${text.h2}`}>{title}</h2><p className="mt-4 max-w-xl text-[15px] leading-7 text-navy/70">{description}</p></div>
      <ButtonLink href={href} className="justify-self-start lg:justify-self-end">{cta}</ButtonLink>
      {showMascot && <Image src={mascot} alt="" sizes="140px" className="hidden h-44 w-auto self-end lg:block" />}
    </Reveal></Container>
  </section>;
}
