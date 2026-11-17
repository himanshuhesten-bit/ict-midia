import { ArrowRight } from "lucide-react";

export default function MockupProcess() {
  const steps = ["Listen", "Plan", "Create", "Connect"];

  return (
    <section className="bg-paper py-10 sm:py-14 border-y border-line" aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6f3d] mb-4">
          OUR PROCESS
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-[#111e25]">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center gap-3 sm:gap-6">
              <span>{step}</span>
              {idx < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#5c6f3d] shrink-0" strokeWidth={2.5} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
