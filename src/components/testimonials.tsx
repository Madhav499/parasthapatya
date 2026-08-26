"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/studio";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <section className="py-28 sm:py-40 bg-para-ivory-dark/30 text-para-charcoal relative overflow-hidden border-b border-para-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold block mb-8 text-center">
          11 — CLIENT TESTIMONIALS & REFLECTIONS
        </span>

        <div className="min-h-[300px] flex flex-col justify-between items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              <blockquote className="font-serif text-2xl sm:text-4xl font-light text-para-charcoal leading-relaxed mb-8">
                "{TESTIMONIALS[currentIdx].quote}"
              </blockquote>

              <div className="flex flex-col items-center space-y-1">
                <span className="font-serif text-xl text-para-bronze">
                  {TESTIMONIALS[currentIdx].client}
                </span>
                <span className="font-sans text-xs tracking-widest text-para-charcoal/60 uppercase">
                  {TESTIMONIALS[currentIdx].project} — {TESTIMONIALS[currentIdx].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Nav dots */}
          <div className="flex items-center space-x-4 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? "bg-para-bronze scale-125" : "bg-para-stone/40 hover:bg-para-stone"
                }`}
                aria-label={`Testimonial ${idx + 1}`}
                data-cursor="cta"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
