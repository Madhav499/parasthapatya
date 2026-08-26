"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Slow zoom effect on image as scroll progresses
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        {
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Subtle upward parallax for text content
      gsap.to(contentRef.current, {
        y: -60,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-para-charcoal flex items-center justify-center select-none"
    >
      {/* Background Architectural Image with subtle luxury overlay */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000')",
        }}
        data-cursor="explore"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-para-charcoal via-para-charcoal/50 to-para-charcoal/40" />
      </div>

      {/* Grid Overlay Lines (Architectural Grid Motif) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="w-[1px] h-full bg-para-sandstone/30"></div>
        <div className="w-[1px] h-full bg-para-sandstone/30 hidden md:block"></div>
        <div className="w-[1px] h-full bg-para-sandstone/30"></div>
      </div>

      {/* Hero Typography Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 flex flex-col justify-center items-start pt-20"
      >
        <div className="inline-flex items-center space-x-3 mb-6">
          <span className="w-8 sm:w-12 h-[1px] bg-para-bronze"></span>
          <span className="font-sans text-[10px] sm:text-xs tracking-ultra uppercase text-para-sandstone font-medium">
            RAJКOT — GUJARAT — INDIA
          </span>
        </div>

        <h1 className="font-serif text-hero-title font-light text-para-ivory leading-[0.9] tracking-tight mb-8">
          SPACES WITH <br />
          <span className="italic font-normal text-para-sandstone">SOUL.</span>
        </h1>

        <p className="font-sans text-sm sm:text-lg text-para-ivory/80 max-w-xl font-light leading-relaxed mb-10">
          Architecture, interiors and spatial sanctuaries shaped around the way you live, work and inhabit harmony.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 font-sans text-xs tracking-ultra uppercase bg-para-ivory text-para-charcoal px-7 py-4 hover:bg-para-sandstone transition-colors duration-300"
            data-cursor="cta"
          >
            <span>EXPLORE BUILDS</span>
            <span>→</span>
          </Link>
          <Link
            href="/studio"
            className="inline-flex items-center space-x-3 font-sans text-xs tracking-ultra uppercase text-para-ivory border border-para-ivory/30 px-7 py-4 hover:border-para-ivory hover:bg-para-ivory/10 transition-colors duration-300"
            data-cursor="cta"
          >
            <span>THE PHILOSOPHY</span>
          </Link>
        </div>
      </div>

      {/* Hero Bottom Bar Details */}
      <div className="absolute bottom-8 left-0 right-0 z-10 max-w-[1600px] mx-auto px-6 sm:px-12 flex items-center justify-between text-para-sandstone/70 font-sans text-[10px] sm:text-xs tracking-widest uppercase">
        <div>PARĀ — THE STHAPATYA STUDIO</div>
        <div className="flex items-center space-x-2 animate-bounce">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
