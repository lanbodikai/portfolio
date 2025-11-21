"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroVideo() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: Video opacity fades, Text moves down slowly
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Background Video with Scale Effect */}
      <motion.div 
        style={{ scale, opacity }} 
        className="absolute inset-0 z-0"
      >
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          playsInline
          muted
          loop
          poster="/hero/poster.jpg"
        >
          <source src="/vid/hero.webm" type="video/webm" />
          <source src="/vid/hero.mp4" type="video/mp4" />
        </video>
        {/* Tech Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,18,0)_2px,transparent_2px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </motion.div>

      {/* Floating Content */}
      <div className="absolute inset-0 z-10 grid place-items-center">
        <motion.div 
          style={{ y: textY }}
          className="px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             {/* "Glitch" style title effect */}
            <h1 className="text-7xl font-black uppercase tracking-tighter text-white md:text-[10rem] leading-none mix-blend-overlay">
              Kai Zhao
            </h1>
            <h1 className="absolute inset-0 top-0 text-7xl font-black uppercase tracking-tighter text-white/20 blur-sm md:text-[10rem] leading-none">
              Kai Zhao
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 font-mono text-sm tracking-[0.5em] text-cyan-400 md:text-base"
          >
            FULL STACK · ENGINEERING · DESIGN
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}