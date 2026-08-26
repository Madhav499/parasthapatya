"use client";

import { PROCESS_TIMELINE } from "@/data/studio";

export default function ProcessTimeline() {
  return (
    <section className="py-28 sm:py-40 bg-[#050505] text-para-ivory relative overflow-hidden border-b border-para-charcoal-muted">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-20 sm:mb-28">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            08 — ARCHITECTURAL EXECUTION
          </span>
          <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02]">
            FROM IDEA <br />
            <span className="italic text-para-sandstone font-normal">TO SPACE.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-para-ivory/70 max-w-xl font-light">
            The studio's 8-step blueprint sequence guiding every project from initial consultation to hand-crafted completion.
          </p>
        </div>

        {/* Blueprint Style Timeline */}
        <div className="relative border-l border-para-charcoal-muted ml-4 sm:ml-8 pl-8 sm:pl-16 space-y-12 sm:space-y-16">
          {PROCESS_TIMELINE.map((item, idx) => (
            <div key={item.step} className="relative group">
              {/* Technical Coordinate Marker Circle on Timeline */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-para-bronze group-hover:bg-para-bronze transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-para-ivory rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Step Card Container */}
              <div className="p-6 sm:p-8 bg-[#0B0B0B] border border-para-charcoal-muted hover:border-para-bronze transition-all duration-300">
                <div className="flex items-baseline justify-between mb-3 border-b border-para-charcoal-muted pb-3">
                  <span className="font-sans text-xs tracking-ultra text-para-bronze font-bold">
                    STEP {item.step} // EXECUTION PHASE 0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-para-stone tracking-widest">
                    [PARĀ_SPEC_REV_0{idx + 1}]
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-para-ivory group-hover:text-para-sandstone transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-para-ivory/75 font-light leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
