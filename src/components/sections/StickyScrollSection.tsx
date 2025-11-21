"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DecodeText from "@/components/ui/DecodeText";

interface ProjectProps {
  id: string;
  title: string;
  img: string;
  eyebrow: string;
  align?: "left" | "right";
  children: React.ReactNode;
  tags: string[];
  ctaHref?: string;
}

export default function StickyScrollSection({
  id,
  title,
  img,
  eyebrow,
  align = "right",
  children,
  tags,
  ctaHref,
}: ProjectProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 1. Entry: Slide up slightly
  const yEntry = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacityEntry = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // 2. Exit: As we scroll past, scale down and fade to black (Stacking effect)
  // This creates the depth perception that the previous section is "behind" the new one
  const scaleExit = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
  const opacityExit = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const brightness = useTransform(scrollYProgress, [0.8, 1], [1, 0.3]);

  const isRight = align === "right";

  return (
    <motion.section
      ref={containerRef}
      id={id}
      style={{ scale: scaleExit, opacity: opacityExit, filter: `brightness(${brightness})` }}
      className="sticky top-0 z-10 flex min-h-screen w-full items-center overflow-hidden border-t border-white/5 bg-[#050505] py-10"
    >
      {/* Background Elements */}
      <div className="bg-grid-pattern absolute inset-0 z-0 opacity-30" />
      
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-0">
        
        {/* IMAGE SIDE */}
        <div className={`relative flex items-center justify-center ${isRight ? "md:order-2" : "md:order-1"}`}>
          <motion.div
            style={{ y: yEntry, opacity: opacityEntry }}
            className="relative aspect-[4/3] w-full max-w-[650px] overflow-hidden border border-white/10 bg-black/50 md:aspect-[16/10]"
          >
            {/* HUD Brackets */}
            <div className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-cyan-500" />
            <div className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-cyan-500" />
            <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-cyan-500" />
            
            {/* Media */}
            {img.endsWith(".mp4") ? (
              <video src={img} autoPlay muted loop playsInline className="h-full w-full object-cover opacity-80" />
            ) : (
              <img src={img} alt={title} className="h-full w-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-100" />
            )}

            {/* Scanline Overlay */}
            <div className="scanline absolute inset-0 pointer-events-none mix-blend-soft-light" />
          </motion.div>
        </div>

        {/* TEXT SIDE */}
        <div className={`flex flex-col justify-center px-4 md:px-12 ${isRight ? "md:order-1" : "md:order-2"}`}>
          <motion.div style={{ y: yEntry }}>
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 text-cyan-400">
              <span className="h-[2px] w-6 bg-cyan-400" />
              <DecodeText text={eyebrow} className="text-sm font-bold" />
            </div>

            {/* Title */}
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
              {title}
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              {children}
            </div>

            {/* Tech Specs / Tags */}
            <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-xs text-gray-400">
              {tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-neon-violet" />
                  {tag}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {ctaHref && (
              <motion.a
                href={ctaHref}
                target="_blank"
                className="group mt-10 inline-flex items-center gap-4 border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-cyan-500 hover:bg-cyan-500/10"
                whileHover={{ x: 5 }}
              >
                <span>Launch System</span>
                <span className="font-mono text-cyan-400 group-hover:text-white">-{">"}</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}