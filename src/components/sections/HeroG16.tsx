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
    <section ref={ref} id="hero" className="relative h-screen w-full overflow-hidden bg-black">
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

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-black text-white text-[12vw] leading-[0.8] tracking-tighter mix-blend-difference">
            KAI ZHAO
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg font-medium text-gray-300 md:text-xl"
        >
          Full Stack Engineer & AI Product Designer.<br />
          <span className="text-cyan-400">Building the future of AI products.</span>
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <div className="text-[10px] font-bold tracking-widest text-gray-500">SCROLL TO START</div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}