"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-black rog-neon-bg"
      aria-label="Hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background video */}
      <video
        className="absolute left-1/2 top-1/2 z-0 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        poster="/hero/poster.jpg" /* matches public/hero/poster.jpg */
      >
        {/* Provide at least one of these; webm first if you have it */}
        <source src="/vid/hero.webm" type="video/webm" />
        <source src="/vid/hero.mp4" type="video/mp4" />
        {/* Fallback text for accessibility */}
        Your browser does not support the background video.
      </video>

      {/* Darken for readability */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Centered content (fit within 16:10 safe width via section-narrow) */}
      <div className="rog-layer absolute inset-0 grid place-items-center px-6 text-center">
        <div className="section-narrow">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 16 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-5xl text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)] md:text-8xl"
          >
            Kai Zhao
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mt-4 text-xl font-semibold text-white/90 md:text-2xl"
          >
            Creator • Innovator • Leader
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
