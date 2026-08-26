"use client";

import Image from "next/image";
import { MATERIALS } from "@/data/studio";

export default function MaterialGallery() {
  return (
    <section className="py-28 sm:py-40 bg-para-ivory text-para-charcoal relative overflow-hidden border-b border-para-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            10 — TACTILE CRAFT & MATERIALITY
          </span>
          <h2 className="font-serif text-section-title font-light text-para-charcoal leading-[1.02]">
            MATERIAL IS <br />
            <span className="italic text-para-bronze font-normal">MEMORY.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-para-charcoal/70 max-w-xl font-light">
            We select materials that age with grace, carrying the warmth of Indian craft, climate resilience, and natural grain into every room.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((mat, idx) => (
            <div
              key={mat.name}
              className="group flex flex-col bg-para-ivory-light border border-para-stone/20 hover:border-para-bronze transition-all duration-500 p-6"
              data-cursor="explore"
            >
              <div className="relative w-full h-64 overflow-hidden mb-6 bg-para-charcoal/5">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-architectural"
                />
                <div className="absolute top-4 left-4 bg-para-charcoal/80 text-para-ivory font-sans text-[10px] tracking-ultra px-3 py-1 uppercase">
                  MAT_0{idx + 1}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="font-sans text-[10px] tracking-ultra text-para-bronze uppercase font-bold">
                  {mat.region}
                </span>
                <h3 className="font-serif text-2xl font-light text-para-charcoal group-hover:text-para-bronze transition-colors">
                  {mat.name}
                </h3>
                <p className="font-sans text-xs text-para-charcoal/70 font-light">
                  {mat.texture}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
