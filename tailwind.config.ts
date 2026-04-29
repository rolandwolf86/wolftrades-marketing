import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        black2: "var(--black2)",
        gold: "var(--gold)",
        parchment: "var(--parchment)",
        gray: "var(--gray)",
        bull: "var(--bull)",
        bear: "var(--bear)",
        "apex-green": "var(--apex-green)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-barlow-condensed)",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gold-pulse": {
          "0%, 100%": { opacity: "0.04" },
          "50%": { opacity: "0.08" },
        },
        "pulse-bull": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(22, 163, 74, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(22, 163, 74, 0)",
          },
        },
        "pulse-gold": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.45)",
          },
          "50%": {
            boxShadow: "0 0 0 12px rgba(201, 168, 76, 0)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "gold-pulse": "gold-pulse 4s ease-in-out infinite",
        "pulse-bull": "pulse-bull 2s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2.4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
