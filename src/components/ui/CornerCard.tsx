"use client";
import Link from "next/link";

interface CornerCardProps {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  href?: string;
  align?: "left" | "right"; // To alternate layout like the reference
}

export default function CornerCard({ title, subtitle, description, img, href = "#", align = "left" }: CornerCardProps) {
  return (
    <div className={`flex flex-col gap-10 py-12 md:items-center ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      
      {/* Image Card with Corners */}
      <Link href={href} className="group relative w-full cursor-pointer md:w-2/3">
        {/* Animated Corners */}
        <div className="absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-border transition-all duration-300 group-hover:h-full group-hover:w-full dark:border-rogRed dark:group-hover:border-rogCyan" />
        <div className="absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-border transition-all duration-300 group-hover:h-full group-hover:w-full dark:border-rogRed dark:group-hover:border-rogCyan" />
        <div className="absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-border transition-all duration-300 group-hover:h-full group-hover:w-full dark:border-rogRed dark:group-hover:border-rogCyan" />
        <div className="absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-border transition-all duration-300 group-hover:h-full group-hover:w-full dark:border-rogRed dark:group-hover:border-rogCyan" />

        <div className="relative aspect-video w-full overflow-hidden bg-card-2">
          {img.endsWith('.mp4') ? (
             <video src={img} autoPlay muted loop className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
             <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          )}
        </div>
      </Link>

      {/* Text Content */}
      <div className={`w-full md:w-1/3 ${align === "right" ? "text-left md:text-right" : "text-left"}`}>
        <h3 className={`mb-2 font-tech text-xl ${align === "right" ? "text-rogCyan" : "text-rogRed"}`}>{subtitle}</h3>
        <h4 className="mb-4 font-tech text-3xl font-bold text-fg md:text-4xl">{title}</h4>
        <p className="mb-6 text-muted">{description}</p>

        <Link href={href} className={`flex items-center gap-2 font-bold uppercase tracking-wider hover:text-fg ${align === "right" ? "text-rogRed justify-start md:justify-end" : "text-rogCyan justify-start"}`}>
          View Project <span>→</span>
        </Link>
      </div>
    </div>
  );
}

