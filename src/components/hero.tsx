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
      // Controlled subtle scale from 1.05 to 1.00 on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.05 },
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

      // Subtle upward motion for hero typography
      gsap.to(contentRef.current, {
        y: -40,
        opacity: 0.8,
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
      className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center select-none"
    >
      {/* Background Architectural Photography with deep black canvas overlay */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000')",
        }}
        data-cursor="explore"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/50" />
      </div>

      {/* Hero Content Layer */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 flex flex-col justify-center items-start pt-20"
      >
        <div className="inline-flex items-center space-x-3 mb-6">
          <span className="w-8 sm:w-12 h-[1px] bg-para-bronze"></span>
          <span className="font-sans text-[10px] sm:text-xs tracking-ultra uppercase text-para-sandstone font-medium">
            PARĀ — THE STHAPATYA STUDIO
          </span>
        </div>

        <h1 className="font-serif text-hero-title font-light text-para-ivory leading-[0.92] tracking-tight mb-8">
          SPACES WITH <br />
          <span className="italic font-normal text-para-sandstone">SOUL.</span>
        </h1>

        <p className="font-sans text-sm sm:text-lg text-para-ivory/80 max-w-xl font-light leading-relaxed mb-10">
          Contemporary architecture, interior sanctuaries, and spatial environments shaped around the way you live.
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

      {/* Bottom Bar Details */}
      <div className="absolute bottom-8 left-0 right-0 z-10 max-w-[1600px] mx-auto px-6 sm:px-12 flex items-center justify-between text-para-sandstone/70 font-sans text-[10px] sm:text-xs tracking-widest uppercase">
        <div>RAJKOT — GUJARAT — INDIA</div>
        <div className="flex items-center space-x-2 animate-pulse">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
