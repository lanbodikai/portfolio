"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StickyProps {
  id: string;
  title: string;
  img: string;
  eyebrow: string;
  children: React.ReactNode;
  align?: "left" | "right";
  tags?: string[];
  ctaHref?: string;
  index: number; // Controls Z-Index for stacking
}

export default function StickyScrollSection({
  id,
  title,
  img,
  eyebrow,
  children,
  align = "left",
  tags,
  ctaHref,
  index,
}: StickyProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Parallax effect for the image inside the card
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id={id}
      ref={ref}
      className="sticky top-0 min-h-screen w-full overflow-hidden bg-rogDark border-t border-white/10"
      style={{ zIndex: index }}
    >
      <div className="absolute inset-0 tech-bg opacity-30 pointer-events-none" />
      
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 md:px-12">
        <div className={`mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 ${align === "right" ? "" : "md:flex-row-reverse"}`}>
          
          {/* Text Content */}
          <div className={`flex flex-col justify-center ${align === "right" ? "md:order-1" : "md:order-2"}`}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-rogRed" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-rogRed">
                {eyebrow}
              </span>
            </div>

            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-7xl">
              {title}
            </h2>

            <div className="mb-8 text-lg leading-relaxed text-gray-400">
              {children}
            </div>

            {tags && (
              <div className="mb-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-rogCyan">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {ctaHref && (
              <a
                href={ctaHref}
                target="_blank"
                className="group inline-flex w-fit items-center gap-2 border border-rogRed bg-transparent px-8 py-3 font-bold uppercase tracking-widest text-white transition-all hover:bg-rogRed hover:text-white"
              >
                <span>Launch System</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>

          {/* Image Content */}
          <div className={`relative h-[50vh] w-full overflow-hidden border border-white/10 bg-black md:h-[60vh] ${align === "right" ? "md:order-2" : "md:order-1"}`}>
            {/* Corner Decorations */}
            <div className="absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-rogRed" />
            <div className="absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-rogCyan" />
            <div className="absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-rogCyan" />
            <div className="absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-rogRed" />

            {img.endsWith(".mp4") ? (
              <motion.video
                style={{ y: imageY }}
                src={img}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-80"
              />
            ) : (
              <motion.img
                style={{ y: imageY }}
                src={img}
                alt={title}
                className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 hover:grayscale-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}