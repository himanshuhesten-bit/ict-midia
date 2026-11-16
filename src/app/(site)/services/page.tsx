import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Workflow } from "lucide-react";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import { Container, Eyebrow } from "@/components/ui";
import { services, stages, flow, serviceNumber } from "@/lib/services";

export const metadata: Metadata = {
  title: "Public Sector PR & Communication Services — ICT Media",
  description:
    "Explore ICT Media's 9 core public sector services: public relations, media management, designing & printing, government events, content development, media productions, advertisements, digital PR, and IT solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="What We Do"
        title="Comprehensive communication built for public sector impact."
        description="Nine connected capabilities engineered to take a governmental message from high-level policy formulation directly to the citizen."
        icon={Workflow}
        index="02 / SERVICES"
      />

      {/* The 4 Connected Stages - Low Scroll */}
      <section className="border-b border-line bg-white py-10 lg:py-12">
        <Container>
          <div className="flex items-center justify-between border-b border-navy pb-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
              The Communication Framework
            </span>
            <span className="font-mono text-xs text-navy/50">Strategy → Content → Reach → Technology</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((key, i) => {
              const stage = stages[key];
              const Icon = stage.icon;
              return (
                <div
                  key={key}
                  className="rounded-lg border border-line bg-paper p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-teal">
                      STAGE 0{i + 1}
                    </span>
                    <Icon className="h-4 w-4 text-teal" />
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy">
                    {stage.label}
                  </h3>
                  <p className="mt-1 text-xs text-navy/60">{stage.question}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Full 9 Services List - Minimalist Compact Table */}
      <section className="bg-paper py-12 lg:py-16 border-b border-line">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b border-navy pb-4">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-teal">
                Service Index
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy">
                Public sector capabilities.
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-teal">
              01—0{services.length}
            </span>
          </div>

          <div className="mt-6 divide-y divide-line">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between py-5 transition-colors hover:bg-mist/50 sm:flex-row sm:items-center sm:px-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-teal pt-0.5">
                    {serviceNumber(i)}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <service.icon className="h-4 w-4 text-teal" />
                      <h3 className="font-display text-lg font-bold text-navy group-hover:text-teal transition-colors">
                        {service.title}
                      </h3>
                      <span className="rounded bg-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-navy/60 border border-line">
                        {stages[service.stage].label}
                      </span>
                    </div>
                    <p className="mt-1 max-w-2xl text-xs leading-relaxed text-navy/70">
                      {service.lead}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between sm:mt-0 sm:pl-6 shrink-0">
                  <span className="font-mono text-xs font-semibold text-teal group-hover:underline">
                    Specifications
                  </span>
                  <ArrowUpRight className="ml-2 h-4 w-4 text-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <NextStep
        eyebrow="Government Communications"
        title="Working on a departmental brief or RFP?"
        description="Connect with our public sector team to structure an integrated communication proposal."
        href="/contact?interest=government-communications"
        cta="Discuss Your Brief"
      />
    </>
  );
}
