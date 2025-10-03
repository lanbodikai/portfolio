"use client";
import { motion } from "framer-motion";

const IMGS = ["/gallery/1.jpg","/gallery/2.jpg","/gallery/3.jpg","/gallery/4.jpg","/gallery/5.jpg","/gallery/6.jpg"];

export default function GalleryMarquee() {
  return (
    
    <section id="gallery" className="relative overflow-hidden py-16">
      <Marquee />
      <Marquee reverse delay={6} />
    </section>
  );
}

function Marquee({ reverse = false, delay = 0 }: { reverse?: boolean; delay?: number }) {
  return (
    <div className="flex gap-6 overflow-hidden py-4">
      <motion.div
        className="flex min-w-max gap-6"
        initial={{ x: reverse ? 0 : -2000 }}
        animate={{ x: reverse ? -2000 : 0 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity, delay }}
      >
        {[...IMGS, ...IMGS].map((src, i) => (
          <div key={i} className="h-40 w-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
