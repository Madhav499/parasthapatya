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
          charcoal: "#050505",
          "charcoal-light": "#0B0B0B",
          "charcoal-muted": "#161616",
          ivory: "#F2EEE7",
          "ivory-light": "#F8F6F2",
          "ivory-dark": "#E5DFD5",
          sandstone: "#D4C4B2",
          stone: "#B5A492",
          bronze: "#8C7456",
          "bronze-muted": "#6E5B44",
          terracotta: "#9C4C33",
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
      transitionTimingFunction: {
        "architectural": "cubic-bezier(0.25, 1, 0.5, 1)",
        "luxury": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
