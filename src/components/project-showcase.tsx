"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { PROJECTS, Project } from "@/data/projects";

export default function ProjectShowcase() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const outer = outerRef.current;
    const track = trackRef.current;

    if (!outer || !track) return;

    const totalProjects = PROJECTS.length;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      // GSAP ScrollTrigger synchronized with native CSS sticky container
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * totalProjects),
              totalProjects - 1
            );
            setActiveIdx(index);
          },
        },
      });
    }, outerRef);

    return () => ctx.revert();
  }, []);

  // Reduced motion fallback: Simple vertical editorial list
  if (isReducedMotion) {
    return (
      <section className="py-24 bg-[#050505] text-para-ivory px-6 sm:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-sandstone block mb-4">
            ARCHITECTURAL ARCHIVE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light mb-16">
            SELECTED BUILDS
          </h2>
          <div className="space-y-16">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className="border-b border-para-charcoal-muted pb-12">
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className="relative w-full h-[400px] mb-6 overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-sans text-xs tracking-ultra text-para-bronze block mb-1">
                        0{idx + 1} / {project.category}
                      </span>
                      <h3 className="font-serif text-3xl font-light">{project.title}</h3>
                    </div>
                    <span className="font-sans text-xs tracking-widest text-para-sandstone uppercase">
                      {project.location}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    // Outer scroll track container (determines scroll distance for 8 projects)
    <div ref={outerRef} className="relative h-[650vh] bg-[#050505]">
      {/* Sticky Viewport (Native CSS Sticky prevents React DOM parent-child removal conflicts) */}
      <section className="sticky top-0 h-screen w-full bg-[#050505] text-para-ivory overflow-hidden select-none flex flex-col justify-between">
        
        {/* Header Overlay */}
        <div className="absolute top-8 left-8 right-8 z-30 flex items-center justify-between pointer-events-none">
          <div className="flex items-center space-x-4">
            <span className="w-8 h-[1px] bg-para-bronze"></span>
            <span className="font-sans text-[10px] sm:text-xs tracking-ultra uppercase text-para-sandstone font-medium">
              05 — ARCHITECTURAL ARCHIVE
            </span>
          </div>

          {/* Project Counter (01 / 08) */}
          <div className="font-sans text-xs tracking-widest text-para-sandstone font-mono">
            <span className="text-para-ivory font-bold">
              0{activeIdx + 1}
            </span>
            <span className="text-para-bronze mx-1">/</span>
            <span>0{PROJECTS.length}</span>
          </div>
        </div>

        {/* Right Fixed Side Vertical Brand Element */}
        <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center space-y-4 pointer-events-none">
          <span className="font-serif text-2xl font-light text-para-sandstone">P.</span>
          <div className="w-[1px] h-16 bg-para-bronze/40"></div>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-para-sandstone/70 [writing-mode:vertical-rl]">
            PARĀ — THE STHAPATYA STUDIO
          </span>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={trackRef}
          className="flex h-full w-max items-center relative z-20"
        >
          {PROJECTS.map((project: Project, idx: number) => {
            const isActive = idx === activeIdx;

            return (
              <div
                key={project.id}
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative px-6 sm:px-16"
              >
                {/* Project Card Plate Container (65vw x 65vh hero sizing surrounded by black space) */}
                <div className="w-full max-w-[1100px] h-[58vh] sm:h-[65vh] relative flex flex-col justify-between group">
                  
                  {/* Photographic Plate */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full h-full overflow-hidden bg-para-charcoal-light border border-para-charcoal-muted transition-all duration-700 block"
                    data-cursor="project"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1100px"
                      className={`object-cover transition-all duration-1000 ease-architectural ${
                        isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"
                      } group-hover:scale-105`}
                      priority={idx === 0}
                    />

                    {/* Subtle Gradient Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-80" />

                    {/* Hover Explore Button */}
                    <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="inline-flex items-center space-x-2 font-sans text-xs tracking-ultra uppercase text-para-ivory bg-[#050505]/80 backdrop-blur-sm px-4 py-2 border border-para-sandstone/30">
                        <span>EXPLORE BUILD</span>
                        <span className="text-para-bronze">→</span>
                      </span>
                    </div>
                  </Link>

                  {/* Overlapping Editorial Metadata */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    {/* Left Title */}
                    <div className="flex flex-col">
                      <span className="font-sans text-[10px] sm:text-xs tracking-ultra text-para-bronze uppercase font-bold mb-1">
                        0{idx + 1} // {project.category}
                      </span>
                      <Link href={`/projects/${project.slug}`}>
                        <h3 className="font-serif text-3xl sm:text-5xl font-light text-para-ivory tracking-wide hover:text-para-sandstone transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                    </div>

                    {/* Right Location & Details */}
                    <div className="font-sans text-xs tracking-widest uppercase text-para-sandstone flex flex-col sm:items-end space-y-1">
                      <span>{project.location}</span>
                      <span className="text-para-stone/70 text-[10px]">
                        {project.scope}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-8 z-30 pointer-events-none font-sans text-[10px] tracking-widest text-para-sandstone/70 uppercase flex items-center space-x-2 animate-pulse">
          <span>SCROLL TO ARCHIVE</span>
          <span>→</span>
        </div>
      </section>
    </div>
  );
}
