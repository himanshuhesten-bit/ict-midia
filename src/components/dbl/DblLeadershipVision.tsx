import { Landmark, Quote } from "lucide-react";

export default function DblLeadershipVision() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-paper" id="leadership">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#111e25] to-[#182831] p-8 sm:p-12 lg:p-14 text-white shadow-xl">
          {/* Ambient Decorative Badge */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote className="h-28 w-28 text-lime" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-lime">
              <Landmark className="h-3.5 w-3.5" />
              Leadership Message & Ethos
            </div>

            <blockquote className="mt-6 font-display text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed tracking-tight text-white/95">
              &ldquo;Public communication is never merely dissemination—it is the sacred bridge of trust between the state and its citizens. At ICT Media, every word, every conclave, and every ministerial press release is executed with zero-defect protocol fidelity, linguistic precision, and unyielding institutional dignity.&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/15 pt-6 gap-4">
              <div>
                <div className="font-display text-base font-bold text-white">
                  Executive Directorate
                </div>
                <div className="text-xs text-lime font-mono">
                  ICT Media Communications Practice &bull; Nagpur, Maharashtra
                </div>
              </div>

              <div className="text-xs font-mono text-white/60">
                Empanelled Partner to Maharashtra State Bodies since 2013
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

