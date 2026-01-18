import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--fg-muted)",
        "muted-2": "var(--fg-muted)",
        card: "var(--card)",
        "card-2": "var(--card-2)",
        border: "var(--border)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
        "accent-contrast": "var(--accent-contrast)",
        "neon-cyan": "rgb(var(--neon-cyan) / <alpha-value>)",
        "neon-violet": "rgb(var(--neon-violet) / <alpha-value>)",
        "neon-magenta": "rgb(var(--neon-magenta) / <alpha-value>)",
        rogRed: "rgb(var(--accent) / <alpha-value>)",
        rogCyan: "rgb(var(--accent-2) / <alpha-value>)",
        rogDark: "var(--bg)",
        rogGray: "var(--card-2)",
      },
      fontFamily: {
        tech: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(var(--grid) / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid) / 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
