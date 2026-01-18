"use client";
import { motion } from "framer-motion";

const SPECS = [
  { label: "FRONTEND", val: "Next.js / React", desc: "Server Components, Motion" },
  { label: "BACKEND", val: "Node / Python", desc: "FastAPI, Express, Postgres" },
  { label: "AI / ML", val: "TensorFlow / PyTorch", desc: "Computer Vision, LLMs" },
  { label: "DESIGN", val: "Figma / 3D", desc: "UI/UX, Blender, Spline" },
];

export default function TechSpecs() {
  return (
    <section id="specs" className="border-y border-border bg-card-2 py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-2 w-2 bg-neon-magenta animate-pulse" />
          <h3 className="font-mono text-sm font-bold tracking-widest text-muted">TECHNICAL SPECIFICATIONS</h3>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-card p-8 transition-colors hover:bg-card-2"
            >
              <div className="font-mono text-xs text-rogCyan mb-2">{spec.label}</div>
              <div className="text-2xl font-bold text-fg mb-2 group-hover:text-rogCyan transition-colors">{spec.val}</div>
              <div className="text-sm text-muted-2">{spec.desc}</div>
              
              {/* Hover Corner Effect */}
              <div className="absolute right-2 top-2 h-2 w-2 border-r border-t border-transparent transition-all group-hover:h-4 group-hover:w-4 group-hover:border-border" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

