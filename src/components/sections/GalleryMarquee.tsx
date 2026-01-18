"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Two strips with a total of 9 items.
// Top strip starts from picture 1; bottom strip starts from picture 5,
// both loop continuously through all 9.
const SOURCES: string[] = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.mp4",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.mp4",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.mp4",
];

export default function GalleryMarquee() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Marquee sources={SOURCES} speed={28} />
      <Marquee sources={[...SOURCES.slice(1), ...SOURCES.slice(0, 3)]} reverse speed={28} />
    </motion.section>
  );
}

function Marquee({ reverse = false, speed = 30, sources }: { reverse?: boolean; speed?: number; sources: string[] }) {
  return (
    <div className="section-narrow overflow-hidden py-4">
      <div
        className={["marquee-track", reverse ? "reverse" : ""].join(" ")}
        style={{ ["--speed" as any]: `${speed}s` }}
      >
        <div className="flex min-w-max gap-6">
          {sources.map((src, i) => (
            <div key={`a-${i}`} className="h-40 w-[280px] overflow-hidden rounded-xl border-2 border-border bg-card dark:border">
              {src.toLowerCase().endsWith(".mp4") ? (
                <video src={src} className="h-full w-full object-cover" autoPlay muted loop playsInline />
              ) : (
                <img src={src} alt="" className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
        <div className="flex min-w-max gap-6" aria-hidden>
          {sources.map((src, i) => (
            <div key={`b-${i}`} className="h-40 w-[280px] overflow-hidden rounded-xl border-2 border-border bg-card dark:border">
              {src.toLowerCase().endsWith(".mp4") ? (
                <video src={src} className="h-full w-full object-cover" autoPlay muted loop playsInline />
              ) : (
                <img src={src} alt="" className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

