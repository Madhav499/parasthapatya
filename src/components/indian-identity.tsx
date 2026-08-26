"use client";

import Image from "next/image";
import { INDIAN_IDENTITY } from "@/data/studio";

export default function IndianIdentity() {
  return (
    <section className="py-28 sm:py-36 bg-para-ivory-dark/40 text-para-charcoal border-b border-para-charcoal/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            02 — HERITAGE & VOCABULARY
          </span>
          <h2 className="font-serif text-section-title font-light text-para-charcoal leading-[1.05]">
            INDIAN ARCHITECTURAL <br />
            <span className="italic text-para-terracotta font-normal">SOUL.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-para-charcoal/70 max-w-2xl font-light">
            {INDIAN_IDENTITY.subtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INDIAN_IDENTITY.pillars.map((item, idx) => (
            <div
              key={item.category}
              className="group flex flex-col bg-para-ivory p-6 sm:p-8 border border-para-stone/20 hover:border-para-bronze transition-all duration-500"
              data-cursor="explore"
            >
              <div className="relative w-full h-64 sm:h-72 overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-architectural"
                />
                <div className="absolute top-4 left-4 bg-para-charcoal/80 text-para-ivory font-sans text-[10px] tracking-ultra px-3 py-1 uppercase">
                  {item.category}
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <span className="font-sans text-[10px] tracking-widest text-para-bronze font-semibold uppercase">
                  0{idx + 1} / VOCABULARY
                </span>
                <h3 className="font-serif text-2xl font-normal text-para-charcoal group-hover:text-para-bronze transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-para-charcoal/70 font-light leading-relaxed">
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
