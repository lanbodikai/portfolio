import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Help Next/Turbopack choose the correct project root on Windows
  // to avoid ENOENT temp manifest issues when multiple lockfiles exist.
  // @ts-expect-error turbopack field is supported by Next 15 runtime
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
