// src/components/sections/ProjectsBriefHorizontal.tsx
"use client";
import { useEffect, useRef, useState } from "react";

/** Film-strip geometry */
const FRAME_VW_NUM = 75; // numeric (not "88vw")
const FRAME_VH = 90;     // percent of viewport height
const GAP_PX = 10;        // <-- tiny gap between pages
const FRAME_BORDER = "1px solid rgba(255,255,255,0.35)";

const PANELS = [
  { title: "Mouse-Fit", img: "/showcase/mousefit.jpg" },
  { title: "Financial AI", img: "/showcase/fin-ai.jpg" },
  { title: "CV Lab", img: "/showcase/cv.jpg" },
  { title: "UX Systems", img: "/showcase/ux.jpg" },
  { title: "More", img: "/showcase/more.jpg" },
];

type Mode = "top" | "fixed" | "bottom";

export default function ProjectsBriefHorizontal() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [mode, setMode] = useState<Mode>("top");
  const [maxShiftPx, setMaxShiftPx] = useState(0); // how far to slide so last page is flush-right

  // set --vw and compute maxShiftPx on load/resize
  useEffect(() => {
    const recompute = () => {
      const vwPx = window.innerWidth / 100;                 // px per 1vw (no scrollbar issue)
      document.documentElement.style.setProperty("--vw", `${vwPx}px`);

      const framePx = FRAME_VW_NUM * vwPx;
      const stripPx =
        PANELS.length * framePx + (PANELS.length - 1) * GAP_PX; // include gaps
      const maxShift = Math.max(0, stripPx - window.innerWidth); // amount needed to sit flush-right
      setMaxShiftPx(maxShift);
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  // vertical travel: keep the poster feel
  const totalHeight = `${PANELS.length * 100}vh`;

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      const sec = sectionRef.current;
      const track = trackRef.current;
      if (!sec || !track) return;

      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;

      // top/fixed/bottom modes (sticky simulation)
      let next: Mode = "fixed";
      if (rect.top > 0) next = "top";
      else if (rect.bottom - vh < 0) next = "bottom";
      if (next !== mode) setMode(next);

      // progress only while pinned
      let progress = 0;
      if (next === "fixed") {
        const traveled = Math.min(Math.max(-rect.top, 0), vh * (PANELS.length - 1));
        progress = traveled / (vh * (PANELS.length - 1));
      } else if (next === "bottom") {
        progress = 1;
      }

      // translate in pixels so we can mix vw widths + px gaps cleanly
      const offsetPx = -(progress * maxShiftPx);
      track.style.transform = `translate3d(${offsetPx}px, 0, 0)`;
    };

    const tick = () => {
      onScroll();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onScroll);
    };
  }, [mode, maxShiftPx]);

  const stripWidth =
    `calc(${PANELS.length * FRAME_VW_NUM} * var(--vw) + ${(PANELS.length - 1) * GAP_PX}px)`;

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: totalHeight }}
    >
      <div
        ref={trackRef}
        className="flex h-screen"
        style={
          mode === "fixed"
            ? { position: "fixed", inset: 0, pointerEvents: "none", width: stripWidth, columnGap: `${GAP_PX}px` }
            : mode === "top"
            ? { position: "absolute", top: 0, left: 0, transform: "translate3d(0,0,0)", width: stripWidth, columnGap: `${GAP_PX}px` }
            : { position: "absolute", bottom: 0, left: 0, transform: `translate3d(-${maxShiftPx}px,0,0)`, width: stripWidth, columnGap: `${GAP_PX}px` }
        }
      >
        {PANELS.map((p, i) => (
          <Panel key={i} title={p.title} img={p.img} />
        ))}
      </div>
    </section>
  );
}

function Panel({ title, img }: { title: string; img: string }) {
  // each page is exactly FRAME_VW_NUM wide (via --vw), gap handled by strip's columnGap
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{ width: `calc(${FRAME_VW_NUM} * var(--vw))` }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: "100%",
          height: `${FRAME_VH}vh`,
          border: FRAME_BORDER,
          borderRadius: 0,
          background: "#0b0f1a",
        }}
      >
        <img
          src={img}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="relative z-10 grid h-full place-items-center px-6 text-center">
          <h3 className="text-4xl font-semibold md:text-6xl">{title}</h3>
        </div>
      </div>
    </div>
  );
}