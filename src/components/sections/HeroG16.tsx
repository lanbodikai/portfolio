"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CursorBackground from "@/components/sections/CursorBackground";

export default function HeroG16() {
  const focusAreas = ["AI Systems", "Full-stack", "Product"];

  return (
    <section id="hero" className="relative min-h-[86svh] w-full overflow-hidden bg-transparent md:min-h-[88vh]">
      <CursorBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 flex min-h-[86svh] flex-col items-center justify-center px-6 pb-16 pt-20 text-center md:min-h-[88vh]"
      >
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[rgba(41,112,232,0.24)] bg-card ring-1 ring-[rgba(41,112,232,0.32)] shadow-[0_24px_80px_rgba(41,112,232,0.12)] md:h-40 md:w-40">
            <Image
              src="/about/headshot.png"
              alt="Kai Zhao"
              fill
              priority
              sizes="(min-width: 768px) 160px, 144px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl font-bold leading-none tracking-tight text-fg md:text-8xl">
            Kai Zhao
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-2"
        >
          {focusAreas.map((item) => (
            <span
              key={item}
              className="border border-[var(--border)] bg-white/70 px-3 py-2 text-[var(--fg-muted)] backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 md:bottom-10"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-2">Scroll</div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-rogCyan to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
