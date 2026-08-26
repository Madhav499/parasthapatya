"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceAccordion() {
  const [activeId, setActiveId] = useState<string>("architecture");

  return (
    <section className="py-28 sm:py-40 bg-para-ivory-dark/30 text-para-charcoal relative overflow-hidden border-b border-para-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            06 — DISCIPLINE & CAPABILITIES
          </span>
          <h2 className="font-serif text-section-title font-light text-para-charcoal leading-[1.02]">
            OUR STUDIO <br />
            <span className="italic text-para-bronze font-normal">SERVICES.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-para-charcoal/70 max-w-xl font-light">
            Integrated spatial disciplines bridging master architecture, interior sanctuaries, energy science, and artisanal décor.
          </p>
        </div>

        {/* Services Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Vertical Accordion List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-para-stone/30">
            {SERVICES.map((service) => {
              const isOpen = activeId === service.id;
              return (
                <div key={service.id} className="py-6 sm:py-8 transition-colors">
                  <button
                    onClick={() => setActiveId(service.id)}
                    className="w-full text-left flex items-center justify-between group"
                    data-cursor="cta"
                  >
                    <div className="flex items-baseline space-x-6 sm:space-x-8">
                      <span className="font-sans text-xs tracking-ultra text-para-bronze font-bold">
                        {service.number}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-4xl font-light text-para-charcoal group-hover:text-para-bronze transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-xl font-serif text-para-bronze">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden pt-6 pl-12 sm:pl-16 pr-4"
                      >
                        <p className="font-sans text-base text-para-charcoal/80 font-light leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-para-stone/20">
                          <div>
                            <span className="font-sans text-[10px] tracking-ultra text-para-bronze uppercase font-bold block mb-2">
                              CORE FOCUS
                            </span>
                            <ul className="space-y-1 font-sans text-xs text-para-charcoal/70">
                              {service.details.slice(0, 3).map((d) => (
                                <li key={d}>• {d}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="font-sans text-[10px] tracking-ultra text-para-bronze uppercase font-bold block mb-2">
                              DELIVERABLES
                            </span>
                            <ul className="space-y-1 font-sans text-xs text-para-charcoal/70">
                              {service.deliverables.slice(0, 3).map((d) => (
                                <li key={d}>✓ {d}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Image Reveal */}
          <div className="lg:col-span-5 sticky top-32 hidden lg:block">
            {SERVICES.map((service) => {
              if (service.id !== activeId) return null;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[550px] w-full overflow-hidden bg-para-charcoal"
                  data-cursor="explore"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-para-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-para-ivory">
                    <span className="font-sans text-[10px] tracking-ultra text-para-sandstone uppercase">
                      SERVICE SPECIFICATION 0{service.number}
                    </span>
                    <h4 className="font-serif text-2xl font-light mt-1">
                      {service.title}
                    </h4>
                    <p className="font-sans text-xs text-para-ivory/70 mt-1 font-light">
                      {service.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
