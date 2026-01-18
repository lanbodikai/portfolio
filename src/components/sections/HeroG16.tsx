"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroG16() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-60">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/poster.jpg"
        >
          <source src="/vid/hero.webm" type="video/webm" />
          <source src="/vid/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Color Wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rogCyan/35 via-transparent to-rogRed/35 mix-blend-screen" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-rogCyan/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-rogRed/25 blur-3xl" />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-12 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-border bg-card shadow-lg md:h-40 md:w-40">
            <img src="/about/headshot.jpg" alt="Kai Zhao" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-black text-fg text-[10vw] leading-[0.8] tracking-tighter mix-blend-difference md:text-[8vw]">
            Kai Zhao
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg font-medium text-muted md:text-xl"
        >
           Full Stack Engineer & AI Product Developer.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <div className="text-[10px] font-bold tracking-widest text-muted-2">SCROLL TO START</div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-rogCyan to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
