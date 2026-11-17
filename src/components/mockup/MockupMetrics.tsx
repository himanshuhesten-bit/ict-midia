"use client";

import CountUp from "@/components/CountUp";

const metrics = [
  { value: "100+", label: "Assignments delivered" },
  { value: "50+", label: "Public institutions served" },
  { value: "13+", label: "Years of experience" },
  { value: "4+", label: "Reputation mandates" },
];

export default function MockupMetrics() {
  return (
    <section className="bg-[#111e25] text-white py-10 sm:py-12" aria-label="Key Achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          {metrics.map((item) => (
            <div key={item.label} className="sm:border-l sm:border-white/10 sm:pl-6 first:border-l-0 first:pl-0">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                <CountUp value={item.value} />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-sans">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
