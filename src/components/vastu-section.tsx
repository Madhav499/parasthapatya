"use client";

export default function VastuSection() {
  return (
    <section id="vastu" className="py-28 sm:py-40 bg-[#050505] text-para-ivory relative overflow-hidden border-b border-para-charcoal-muted">
      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#D4C4B2_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Architectural Energy Matrix Diagram (Monochrome Technical Blueprint) */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-8 sm:p-12 border border-para-charcoal-muted bg-para-charcoal-light">
            {/* Vastu Mandala Geometric Technical Blueprint Overlay */}
            <div className="relative w-full aspect-square max-w-[400px] border border-para-stone/30 p-6 flex flex-col justify-between">
              {/* Outer Coordinates */}
              <div className="flex justify-between font-sans text-[9px] tracking-ultra text-para-stone">
                <span>NW // VAYU</span>
                <span>N // KUBERA</span>
                <span>NE // ISHANYA</span>
              </div>

              {/* Technical Matrix Grid */}
              <div className="my-auto grid grid-cols-3 gap-2 p-4 border border-para-stone/20 relative">
                {/* Center Brahmasthan Highlight */}
                <div className="absolute inset-0 m-auto w-24 h-24 border border-para-bronze/60 bg-para-bronze/10 flex items-center justify-center">
                  <span className="font-sans text-[8px] tracking-ultra text-para-sandstone font-bold">
                    BRAHMASTHAN
                  </span>
                </div>

                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">N</div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">NE</div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">E</div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">NW</div>
                <div className="h-16 border-none"></div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">SE</div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">W</div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">SW</div>
                <div className="h-16 border border-para-stone/10 flex items-center justify-center font-sans text-[9px] text-para-stone/60">S</div>
              </div>

              {/* Bottom Coordinates */}
              <div className="flex justify-between font-sans text-[9px] tracking-ultra text-para-stone">
                <span>SW // NIRRITI</span>
                <span>S // YAMA</span>
                <span>SE // AGNI</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
              07 — SPATIAL ENERGY SCIENCE
            </span>

            <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02]">
              SPACE HAS <br />
              <span className="italic text-para-sandstone font-normal">AN ENERGY OF ITS OWN.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-para-ivory/80 font-light leading-relaxed">
              At PARĀ, Vastu Shastra and Pranic Feng Shui are integrated as an ancient Indian science of environmental micro-climate, magnetic field alignment, and natural daylight orientation.
            </p>

            <div className="space-y-4 border-l border-para-bronze/40 pl-6 py-2">
              <h4 className="font-serif text-xl text-para-sandstone font-normal">
                Directional Light & Natural Air Circulation
              </h4>
              <p className="font-sans text-sm text-para-ivory/70 font-light leading-relaxed">
                By organizing doorways, water reservoirs, kitchens, and living chambers along natural solar trajectories, we eliminate spatial stagnation and create homes that feel effortlessly uplifting.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 font-sans text-[11px] tracking-widest text-para-sandstone uppercase">
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal-light">DIRECTIONAL ZONING</span>
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal-light">ELEMENTAL BALANCE</span>
              <span className="px-3 py-1.5 border border-para-charcoal-muted bg-para-charcoal-light">BRAHMASTHAN PURITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
