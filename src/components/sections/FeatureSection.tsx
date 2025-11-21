"use client";
import { motion } from "framer-motion";
import DecodeText from "@/components/ui/DecodeText";

interface FeatureProps {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  description: React.ReactNode;
  align?: "left" | "right";
  tags?: string[];
  ctaHref?: string;
}

export default function FeatureSection({
  id,
  title,
  subtitle,
  img,
  description,
  align = "left",
  tags,
  ctaHref,
}: FeatureProps) {
  const isLeft = align === "left";

  return (
    <section id={id} className="relative w-full overflow-hidden bg-[#050505] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-24 md:px-12">
        
        {/* TEXT COLUMN */}
        <div className={`flex flex-col justify-center ${isLeft ? "md:order-1" : "md:order-2"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-cyan-400" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                {subtitle}
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl lg:text-7xl">
              <DecodeText text={title} />
            </h2>

            <div className="mt-8 text-lg leading-relaxed text-gray-400">
              {description}
            </div>

            {tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {ctaHref && (
              <div className="mt-10">
                <a
                  href={ctaHref}
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-cyan-400"
                >
                  <span className="border-b-2 border-white pb-1 transition-all group-hover:border-cyan-400">
                    Explore Project
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            )}
          </motion.div>
        </div>

        {/* IMAGE COLUMN */}
        <div className={`relative ${isLeft ? "md:order-2" : "md:order-1"}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-20%" }}
            className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900"
          >
            {/* Image/Video */}
            {img.endsWith(".mp4") ? (
              <video src={img} autoPlay muted loop playsInline className="h-full w-full object-cover opacity-90" />
            ) : (
              <img src={img} alt={title} className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" />
            )}
            
            {/* Tech Overlays */}
            <div className="pointer-events-none absolute inset-0 border border-white/10" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-white/20" />
            <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-white/20" />
            
            {/* Scanline */}
            <div className="scanline absolute inset-0 opacity-20 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}