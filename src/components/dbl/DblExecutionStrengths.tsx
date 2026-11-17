import { Clock, Cpu, Lock, ShieldCheck } from "lucide-react";

interface StrengthItem {
  icon: typeof ShieldCheck;
  tag: string;
  title: string;
  accent: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const strengths: StrengthItem[] = [
  {
    icon: Lock,
    tag: "Execution Model",
    title: "100% In-House ",
    accent: "Operations",
    description: "Zero outsourcing. In-house writers, linguists, and staging crews protect institutional confidentiality.",
    metric: "Zero",
    metricLabel: "Subcontracting Risk",
  },
  {
    icon: ShieldCheck,
    tag: "Administrative Protocol",
    title: "Zero-Defect ",
    accent: "Protocol Fidelity",
    description: "Strict compliance with official state protocol, gazette wording, dais hierarchies, and VIP liaison.",
    metric: "100%",
    metricLabel: "Protocol Adherence",
  },
  {
    icon: Cpu,
    tag: "State-Wide Reach",
    title: "Pan-Maharashtra ",
    accent: "Bureau Grid",
    description: "Active daily liaison with accredited correspondents and television desks across all 36 districts.",
    metric: "36",
    metricLabel: "Districts Covered",
  },
  {
    icon: Clock,
    tag: "Emergency Desk",
    title: "Rapid Rebuttal ",
    accent: "Deployment",
    description: "24/7 monitoring desk detecting distortion and deploying verified administrative rebuttals.",
    metric: "< 60 Min",
    metricLabel: "Rebuttal Turnaround",
  },
];

export default function DblExecutionStrengths() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-paper" id="execution-strengths">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-teal">
            Key Execution Strengths
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy">
            WHY GOVERNMENT DEPARTMENTS <span className="text-teal">CHOOSE ICT MEDIA</span>
          </h2>
          <p className="mt-3 text-sm text-navy/70 leading-relaxed">
            Four operational pillars that distinguish ICT Media as Maharashtra’s most trusted empanelled communications and PR practice.
          </p>
        </div>

        {/* 4 Execution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.metricLabel}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-teal">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy">
                    {item.title}
                    <span className="text-teal">{item.accent}</span>
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-navy/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Metric Pill (DBL Style) */}
                <div className="mt-6 border-t border-line/60 pt-4 flex items-baseline justify-between">
                  <span className="font-display text-xl font-extrabold text-navy group-hover:text-teal transition-colors">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-medium text-navy/60">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
