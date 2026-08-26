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

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-para-ivory text-para-charcoal min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col space-y-4 mb-16">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold">
            ARCHITECTURAL PORTFOLIO ARCHIVE
          </span>
          <h1 className="font-serif text-section-title font-light text-para-charcoal leading-[1.02]">
            ALL BUILDS & <br />
            <span className="italic text-para-bronze font-normal">PROJECTS.</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-para-charcoal/70 max-w-2xl font-light">
            Selected residential sanctuaries, commercial landmarks, hospitality retreats, and custom retail boutiques built across Saurashtra and Western India.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-para-stone/20 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-para-charcoal text-para-ivory"
                  : "bg-para-ivory-dark/60 text-para-charcoal/70 hover:text-para-charcoal"
              }`}
              data-cursor="cta"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project: Project, idx: number) => (
            <div key={project.id} className="group">
              <Link
                href={`/projects/${project.slug}`}
                className="block relative overflow-hidden bg-para-charcoal/5"
                data-cursor="project"
              >
                <div className="relative w-full h-[420px] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-architectural"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-para-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute bottom-6 left-6 right-6 text-para-ivory">
                    <span className="font-sans text-[10px] tracking-ultra text-para-sandstone uppercase block mb-1">
                      0{idx + 1} / {project.category} — {project.location}
                    </span>
                    <h3 className="font-serif text-3xl font-light group-hover:text-para-sandstone transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
