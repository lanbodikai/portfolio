"use client";
import Link from "next/link";

interface CornerCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  img: string;
  href?: string;
  align?: "left" | "right"; // To alternate layout like the reference
}

export default function CornerCard({ title, subtitle, description, tags, img, href = "#", align = "left" }: CornerCardProps) {
  return (
    <div className={`flex flex-col gap-10 py-12 md:items-center ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      
      {/* Image Card with Corners */}
      <Link href={href} className="group relative w-full md:w-3/5 cursor-pointer">
        {/* Animated Corners */}
        <div className="absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-rogRed transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />
        <div className="absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-rogRed transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />
        <div className="absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-rogRed transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />
        <div className="absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-rogRed transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-rogCyan" />

        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
          {img.endsWith('.mp4') ? (
             <video src={img} autoPlay muted loop className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
          ) : (
             <img src={img} alt={title} className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </Link>

      {/* Text Content */}
      <div className={`w-full md:w-2/5 ${align === "right" ? "text-left md:text-right" : "text-left"}`}>
        <h3 className={`mb-2 font-tech text-xl ${align === "right" ? "text-rogCyan" : "text-rogRed"}`}>{subtitle}</h3>
        <h4 className="mb-4 font-tech text-3xl font-bold text-white md:text-4xl">{title}</h4>
        <p className="mb-6 text-gray-400">{description}</p>
        
        <div className={`mb-6 flex flex-wrap gap-2 ${align === "right" ? "justify-start md:justify-end" : "justify-start"}`}>
          {tags.map(tag => (
            <span key={tag} className="border border-gray-700 px-2 py-1 font-tech text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <Link href={href} className={`flex items-center gap-2 font-bold uppercase tracking-wider hover:text-white ${align === "right" ? "text-rogRed justify-start md:justify-end" : "text-rogCyan justify-start"}`}>
          View Mission <span>→</span>
        </Link>
      </div>
    </div>
  );
}