"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "INTRO" },
  { id: "specs", label: "SPECS" },
  { id: "mouse-fit", label: "MOUSE-FIT" },
  { id: "scratch-gpt", label: "SCRATCH-GPT" },
  { id: "rocketry", label: "ROCKETRY" },
  { id: "robotics", label: "ROBOTICS" },
  { id: "gallery", label: "GALLERY" },
];

export default function ScrollSpyNav() {
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll spy logic
      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, offset: el?.offsetTop || 0, height: el?.offsetHeight || 0 };
      });

      const scrollPos = window.scrollY + window.innerHeight / 3;
      const current = offsets.findLast((s) => scrollPos >= s.offset);
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex">
      {/* Progress Line Background */}
      <div className="absolute right-[5px] top-0 h-full w-[2px] bg-border">
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }} 
          className="w-full bg-rogCyan"
        />
      </div>

      {SECTIONS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group relative flex items-center justify-end gap-4 py-1 outline-none"
        >
          <span 
            className={`text-[10px] font-bold tracking-widest transition-all duration-300 ${
              active === item.id ? "text-fg opacity-100 translate-x-0" : "text-muted-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {item.label}
          </span>
          <div 
            className={`relative z-10 h-3 w-3 rotate-45 border transition-all duration-300 ${
              active === item.id ? "bg-rogCyan border-border dark:border-rogCyan scale-100" : "bg-bg border-border scale-75 group-hover:border-fg"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

