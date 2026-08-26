"use client";

import Image from "next/image";
import { INDIAN_IDENTITY } from "@/data/studio";

export default function IndianIdentity() {
  return (
    <section className="py-28 sm:py-40 bg-[#050505] text-para-ivory border-b border-para-charcoal-muted relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-20 sm:mb-28">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            02 — HERITAGE & VOCABULARY
          </span>
          <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02]">
            INDIAN ARCHITECTURAL <br />
            <span className="italic text-para-sandstone font-normal">SOUL.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-para-ivory/70 max-w-2xl font-light">
            Indian character discovered through raw material, sunlight & deep shadow, courtyard space, and geometric spatial balance—never decorated.
          </p>
        </div>

        {/* Editorial Storytelling Photo Sequence (4 Core Moments) */}
        <div className="space-y-24 sm:space-y-36">
          {INDIAN_IDENTITY.pillars.map((item, idx) => (
            <div
              key={item.category}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo Plate */}
              <div
                className={`lg:col-span-7 relative h-[380px] sm:h-[500px] w-full overflow-hidden bg-para-charcoal-light border border-para-charcoal-muted group ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
                data-cursor="explore"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-architectural"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 font-sans text-[10px] tracking-ultra text-para-sandstone bg-[#050505]/80 px-3 py-1 uppercase border border-para-charcoal-muted">
                  0{idx + 1} / {item.category}
                </div>
              </div>

              {/* Editorial Copy */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
                  {item.category} DISCOVERY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-para-ivory">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-para-ivory/80 font-light leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="w-12 h-[1px] bg-para-bronze/40 block"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
