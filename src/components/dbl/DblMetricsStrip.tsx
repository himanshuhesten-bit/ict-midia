"use client";

import { Award, Building2, CheckCircle2, Flag, MapPin } from "lucide-react";
import CountUp from "@/components/CountUp";

interface MetricItem {
  icon: typeof Award;
  value: string;
  prefix: string;
  accent: string;
  sub: string;
}

const metrics: MetricItem[] = [
  {
    icon: Award,
    value: "13+",
    prefix: "Years of ",
    accent: "Excellence",
    sub: "Founded 2013 in Nagpur",
  },
  {
    icon: Building2,
    value: "50+",
    prefix: "Public Sector ",
    accent: "Bodies",
    sub: "Departments, PSUs & Municipalities",
  },
  {
    icon: Flag,
    value: "100+",
    prefix: "Assignments ",
    accent: "Delivered",
    sub: "State Conclaves & Campaigns",
  },
  {
    icon: MapPin,
    value: "36",
    prefix: "Districts ",
    accent: "Covered",
    sub: "Pan-Maharashtra Media Bureau",
  },
  {
    icon: CheckCircle2,
    value: "100%",
    prefix: "Protocol ",
    accent: "Fidelity",
    sub: "Zero-Defect Administrative Liaison",
  },
];

export default function DblMetricsStrip() {
  return (
    <section className="relative z-10 py-4 sm:py-6" aria-label="Key Enterprise Metrics">
      <div className="rounded-2xl border border-line bg-white shadow-sm">
        <div className="grid grid-cols-2 divide-y divide-line/60 sm:divide-y-0 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-line/70">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.accent}
                className={`flex flex-col items-center text-center p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  index % 2 !== 0 ? "border-l border-line/60 sm:border-l-0" : ""
                } ${index === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="font-display text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl">
                  <CountUp value={item.value} />
                </div>
                <p className="mt-1 text-xs sm:text-sm font-bold text-navy">
                  {item.prefix}
                  <span className="text-teal font-extrabold">{item.accent}</span>
                </p>
                <p className="mt-0.5 text-[11px] text-navy/60">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
