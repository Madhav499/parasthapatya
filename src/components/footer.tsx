"use client";

import Link from "next/link";
import { STUDIO_INFO } from "@/data/studio";

export default function Footer() {
  return (
    <footer className="bg-para-charcoal-light text-para-ivory border-t border-para-charcoal-muted pt-20 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-para-charcoal-muted">
          {/* Left Column Brand Mark */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Link href="/" className="group" data-cursor="cta">
              <span className="font-serif text-5xl sm:text-7xl font-light text-para-ivory tracking-[0.2em] group-hover:text-para-sandstone transition-colors">
                PARĀ
              </span>
              <p className="font-sans text-xs tracking-ultra text-para-sandstone uppercase mt-2">
                THE STHAPATYA STUDIO
              </p>
            </Link>

            <p className="font-sans text-sm text-para-ivory/60 font-light max-w-sm pt-2 leading-relaxed">
              {STUDIO_INFO.statement}
            </p>

            <div className="pt-4 text-xs font-sans text-para-bronze tracking-widest uppercase">
              PRINCIPAL ARCHITECT: {STUDIO_INFO.principalArchitect}
            </div>
          </div>

          {/* Center Column Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3 font-sans text-xs tracking-ultra uppercase">
            <span className="text-para-sandstone font-bold mb-2 text-[10px]">
              STUDIO NAVIGATION
            </span>
            <Link href="/projects" className="text-para-ivory/70 hover:text-para-ivory transition-colors" data-cursor="cta">
              BUILDS & PROJECTS
            </Link>
            <Link href="/studio" className="text-para-ivory/70 hover:text-para-ivory transition-colors" data-cursor="cta">
              STUDIO PHILOSOPHY
            </Link>
            <Link href="/services" className="text-para-ivory/70 hover:text-para-ivory transition-colors" data-cursor="cta">
              OUR SERVICES
            </Link>
            <Link href="/#vastu" className="text-para-ivory/70 hover:text-para-ivory transition-colors" data-cursor="cta">
              VASTU & ENERGY
            </Link>
            <Link href="/contact" className="text-para-ivory/70 hover:text-para-ivory transition-colors" data-cursor="cta">
              CONTACT & CONSULTATION
            </Link>
          </div>

          {/* Right Column Location & Contact Info */}
          <div className="md:col-span-4 flex flex-col space-y-3 font-sans text-xs text-para-ivory/70">
            <span className="text-para-sandstone font-bold tracking-ultra uppercase mb-2 text-[10px]">
              ATELIER INFORMATION
            </span>
            <p className="font-light">{STUDIO_INFO.address}</p>
            <p className="font-light">PHONE: {STUDIO_INFO.phone}</p>
            <p className="font-light">EMAIL: {STUDIO_INFO.email}</p>
            <div className="pt-3">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-para-sandstone hover:text-para-ivory transition-colors tracking-widest uppercase text-[11px]"
                data-cursor="cta"
              >
                INSTAGRAM: {STUDIO_INFO.instagramHandle} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans tracking-widest text-para-stone/60 uppercase">
          <div>
            © {new Date().getFullYear()} PARĀ — THE STHAPATYA STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-2 sm:mt-0">
            RAJKOT — GUJARAT — INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
