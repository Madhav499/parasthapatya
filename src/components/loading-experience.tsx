"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingExperience({ onComplete }: { onComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-para-charcoal flex flex-col items-center justify-center px-6"
        >
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 15, tracking: "0.2em" }}
              animate={{ opacity: 1, y: 0, tracking: "0.35em" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-6xl text-para-ivory font-light uppercase"
            >
              PARĀ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-[10px] sm:text-xs tracking-[0.4em] uppercase text-para-sandstone mt-2 font-medium"
            >
              THE STHAPATYA STUDIO
            </motion.p>

            {/* Subtle architectural horizontal line expanding from center */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="w-32 sm:w-48 h-[1px] bg-para-bronze/40 mt-6 transform origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
