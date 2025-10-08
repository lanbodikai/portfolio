"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeatureSpotlight() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-25% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#03040a] section-pad section-pad-tall text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* subtle top glow + thin neon divider */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1c2a64_0%,transparent_55%)] opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#22d3ee]" />

      {/* ROG-style centered typographic block */}
      <div className="relative section-narrow text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-[#a78bfa]">
          \ PROFILE
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          Product‑minded Engineer & Designer
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          Create something out of nothing.
        </p>
      </div>
    </motion.section>
  );
}
