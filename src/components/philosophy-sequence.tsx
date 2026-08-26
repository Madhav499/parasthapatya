"use client";

import { PHILOSOPHY_STEPS } from "@/data/studio";

export default function PhilosophySequence() {
  return (
    <section className="py-28 sm:py-40 bg-para-ivory text-para-charcoal border-b border-para-charcoal/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-20 sm:mb-28">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            04 — METHODOLOGY & APPROACH
          </span>
          <h2 className="font-serif text-section-title font-light text-para-charcoal leading-[1.02]">
            THE PARĀ <br />
            <span className="italic text-para-bronze font-normal">APPROACH.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-para-charcoal/70 max-w-xl font-light">
            A six-phase architectural journey from first conversation to a sanctuary that belongs.
          </p>
        </div>

        {/* Philosophy Sequence Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {PHILOSOPHY_STEPS.map((item) => (
            <div
              key={item.step}
              className="group p-8 bg-para-ivory-light border border-para-stone/20 hover:border-para-bronze transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-para-stone/20 pb-4 mb-6">
                  <span className="font-sans text-xs tracking-ultra text-para-bronze font-bold">
                    PHASE {item.step}
                  </span>
                  <span className="font-serif text-3xl font-light text-para-charcoal/40 group-hover:text-para-bronze transition-colors">
                    {item.word}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-para-charcoal mb-3 group-hover:text-para-bronze transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-para-charcoal/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-para-stone/10 flex items-center justify-between font-sans text-[10px] tracking-ultra text-para-bronze uppercase">
                <span>PARĀ PROCESS</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
