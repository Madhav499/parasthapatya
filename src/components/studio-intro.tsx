"use client";

import { STUDIO_INFO } from "@/data/studio";

export default function StudioIntro() {
  return (
    <section className="relative py-28 sm:py-40 bg-[#0B0B0B] text-para-ivory overflow-hidden border-b border-para-charcoal-muted">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Label & Details */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
              01 — THE STUDIO
            </span>
            <div className="w-12 h-[1px] bg-para-bronze"></div>
            <p className="font-sans text-xs tracking-widest text-para-sandstone/70 uppercase">
              PARĀ — THE STHAPATYA STUDIO <br />
              PRINCIPAL: {STUDIO_INFO.principalArchitect}
            </p>
          </div>

          {/* Right Column Heading & Paragraph */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02] tracking-tight">
              WE CREATE SPACES <br />
              <span className="italic text-para-sandstone font-normal">THAT FEEL LIKE THEY</span> <br />
              BELONG TO YOU.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-para-ivory/80 font-sans text-base sm:text-lg font-light leading-relaxed">
              <p>
                At PARĀ, architecture is approached as an atelier of quiet luxury and spatial harmony. We synthesize modern architectural discipline with Indian cultural vocabulary, designing private residences, commercial landmarks, and hospitality retreats across India.
              </p>
              <p>
                Under the principal leadership of Ar. Urval Dhruve, the studio seamlessly weaves architecture, interior sanctuaries, Vastu energy balance, local materiality, and climate-responsive engineering into spaces crafted for timeless living.
              </p>
            </div>

            {/* Micro Metadata tags */}
            <div className="pt-6 flex flex-wrap gap-3 font-sans text-[11px] tracking-widest text-para-sandstone uppercase">
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal">ARCHITECTURE</span>
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal">INTERIORS</span>
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal">VASTU SHASTRA</span>
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal">PRANIC FENGSHUI</span>
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal">RAJKOT, GUJARAT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
