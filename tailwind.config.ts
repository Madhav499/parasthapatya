import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        para: {
          ivory: "#F9F8F3",
          "ivory-light": "#FDFCFA",
          "ivory-dark": "#ECE7DE",
          sandstone: "#D8C7B5",
          "sandstone-light": "#E9DFD3",
          stone: "#C2B29F",
          charcoal: "#141412",
          "charcoal-light": "#1E1E1B",
          "charcoal-muted": "#2A2A26",
          bronze: "#8C7456",
          "bronze-light": "#A89070",
          terracotta: "#A35238",
          saffron: "#C46E3A",
          gold: "#C9A768",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
      },
      fontSize: {
        "hero-title": "clamp(3.5rem, 8.5vw, 9.5rem)",
        "section-title": "clamp(2.5rem, 5.5vw, 6.5rem)",
        "subtitle": "clamp(1.25rem, 2.2vw, 2.25rem)",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
      animation: {
        "subtle-zoom": "subtleZoom 25s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        subtleZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "architectural": "cubic-bezier(0.25, 1, 0.5, 1)",
        "luxury": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
