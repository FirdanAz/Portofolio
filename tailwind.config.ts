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
        dark: {
          DEFAULT: "#050505",
          surface: "#0D0D0D",
          card: "#121212",
          cardHover: "#181818",
        },
        "accent-red": {
          DEFAULT: "#E11D2E",
          hover: "#C81423",
          glow: "rgba(225, 29, 46, 0.35)",
        },
        "panel-light": {
          DEFAULT: "#F4F4F4",
          card: "#FFFFFF",
          muted: "#E5E5E5",
        },
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        "border-light": "rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widestMono: "0.22em",
        wideMono: "0.15em",
      },
      borderRadius: {
        "panel-top": "100px",
      },
      maxWidth: {
        shell: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
