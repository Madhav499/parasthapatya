"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";

const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Resort & Farmhouse",
  "Café",
  "Showroom & Boutique",
];

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-28 sm:py-40 bg-para-ivory text-para-charcoal relative overflow-hidden border-b border-para-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Section Title & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div>
            <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold block mb-3">
              05 — ARCHITECTURAL ARCHIVE
            </span>
            <h2 className="font-serif text-section-title font-light text-para-charcoal leading-[1.02]">
              SELECTED <br />
              <span className="italic text-para-bronze font-normal">BUILDS.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-para-charcoal text-para-ivory"
                    : "bg-para-ivory-dark/60 text-para-charcoal/70 hover:text-para-charcoal hover:bg-para-stone/30"
                }`}
                data-cursor="cta"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Magazine Project Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {filteredProjects.map((project: Project, idx: number) => {
            // Determine asymmetric grid span based on index & aspect ratio
            const isFullWidth = idx % 5 === 0;
            const isMedium = idx % 5 === 1 || idx % 5 === 2;
            const colSpanClass = isFullWidth
              ? "md:col-span-12"
              : isMedium
              ? "md:col-span-6"
              : "md:col-span-6 lg:col-span-4";

            const heightClass = isFullWidth
              ? "h-[450px] sm:h-[650px]"
              : "h-[400px] sm:h-[500px]";

            return (
              <div key={project.id} className={`${colSpanClass} group`}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative overflow-hidden bg-para-charcoal/5"
                  data-cursor="project"
                >
                  <div className={`relative w-full ${heightClass} overflow-hidden`}>
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-architectural"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-para-charcoal/80 via-para-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Metadata Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-para-ivory flex flex-col justify-end">
                      <div className="flex items-center justify-between font-sans text-[10px] tracking-ultra text-para-sandstone uppercase mb-2">
                        <span>0{idx + 1} / {project.category}</span>
                        <span>{project.location}</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-4xl font-light tracking-wide group-hover:text-para-sandstone transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-sans text-xs text-para-ivory/80 line-clamp-2 mt-2 font-light hidden sm:block">
                        {project.statement}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Projects Action */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 font-sans text-xs tracking-ultra uppercase border border-para-charcoal px-8 py-4 hover:bg-para-charcoal hover:text-para-ivory transition-colors duration-300"
            data-cursor="cta"
          >
            <span>VIEW COMPLETE ARCHITECTURAL PORTFOLIO</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
