import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3F0E8",
          pure: "#FFFDF7",
          muted: "#E8E4DA",
          card: "#EFECE4",
        },
        ink: {
          DEFAULT: "#0B1B33",
          light: "#15233A",
          muted: "#596273",
          subtle: "#303B4C",
          faint: "#8C96A5",
        },
        teal: {
          DEFAULT: "#2DD4BF",
          accent: "#2DD4BF",
          dark: "#20BCA8",
        },
        line: {
          DEFAULT: "rgba(11, 27, 51, 0.22)",
          subtle: "rgba(11, 27, 51, 0.12)",
          heavy: "rgba(11, 27, 51, 0.85)",
        },
      },
      spacing: {
        "gutter-desktop": "48px",
        "gutter-mobile": "22px",
        "section-desktop": "92px",
        "section-mobile": "68px",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        "3xs": ["0.5625rem", { lineHeight: "0.75rem" }],
      },
      letterSpacing: {
        widest: "0.14em",
        widester: "0.18em",
      },
      maxWidth: {
        shell: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;

