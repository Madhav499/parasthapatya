"use client";

import { STUDIO_INFO } from "@/data/studio";

export default function StudioIntro() {
  return (
    <section className="relative py-28 sm:py-40 bg-para-ivory text-para-charcoal overflow-hidden border-b border-para-charcoal/5">
      {/* Background Subtle Line Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5 max-w-[1600px] mx-auto px-6 sm:px-12 flex justify-between">
        <div className="w-[1px] h-full bg-para-charcoal"></div>
        <div className="w-[1px] h-full bg-para-charcoal hidden md:block"></div>
        <div className="w-[1px] h-full bg-para-charcoal"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Label & Details */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
              01 — THE STUDIO
            </span>
            <div className="w-12 h-[1px] bg-para-bronze"></div>
            <p className="font-sans text-xs tracking-widest text-para-charcoal/60 uppercase">
              PARĀ — THE STHAPATYA STUDIO <br />
              PRINCIPAL: {STUDIO_INFO.principalArchitect}
            </p>
          </div>

          {/* Right Column Heading & Paragraph */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            <h2 className="font-serif text-section-title font-light text-para-charcoal leading-[1.02] tracking-tight">
              WE CREATE SPACES <br />
              <span className="italic text-para-bronze font-normal">THAT FEEL LIKE THEY</span> <br />
              BELONG TO YOU.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-para-charcoal/80 font-sans text-base sm:text-lg font-light leading-relaxed">
              <p>
                At PARĀ, architecture is approached as an atelier of quiet luxury and spatial harmony. We synthesize modern architectural discipline with Indian cultural vocabulary, designing private residences, commercial landmarks, and hospitality retreats across India.
              </p>
              <p>
                Under the principal leadership of Ar. Urval Dhruve, the studio seamlessly weaves architecture, interior sanctuaries, Vastu energy balance, local materiality, and climate-responsive engineering into spaces crafted for timeless living.
              </p>
            </div>

            {/* Micro Metadata tags */}
            <div className="pt-6 flex flex-wrap gap-3 font-sans text-[11px] tracking-widest text-para-bronze uppercase">
              <span className="px-3 py-1.5 border border-para-bronze/20 bg-para-ivory-dark/40">ARCHITECTURE</span>
              <span className="px-3 py-1.5 border border-para-bronze/20 bg-para-ivory-dark/40">INTERIORS</span>
              <span className="px-3 py-1.5 border border-para-bronze/20 bg-para-ivory-dark/40">VASTU SHASTRA</span>
              <span className="px-3 py-1.5 border border-para-bronze/20 bg-para-ivory-dark/40">PRANIC FENGSHUI</span>
              <span className="px-3 py-1.5 border border-para-bronze/20 bg-para-ivory-dark/40">RAJKOT, GUJARAT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
