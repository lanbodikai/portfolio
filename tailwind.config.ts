// tailwind.config.ts
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
    ink: {
      900: "#0A0A0D",
      850: "#101016",
    },
    neon: {
      violet: "#8B5CF6",
      magenta: "#F43F5E",
      cyan: "#22D3EE",
      red: "#EF4444",
    },
  },
}
  },
  plugins: [],
};
export default config;
