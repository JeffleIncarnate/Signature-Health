import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-eb-garamond)"],
        text: ["var(--font-inter)"],
        fancy: ["var(--font-condiment)"],
      },
      colors: {
        white: "var(--white)",
        offWhite: "var(--offWhite)",
        green: "var(--green)",
        gold: "var(--gold)",
        black: "var(--black)",
        green30: "rgba(9, 42, 47, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
