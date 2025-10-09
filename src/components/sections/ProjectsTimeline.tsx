"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

// Duolingo-like map of projects: a winding vertical path with alternating nodes
export type ProjectNode = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  href?: string;
  accent?: string;
};

const NODES: ProjectNode[] = [
  { id: "mousefit", title: "Mouse‑Fit", img: "/projects/mousefit-hero.jpg", href: "https://mousefit.pro", desc: "Hand fit + Finder agent", accent: "#7c3aed" },
  { id: "scratchgpt", title: "ScratchGPT", img: "/projects/scratchgpt-hero.png", href: "https://stax.fun", desc: "Ideas → runnable Scratch", accent: "#22d3ee" },
  { id: "rocketry", title: "Rocketry", img: "/projects/rocketry-hero.mp4", desc: "Avionics + flight ops", accent: "#a78bfa" },
  { id: "robotics", title: "Robotics", img: "/projects/robotics-hero.png", desc: "Vision, motion, integration", accent: "#34d399" },
  { id: "prompt-agent", title: "Prompt Agent", img: "/projects/prompt-agent.jpg", desc: "Reasoning UI", accent: "#f472b6" },
];

function Media({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;
  if (src.endsWith(".mp4")) return <video className="h-full w-full object-cover" src={src} autoPlay loop muted playsInline />;
  return <img className="h-full w-full object-cover" src={src} alt={alt} />;
}

export default function ProjectsTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageW, setStageW] = useState(1000);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (!stageRef.current) return;
      setStageW(stageRef.current.clientWidth);
    });
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  // Responsive node size: scale with stage width, bounded for readability
  const NODE = Math.max(140, Math.min(220, Math.round(stageW * 0.22)));
  const GAP_Y = Math.round(NODE * 1.3); // vertical spacing scales with node
  const TOP_PAD = 40;

  const layout = useMemo(() => {
    const leftFrac = 0.18;
    const rightFrac = 0.68;
    return NODES.map((n, i) => {
      // Reverse-S: start on the right, then snake to left, then right...
      const frac = i % 2 === 0 ? rightFrac : leftFrac;
      const cx = Math.round(stageW * frac);
      const cy = TOP_PAD + i * GAP_Y + NODE / 2;
      return { ...n, x: Math.round(cx - NODE / 2), y: Math.round(cy - NODE / 2), cx, cy };
    });
  }, [stageW]);

  const stageH = TOP_PAD + (NODES.length - 1) * GAP_Y + NODE + 80;

  // Build smooth S-curve path through node centers
  const pathD = useMemo(() => {
    if (layout.length === 0) return "";
    const parts: string[] = [];
    const p0 = layout[0];
    parts.push(`M ${p0.cx},${p0.cy}`);
    for (let i = 1; i < layout.length; i++) {
      const a = layout[i - 1];
      const b = layout[i];
      const midX = (a.cx + b.cx) / 2;
      parts.push(`C ${midX},${a.cy} ${midX},${b.cy} ${b.cx},${b.cy}`);
    }
    return parts.join(" ");
  }, [layout]);

  return (
    <section ref={sectionRef} className="relative text-white">
      <div className="section-narrow section-pad">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold md:text-6xl">Projects</h1>
          <p className="mt-2 text-white/70">Explore projects along a map</p>
        </div>
      </div>

      {/* Map canvas */}
      <div ref={stageRef} className="map-stage timeline-stage relative mx-auto w-full max-w-[1000px]" style={{ height: stageH }}>
        {/* Winding path */}
        <svg className="map-path absolute left-0 top-0" width={stageW} height={stageH} viewBox={`0 0 ${stageW} ${stageH}`}>
          <defs>
            <linearGradient id="map-g" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path d={pathD} fill="none" stroke="url(#map-g)" strokeWidth={16} strokeLinecap="round" opacity={0.08} />
          <path d={pathD} fill="none" stroke="url(#map-g)" strokeWidth={8} strokeLinecap="round" opacity={0.22} />
          <path d={pathD} fill="none" stroke="url(#map-g)" strokeWidth={5} strokeLinecap="round" />
        </svg>

        {/* Nodes */}
        {layout.map((n, idx) => (
          <a
            key={n.id}
            className="group absolute"
            style={{ left: n.x, top: n.y, width: NODE, height: NODE, ["--rx" as any]: "26deg" }}
            href={n.href}
            target={n.href?.startsWith("http") ? "_blank" : undefined}
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
              const relY = (e.clientY - rect.top) / rect.height; // 0 at top, 1 at bottom
              const rx = 18 + (1 - Math.min(Math.max(relY, 0), 1)) * 18; // 18deg..36deg
              (e.currentTarget as HTMLElement).style.setProperty("--rx", `${rx}deg`);
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.setProperty("--rx", `26deg`);
            }}
          >
            <div className="island w-full h-full">
              {/* Soft ambient glow tied to accent */}
              <div className="island-glow" style={{ ["--neon" as any]: n.accent ?? "#7c3aed" }} />

              {/* Beveled shadow base (Monopoly tile vibe) */}
              <div className="diamond-base" />

              {/* Tilted diamond container */}
              <div className="diamond">
                <div className="diamond-inner">
                  <div className="media-frame">
                    <Media src={n.img} alt={n.title} />
                  </div>
                  <div className="label">
                    <div className="title">{n.title}</div>
                    {n.desc && <div className="desc">{n.desc}</div>}
                  </div>
                  <div className="bolts"><span /><span /><span /><span /></div>
                </div>
              </div>
            </div>

            {/* Floating pin above each island */}
            <motion.div
              className="pin"
              initial={{ y: -6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0%" }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
            />
          </a>
        ))}
      </div>

      {/* helper */}
      <div className="mt-6 text-center text-xs text-white/50">Scroll down the path</div>
    </section>
  );
}
