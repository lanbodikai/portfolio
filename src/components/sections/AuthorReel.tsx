"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type Slide = { title: string; tagline: string; img: string };

const SLIDES: Slide[] = [
  { title: "Systems Thinker", tagline: "Ship loops, not one-offs.", img: "/about/systems.jpg" },
  { title: "Toolmaker",       tagline: "Interfaces that earn their keep.", img: "/about/tools.jpg" },
  { title: "Designer",        tagline: "Taste + rigor + speed.", img: "/about/designer.jpg" },
  { title: "Operator",        tagline: "Metrics, velocity, outcomes.", img: "/about/operator.jpg" },
];

const AUTOPLAY_MS = 4200;
const GAP_PX = 8; // tiny gap

export default function AboutReel() {
  const wrap = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  // triple the slides so we can loop seamlessly
  const allSlides = useMemo(() => [...SLIDES, ...SLIDES, ...SLIDES], []);
  const BASE = SLIDES.length;

  const [idx, setIdx] = useState(BASE);
  const [containerW, setContainerW] = useState(0);
  const [slideW, setSlideW] = useState(0);
  const [paused, setPaused] = useState(false); // now only toggled by the pause button

  // measure on resize
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (wrap.current) setContainerW(wrap.current.clientWidth);
      if (slideRef.current) setSlideW(slideRef.current.clientWidth);
    });
    if (wrap.current) ro.observe(wrap.current);
    if (slideRef.current) ro.observe(slideRef.current);
    return () => ro.disconnect();
  }, []);

  // keep current index in the middle band
  useEffect(() => {
    if (idx >= BASE * 2) setIdx((v) => v - BASE);
    else if (idx < BASE) setIdx((v) => v + BASE);
  }, [idx, BASE]);

  // autoplay (no hover pause anymore)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((v) => v + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  // center the current card
  const offsetX = useMemo(() => {
    if (!containerW || !slideW) return 0;
    const leftOfCurrent = idx * (slideW + GAP_PX);
    const centerShift = leftOfCurrent - (containerW - slideW) / 2;
    return -centerShift;
  }, [containerW, slideW, idx]);

  // progress bar fill
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(0);
    if (paused) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / AUTOPLAY_MS);
      setProgress(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [idx, paused]);

  const logical = (idx % SLIDES.length + SLIDES.length) % SLIDES.length;

  return (
    <section className="relative w-full bg-black text-white">
      {/* Header — kept small so cards sit higher */}
      <div className="pointer-events-none z-10 py-2 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">About Kai</h2>
        <div className="mt-1 text-white/70">{SLIDES[logical]?.title ?? ""}</div>
      </div>

      {/* Viewport: grid centers content vertically in the remaining viewport height */}
      <div
        ref={wrap}
        className="
          relative mx-auto w-full max-w-[120rem]
          grid place-items-center
          px-3 md:px-6
          /* take full viewport height minus a small header band; adjust to taste */
          min-h-[calc(100svh-120px)]
          "
      >
        {/* Track */}
        <motion.div
          className="relative flex items-center"
          style={{
            gap: GAP_PX,
            width: (slideW + GAP_PX) * allSlides.length,
            willChange: "transform",
          }}
          animate={{ x: offsetX }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          {allSlides.map((s, i) => {
            const isCurrent = i === idx;
            return (
              <motion.div
                key={`${s.title}-${i}`}
                ref={i === idx ? slideRef : undefined}
                className={[
                  "aspect-video shrink-0 overflow-hidden rounded-3xl",
                  "bg-gradient-to-br from-white/[0.04] to-white/[0.02]",
                  // a bit narrower to push the whole row visually higher
                  "w-[84vw] sm:w-[78vw] md:w-[68vw] lg:w-[62vw] xl:w-[56vw]",
                  isCurrent ? "ring-1 ring-white/20" : "ring-1 ring-white/8",
                ].join(" ")}
                animate={{ scale: isCurrent ? 1 : 0.985, opacity: isCurrent ? 1 : 0.86 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onClick={() => setIdx(i)}
              >
                <div className="relative h-full w-full">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 text-right">
                    <div className="text-2xl font-extrabold md:text-4xl drop-shadow">{s.title}</div>
                    <div className="mt-1 text-white/70">{s.tagline}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Slim controls (now always visible, autoplay not affected by hover) */}
        <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-10 mx-auto flex w-full max-w-[36rem] items-center justify-center gap-3 px-5">
          {/* prev */}
          <button
            aria-label="Previous"
            className="h-4 w-4 rounded-sm bg-white/12 hover:bg-white/25"
            onClick={() => setIdx((v) => v - 1)}
          />
          {/* thin rail */}
          <div className="relative h-[3px] flex-1 rounded-full bg-white/15">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-white"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          {/* next */}
          <button
            aria-label="Next"
            className="h-4 w-4 rounded-sm bg-white/12 hover:bg-white/25"
            onClick={() => setIdx((v) => v + 1)}
          />
          {/* pause */}
          <button
            aria-label={paused ? "Play" : "Pause"}
            className="ml-1 h-4 w-[12px] rounded-sm bg-white/22 hover:bg-white/35"
            onClick={() => setPaused((p) => !p)}
            title={paused ? "Play" : "Pause"}
          />
        </div>

        {/* tiny dots below the rail */}
        <div className="pointer-events-none absolute inset-x-0 bottom-1 z-10 flex w-full items-center justify-center gap-2">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={[
                "h-[6px] w-[6px] rounded-full",
                i === logical ? "bg-white" : "bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
