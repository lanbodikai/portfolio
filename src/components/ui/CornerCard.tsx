"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface CornerCardProps {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  href?: string;
  align?: "left" | "right";
  tech?: string[];
}

export default function CornerCard({ title, subtitle, description, img, href = "#", align = "left", tech = [] }: CornerCardProps) {
  return (
    <div className={`flex flex-col gap-7 py-10 md:gap-12 md:py-12 md:items-center ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      
      {/* Image Card with Corners */}
      <Link href={href} className="group relative w-full cursor-pointer md:w-[58%]">
        <motion.div
          className="relative origin-center will-change-transform"
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.9 }}
        >
          {/* Animated Corners */}
          <div className="absolute left-0 top-0 z-20 h-4 w-4 border-l border-t border-border transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />
          <div className="absolute right-0 top-0 z-20 h-4 w-4 border-r border-t border-border transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />
          <div className="absolute bottom-0 left-0 z-20 h-4 w-4 border-b border-l border-border transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />
          <div className="absolute bottom-0 right-0 z-20 h-4 w-4 border-b border-r border-border transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />

          <div className="relative aspect-video w-full overflow-hidden border border-[var(--border)] bg-card-2 shadow-[0_18px_70px_rgba(41,112,232,0.08)]">
            {img.endsWith(".mp4") ? (
              <video src={img} autoPlay muted loop className="h-full w-full object-cover" />
            ) : (
              <img src={img} alt={title} className="h-full w-full object-cover" />
            )}
          </div>
        </motion.div>
      </Link>

      {/* Text Content */}
      <div className={`w-full md:w-[42%] ${align === "right" ? "text-left md:text-right" : "text-left"}`}>
        <h3 className="mb-2 font-mono text-xs uppercase leading-snug tracking-[0.12em] text-rogCyan md:text-sm">{subtitle}</h3>
        <h4 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-fg md:text-4xl">{title}</h4>
        <p className="mb-5 text-base leading-relaxed text-muted md:text-lg">{description}</p>

        {tech.length > 0 && (
          <div className={`mb-6 flex flex-wrap gap-2 ${align === "right" ? "md:justify-end" : ""}`}>
            {tech.map((item) => (
              <span
                key={item}
                className="border border-[var(--border)] bg-white/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <Link href={href} className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.12em] text-rogCyan hover:text-fg">
          View Project <span>→</span>
        </Link>
      </div>
    </div>
  );
}

