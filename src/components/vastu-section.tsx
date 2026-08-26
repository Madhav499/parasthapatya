"use client";

export default function VastuSection() {
  return (
    <section id="vastu" className="py-28 sm:py-40 bg-para-charcoal text-para-ivory relative overflow-hidden">
      {/* Background Blueprint Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#C2B29F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Architectural Energy Grid Diagram */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-8 sm:p-12 border border-para-charcoal-muted bg-para-charcoal-light/40">
            {/* Vastu Mandala Geometric Line Art Overlay */}
            <div className="relative w-full aspect-square max-w-[420px] border border-para-sandstone/30 p-6 flex flex-col justify-between">
              {/* Outer Coordinates */}
              <div className="flex justify-between font-sans text-[9px] tracking-ultra text-para-sandstone/60">
                <span>NW / VAYU</span>
                <span>NORTH / KUBERA</span>
                <span>NE / ISHANYA</span>
              </div>

              {/* Center Mandala Matrix Grid */}
              <div className="my-auto grid grid-cols-3 gap-2 p-4 border border-para-sandstone/20 relative">
                {/* Center Brahmasthan Highlight */}
                <div className="absolute inset-0 m-auto w-24 h-24 border border-para-bronze/60 bg-para-bronze/10 flex items-center justify-center">
                  <span className="font-sans text-[8px] tracking-ultra text-para-gold font-bold">
                    BRAHMASTHAN
                  </span>
                </div>

                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">N</div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">NE</div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">E</div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">NW</div>
                <div className="h-16 border-none"></div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">SE</div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">W</div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">SW</div>
                <div className="h-16 border border-para-sandstone/10 flex items-center justify-center font-sans text-[9px] text-para-stone">S</div>
              </div>

              {/* Bottom Coordinates */}
              <div className="flex justify-between font-sans text-[9px] tracking-ultra text-para-sandstone/60">
                <span>SW / NIRRITI</span>
                <span>SOUTH / YAMA</span>
                <span>SE / AGNI</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <span className="font-sans text-xs tracking-ultra uppercase text-para-sandstone font-bold">
              07 — SPATIAL ENERGY SCIENCE
            </span>

            <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02]">
              SPACE HAS <br />
              <span className="italic text-para-sandstone font-normal">AN ENERGY OF ITS OWN.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-para-ivory/80 font-light leading-relaxed">
              At PARĀ, Vastu Shastra and Pranic Feng Shui are not approached as mystical superstition, but as an ancient Indian science of environmental micro-climate, magnetic field alignment, and solar movement.
            </p>

            <div className="space-y-4 border-l border-para-bronze/40 pl-6 py-2">
              <h4 className="font-serif text-xl text-para-sandstone font-normal">
                Directional Light & Natural Air Circulation
              </h4>
              <p className="font-sans text-sm text-para-ivory/70 font-light leading-relaxed">
                By organizing doorways, water reservoirs, kitchens, and sleeping chambers along natural solar trajectories, we eliminate spatial stagnation and create homes that feel effortlessly uplifting.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 font-sans text-[11px] tracking-widest text-para-sandstone uppercase">
              <span className="px-3 py-1.5 border border-para-sandstone/20">DIRECTIONAL ZONING</span>
              <span className="px-3 py-1.5 border border-para-sandstone/20">ELEMENTAL BALANCE</span>
              <span className="px-3 py-1.5 border border-para-sandstone/20">BRAHMASTHAN PURITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
