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
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        display: [
          "var(--font-barlow-condensed)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
