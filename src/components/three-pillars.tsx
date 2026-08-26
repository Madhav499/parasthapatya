"use client";

import { useState } from "react";
import Image from "next/image";
import { THREE_PILLARS } from "@/data/studio";
import { motion, AnimatePresence } from "framer-motion";

export default function ThreePillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28 sm:py-40 bg-[#050505] text-para-ivory relative overflow-hidden border-b border-para-charcoal-muted">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-sandstone font-bold">
            03 — THE ESSENCE OF PARĀ
          </span>
          <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02]">
            THREE PILLARS OF <br />
            <span className="italic text-para-sandstone font-normal">SPATIAL HARMONY.</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-para-charcoal-muted mb-12 sm:mb-16">
          {THREE_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.title}
              onClick={() => setActiveIndex(idx)}
              className={`flex-1 py-6 text-left transition-all duration-300 relative border-b-2 ${
                activeIndex === idx
                  ? "border-para-sandstone text-para-ivory"
                  : "border-transparent text-para-ivory/40 hover:text-para-ivory/80"
              }`}
              data-cursor="cta"
            >
              <div className="font-sans text-xs tracking-ultra uppercase text-para-bronze mb-1">
                PILLAR {pillar.number}
              </div>
              <div className="font-serif text-2xl sm:text-4xl font-light tracking-wide">
                {pillar.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Pillar Display (Room-to-room spatial experience) */}
        <div className="relative min-h-[550px] lg:min-h-[650px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Left Image Showcase */}
              <div className="lg:col-span-7 relative h-[380px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden border border-para-charcoal-muted bg-para-charcoal-light" data-cursor="explore">
                <Image
                  src={THREE_PILLARS[activeIndex].image}
                  alt={THREE_PILLARS[activeIndex].title}
                  fill
                  className="object-cover transition-transform duration-1000 scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-para-ivory">
                  <span className="font-sans text-[10px] tracking-ultra uppercase text-para-sandstone">
                    PARĀ SPATIAL ROOM SEQUENCE 0{activeIndex + 1}
                  </span>
                  <p className="font-serif text-lg sm:text-xl italic mt-1 font-light">
                    "{THREE_PILLARS[activeIndex].quote}"
                  </p>
                </div>
              </div>

              {/* Right Editorial Copy */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
                  {THREE_PILLARS[activeIndex].number} / {THREE_PILLARS[activeIndex].title}
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl font-light text-para-ivory leading-tight">
                  {THREE_PILLARS[activeIndex].subtitle}
                </h3>

                <p className="font-sans text-base sm:text-lg text-para-ivory/80 font-light leading-relaxed">
                  {THREE_PILLARS[activeIndex].description}
                </p>

                <div className="pt-4 border-t border-para-charcoal-muted flex items-center justify-between font-sans text-xs tracking-widest text-para-sandstone">
                  <span>CONCEPT {activeIndex + 1} OF 3</span>
                  <button
                    onClick={() => setActiveIndex((prev) => (prev + 1) % THREE_PILLARS.length)}
                    className="hover:text-para-ivory transition-colors uppercase font-bold flex items-center space-x-2"
                  >
                    <span>NEXT ROOM</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
