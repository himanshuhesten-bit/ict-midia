import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/clients";

export default function DblFeaturedProjects() {
  const featured = caseStudies.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-mist border-y border-line" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-teal">
              Demonstrated Public Outcomes
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy">
              FLAGSHIP <span className="text-teal">ASSIGNMENTS</span>
            </h2>
            <p className="mt-2 text-sm text-navy/70 max-w-2xl">
              High-impact communications, ministerial conclaves, and citizen campaigns executed for Maharashtra’s government departments and statutory bodies.
            </p>
          </div>

          <Link
            href="/clients#case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal hover:underline self-start md:self-end"
          >
            All Case Studies
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 6 Grid of Assignments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((study) => (
            <div
              key={study.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-navy/10">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded bg-navy/90 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-lime backdrop-blur-xs">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-bold text-teal uppercase tracking-wider">
                    {study.client}
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-navy group-hover:text-teal transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Outcome Bar */}
              <div className="border-t border-line/60 bg-paper/60 p-4 sm:px-5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" />
                  <p className="text-[11.5px] font-medium text-navy/80 leading-snug line-clamp-2">
                    <strong className="text-navy font-semibold">Outcome:</strong> {study.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
