"use client";

import { Award, Briefcase, Building2, ShieldCheck } from "lucide-react";
import CountUp from "@/components/CountUp";

interface MetricItem {
  icon: typeof Award;
  value: string;
  prefix: string;
  accent: string;
  subtitle: string;
}

const metrics: MetricItem[] = [
  {
    icon: Award,
    value: "13+",
    prefix: "Years of ",
    accent: "Experience",
    subtitle: "Established 2013 in Nagpur",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    prefix: "Protocol ",
    accent: "Fidelity",
    subtitle: "Empanelled Government Partner",
  },
  {
    icon: Building2,
    value: "50+",
    prefix: "Public Sector ",
    accent: "Clients",
    subtitle: "Departments, PSUs & Municipalities",
  },
  {
    icon: Briefcase,
    value: "100+",
    prefix: "Successful ",
    accent: "Projects",
    subtitle: "Conclaves, Campaigns & Audits",
  },
];

export default function CountWrapper() {
  return (
    <section className="relative z-10 py-6 sm:py-8" aria-label="Statistical Achievements">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 divide-y divide-line/60 sm:divide-y-0 sm:grid-cols-4 sm:divide-x sm:divide-line/70">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.accent}
                className={`flex flex-col items-center text-center p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  index % 2 !== 0 ? "border-l border-line/60 sm:border-l-0" : ""
                }`}
              >
                {/* Stylized Badge Icon matching Vidarbha Infotech Count Style */}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* Big Bold Animated Count */}
                <div className="font-display text-3xl font-extrabold tracking-tight text-[#182831] sm:text-4xl lg:text-5xl">
                  <CountUp value={item.value} />
                </div>

                {/* Two-Line Title with Teal Accent Span */}
                <p className="mt-2 text-sm font-bold text-[#182831] sm:text-base">
                  {item.prefix}
                  <span className="text-teal font-extrabold">{item.accent}</span>
                </p>

                {/* Subtitle / Department Scope */}
                <p className="mt-1 text-xs text-[#182831]/60">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
