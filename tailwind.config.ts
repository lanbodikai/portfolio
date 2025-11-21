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
        // UPDATED: Cyber-Violet & Cyan Theme
        rogRed: '#8b5cf6',   // Now Neon Purple (Violet-500)
        rogCyan: '#06b6d4',  // Now Neon Cyan (Cyan-500)
        rogDark: '#050507',  // Slightly purple-tinted black
        rogGray: '#1a1a1c',
      },
      fontFamily: {
        tech: ['var(--font-orbitron)', 'sans-serif'],
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