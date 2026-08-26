"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { STUDIO_INFO } from "@/data/studio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "BUILDS", href: "/projects" },
    { name: "STUDIO", href: "/studio" },
    { name: "SERVICES", href: "/services" },
    { name: "VASTU", href: "/#vastu" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-para-charcoal/90 backdrop-blur-md border-b border-para-charcoal-muted/30 py-4"
            : "bg-gradient-to-b from-para-charcoal/80 via-para-charcoal/40 to-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="group flex flex-col" data-cursor="cta">
            <span className="font-serif text-2xl sm:text-3xl text-para-ivory tracking-[0.25em] font-light leading-none group-hover:text-para-sandstone transition-colors duration-300">
              PARĀ
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.4em] text-para-sandstone/80 uppercase font-medium mt-1">
              THE STHAPATYA STUDIO
            </span>
          </Link>

          {/* Desktop Links Center/Right */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-xs tracking-widest uppercase transition-colors duration-300 py-1 ${
                    isActive ? "text-para-ivory font-semibold" : "text-para-ivory/70 hover:text-para-ivory"
                  }`}
                  data-cursor="cta"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-para-bronze"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 font-sans text-xs tracking-widest uppercase text-para-ivory border border-para-ivory/20 px-5 py-2.5 hover:border-para-sandstone hover:bg-para-ivory hover:text-para-charcoal transition-all duration-300"
              data-cursor="cta"
            >
              <span>START A CONVERSATION</span>
              <span className="text-para-bronze group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button Right */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col space-y-1.5 p-2 text-para-ivory focus:outline-none"
            aria-label="Open Navigation Curtain"
          >
            <span className="w-6 h-[1px] bg-para-ivory block"></span>
            <span className="w-4 h-[1px] bg-para-sandstone block ml-auto"></span>
            <span className="w-6 h-[1px] bg-para-ivory block"></span>
          </button>
        </div>
      </header>

      {/* Editorial Mobile Curtain Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-para-charcoal text-para-ivory flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar inside curtain */}
            <div className="flex items-center justify-between border-b border-para-charcoal-muted pb-6">
              <div>
                <span className="font-serif text-3xl text-para-ivory tracking-[0.25em]">PARĀ</span>
                <p className="font-sans text-[9px] tracking-[0.4em] text-para-sandstone uppercase">THE STHAPATYA STUDIO</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-sans tracking-ultra uppercase text-para-sandstone hover:text-para-ivory p-2 border border-para-sandstone/20"
              >
                CLOSE ✕
              </button>
            </div>

            {/* Main Navigation Links */}
            <div className="my-auto py-12 flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl sm:text-5xl font-light hover:text-para-sandstone transition-colors flex items-baseline justify-between group"
                  >
                    <span>{link.name}</span>
                    <span className="font-sans text-xs tracking-widest text-para-bronze opacity-60 group-hover:opacity-100">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center font-sans text-xs tracking-ultra uppercase bg-para-ivory text-para-charcoal py-4 border border-para-ivory hover:bg-transparent hover:text-para-ivory transition-all"
                >
                  START A CONVERSATION →
                </Link>
              </motion.div>
            </div>

            {/* Mobile Footer details */}
            <div className="border-t border-para-charcoal-muted pt-6 flex flex-col sm:flex-row justify-between text-xs text-para-stone font-sans space-y-2 sm:space-y-0">
              <p>{STUDIO_INFO.location}</p>
              <p>{STUDIO_INFO.phone}</p>
              <p>{STUDIO_INFO.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
