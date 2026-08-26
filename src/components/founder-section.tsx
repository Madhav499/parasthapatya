"use client";

import Image from "next/image";
import { STUDIO_INFO } from "@/data/studio";

export default function FounderSection() {
  return (
    <section className="py-28 sm:py-40 bg-[#0B0B0B] text-para-ivory relative overflow-hidden border-b border-para-charcoal-muted">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Portrait */}
          <div className="lg:col-span-5 relative" data-cursor="explore">
            <div className="relative w-full h-[500px] sm:h-[620px] overflow-hidden bg-para-charcoal border border-para-charcoal-muted">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=1200"
                alt="Ar. Urval Dhruve Principal Architect PARĀ"
                fill
                className="object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-para-ivory">
                <span className="font-sans text-[10px] tracking-ultra uppercase text-para-sandstone">
                  PRINCIPAL ARCHITECT & FOUNDER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light mt-1">
                  Ar. Urval Dhruve
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column Editorial Profile */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
              09 — PRINCIPAL PROFILE
            </span>

            <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02]">
              AR. URVAL DHRUVE <br />
              <span className="italic text-para-sandstone font-normal">ON SPATIAL RESTRAINT.</span>
            </h2>

            <blockquote className="font-serif text-xl sm:text-2xl italic font-light text-para-ivory/90 border-l-2 border-para-bronze pl-6 py-2 leading-relaxed">
              "Architecture is not about imposing geometric ego upon the landscape. It is about listening carefully to the client's life, understanding the soil and sun, and sculpting space that feels peaceful, functional, and deeply authentic."
            </blockquote>

            <div className="space-y-4 font-sans text-base text-para-ivory/80 font-light leading-relaxed">
              <p>
                As the founding principal of PARĀ — The Sthapatya Studio, Ar. Urval Dhruve brings over a decade of practice across Gujarat and Western India. His approach seamlessly bridges traditional Haveli courtyard spatial principles with sharp contemporary architectural forms.
              </p>
              <p>
                Believing that true luxury is derived from thermal comfort, natural sunlight, acoustic softness, and spatial proportion, Ar. Dhruve personally oversees every schematic design, material selection, and site execution process.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-para-charcoal-muted font-sans text-xs tracking-widest text-para-sandstone uppercase">
              <div>
                <span className="text-[10px] text-para-ivory/50 block mb-1">PRACTICE</span>
                <span>ARCHITECTURE & INTERIORS</span>
              </div>
              <div>
                <span className="text-[10px] text-para-ivory/50 block mb-1">LOCATION</span>
                <span>RAJKOT, GUJARAT</span>
              </div>
              <div>
                <span className="text-[10px] text-para-ivory/50 block mb-1">SPECIALIZATION</span>
                <span>VASTU & PRANIC HARMONY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
