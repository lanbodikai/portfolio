"use client";
import { motion } from "framer-motion";

const items = [
  { id: "hero", label: "Intro" },
  { id: "brief", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "author", label: "About" },
  { id: "proj-a", label: "Proj A" },
  { id: "proj-b", label: "Proj B" },
  { id: "proj-c", label: "Proj C" },
];

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white/85 bg-black/30 backdrop-blur-sm"
    >
      <a href="#" className="font-semibold tracking-tight">kai.dev</a>
      <div className="hidden gap-6 md:flex">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} className="relative hover:text-white">
            {it.label}
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[linear-gradient(90deg,#F43F5E,#8B5CF6)] transition-all group-hover:w-full" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
