import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rogRed: '#ff0033',
        rogCyan: '#00f0ff',
        rogDark: '#060606',
        rogGray: '#1a1a1a',
      },
      fontFamily: {
        tech: ['var(--font-orbitron)', 'sans-serif'], // We will load this in layout
        body: ['var(--font-roboto)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;