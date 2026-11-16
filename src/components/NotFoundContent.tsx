import Image from "next/image";
import mascot from "../../public/images/mascot.webp";
import { ButtonLink, Container, Eyebrow, TextLink, text } from "./ui";

export default function NotFoundContent(){return <section className="border-b border-line bg-paper"><Container className="grid items-center gap-10 py-24 lg:grid-cols-[1fr_300px] lg:gap-16 lg:py-32"><div><Eyebrow>404 / Not found</Eyebrow><h1 className={`mt-6 max-w-2xl text-navy ${text.h1}`}>This page has moved on.</h1><p className="mt-5 max-w-lg text-[17px] leading-8 text-navy/60">The address may have changed. Let&apos;s get you to what you were looking for.</p><div className="mt-8 flex flex-wrap items-center gap-5"><ButtonLink href="/">Back to home</ButtonLink><TextLink href="/services">Explore services</TextLink></div></div><Image src={mascot} alt="" priority sizes="(max-width: 1024px) 180px, 300px" className="mx-auto h-64 w-auto lg:h-[380px]"/></Container></section>}
