"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check target hover context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest("[data-cursor='project']");
      const ctaTarget = target.closest("[data-cursor='cta']");
      const exploreTarget = target.closest("[data-cursor='explore']");

      if (projectTarget) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (ctaTarget) {
        setIsHovered(true);
        setCursorText("OPEN");
      } else if (exploreTarget) {
        setIsHovered(true);
        setCursorText("EXPLORE");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: position.x - (isHovered ? 40 : 8),
        y: position.y - (isHovered ? 40 : 8),
        width: isHovered ? 80 : 16,
        height: isHovered ? 80 : 16,
        backgroundColor: "rgba(249, 248, 243, 0.95)",
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.5,
      }}
    >
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="text-[10px] font-sans tracking-ultra font-bold text-para-charcoal select-none uppercase"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
