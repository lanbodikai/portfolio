"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type SlideType = "three-cards" | "video-compare" | "specs-right" | "amd-tri-cards";
type Slide = {
  type: SlideType;
  title?: string;
  subtitle?: string;
  desc?: string;
  images?: string[];
  cards?: { title: string; desc: string }[];
  bullets?: string[];
  metrics?: { k: string; v: string; sub?: string }[];
  headingNote?: string;
  accent?: string;
};

// Sourced from ProjectsBriefHorizontal pages 2–5 (same content + format)
const SLIDES: Slide[] = [
  {
    type: "three-cards",
    title: "Mousefit : Hand Measure",
    images: ["/brief/hand_1.png", "/brief/hand_2.png", "/brief/hand_3.png"],
    cards: [
      { title: "Hand Measure", desc: "Mediapipe CV hand detection" },
      { title: "Finger Snap", desc: "Enhanced measure tool to enhance precision" },
      { title: "Measurement Report", desc: "AI generated report and mouse suggestion based on measurements" },
    ],
  },
  {
    type: "video-compare",
    title: "Mousefit : ML/AI",
    desc: "Custom-trained mouse detection model via TensorFlow YOLOv8.",
    images: ["/brief/ml-1.png", "/brief/ml-2.png"],
    bullets: ["400–500 labeled images", "80/20 train/validation split", "Custom YOLOv8 model trained"],
  },
  {
    type: "specs-right",
    title: "Financial AI Agent",
    desc: "AI-driven financial analysis with live data.",
    images: ["/brief/fin_hero.jpg"],
    bullets: [
      "3 views: Income Statement, Balance Sheet, Cash Flow",
      "2 presets: Beginner / Advanced",
      "Engineered guarder prompt and sanitized input",
    ],
    metrics: [{ k: "Improve precision", v: "50%", sub: "(improve precision)" }],
  },
  {
    type: "amd-tri-cards",
    title: "Calo Scanner",
    headingNote: "Cross-device nutrition companion for fast calorie scans.",
    images: ["/brief/calo_1.png", "/brief/calo_2.png", "/brief/calo_3.png"],
    cards: [
      { title: "Identify Issue", desc: "Low awareness of daily calories → hard to stay healthy." },
      { title: "Designing Product", desc: "Tablet + app scan food and estimate calories." },
      { title: "UI & UX", desc: "UI/UX tracks daily intake with clear feedback." },
    ],
  },
];

const AUTOPLAY_MS = 4200;
const GAP_PX = 4; // tighter gap (ROG-style)

export default function AboutReel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: false, margin: "-20% 0px" });

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
    <motion.section
      ref={sectionRef}
      className="relative w-full text-fg"
      initial={{ opacity: 0 }}
      animate={{ opacity: sectionInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header — retitled to Projects */}
      <div className="pointer-events-none z-10 pt-24 pb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Projects</h2>
        <div className="mt-1 text-muted">{SLIDES[logical]?.title ?? ""}</div>
      </div>

      {/* Viewport: grid centers content vertically in the remaining viewport height */}
      <div
        ref={wrap}
        className="relative section-narrow grid w-full place-items-center"
        style={{ minHeight: "calc(100svh - 120px)" }}
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
                className="group relative aspect-video w-[900px] max-w-[88vw] shrink-0"
                animate={{ scale: isCurrent ? 1 : 0.99, opacity: isCurrent ? 1 : 0.85 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onClick={() => setIdx(i)}
              >
                <div className={isCurrent ? "rog-gradient-frame h-full w-full" : "rog-muted-frame h-full w-full"}>
                  <div className="rog-frame-inner relative h-full w-full overflow-hidden p-3 md:p-4">
                    <SlideContent slide={s} />
                    {/* Bottom-left overlay with title + description */}
                    <div className="pointer-events-none absolute inset-x-4 bottom-8 text-left md:inset-x-6 md:bottom-10">
                      <div className="text-xl font-extrabold drop-shadow-lg md:text-3xl">{s.title}</div>
                      <div className="mt-1 max-w-[48ch] text-xs text-muted md:text-sm">{getSlideDescription(s)}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Slim controls — slightly below the reel border */}
        <div className="pointer-events-auto absolute inset-x-0 -bottom-8 z-10 mx-auto flex w-full max-w-[36rem] items-center justify-center gap-3 px-5">
          {/* prev */}
          <button
            aria-label="Previous"
            className="h-4 w-4 rounded-sm bg-card transition hover:bg-card-2"
            onClick={() => setIdx((v) => v - 1)}
          />
          {/* thin rail */}
          <div className="relative h-[3px] flex-1 rounded-full bg-border">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#ff49ff] via-[#7a5bff] to-[#3ef9ff]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          {/* next */}
          <button
            aria-label="Next"
            className="h-4 w-4 rounded-sm bg-card transition hover:bg-card-2"
            onClick={() => setIdx((v) => v + 1)}
          />
          {/* pause */}
          <button
            aria-label={paused ? "Play" : "Pause"}
            className="ml-1 h-4 w-[12px] rounded-sm bg-card transition hover:bg-card-2"
            onClick={() => setPaused((p) => !p)}
            title={paused ? "Play" : "Pause"}
          />
        </div>

        {/* tiny dots — below the bar */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 z-10 flex w-full items-center justify-center gap-2">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={[
                "h-[6px] w-[6px] rounded-full transition", 
                i === logical ? "bg-fg" : "bg-muted opacity-40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Compact renderers to mirror ProjectsBriefHorizontal formats inside a card
function SlideContent({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case "three-cards":
      return (
        <div className="grid h-full w-full place-items-center text-fg">
          {/* Copy ProjectsBriefHorizontal ThreeCards formatting (scaled) */}
          <div className="grid w-full max-w-[720px] grid-cols-3 gap-3 justify-items-center">
            {(slide.cards ?? []).map((card, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="neon-frame w-full max-w-[9rem]" style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '10px' }}>
                  <div className="neon-content aspect-square bg-card-2">
                    {slide.images && slide.images[i] ? (
                      <img src={slide.images[i]} alt="" className="h-full w-full object-cover" />
                    ) : null}
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs font-extrabold md:text-sm">{card.title}</div>
                  <p className="mt-1 max-w-[24ch] text-[11px] leading-snug text-muted md:text-xs">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "video-compare":
      return (
        // Match Mousefit ThreeCards layout: two square images (1,2) + framed text (3)
        <div className="grid h-full w-full place-items-center text-fg">
          <div className="grid w-full max-w-[900px] grid-cols-3 gap-0 justify-items-center" style={{ gap: '2px' }}>
            {/* Picture 1 — same size/place as Mousefit card 1 */}
            <div className="flex flex-col items-center">
              <div className="neon-frame neon-tight w-full max-w-[11.7rem]" style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '10px' }}>
                <div className="neon-content aspect-square bg-card-2">
                  {slide.images && slide.images[0] ? (
                    <img src={slide.images[0]} alt="" className="h-full w-full object-cover" />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Picture 2 — same size/place as Mousefit card 2 */}
            <div className="flex flex-col items-center">
              <div className="neon-frame neon-tight w-full max-w-[11.7rem]" style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '10px' }}>
                <div className="neon-content aspect-square bg-card-2">
                  {slide.images && slide.images[1] ? (
                    <img src={slide.images[1]} alt="" className="h-full w-full object-cover" />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Text — framed square to mirror card 3 */}
            <div className="flex flex-col items-center">
              <div className="neon-frame neon-tight w-full max-w-[11.7rem]" style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '10px' }}>
                <div className="neon-content aspect-square bg-card-2 p-3">
                  {slide.bullets && slide.bullets.length > 0 && (
                    <ul className="list-disc space-y-1 pl-4 text-muted text-[12px] leading-snug md:text-sm">
                      {slide.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "specs-right":
      return (
        // Financial Agent: picture with rounded neon frame; text aligned on same Y axis; centered gap
        <div className="grid h-full w-full place-items-center text-fg">
          <div className="grid w-full max-w-[760px] grid-cols-2 items-center justify-items-center gap-8">
            {/* Picture with same glow as Mousefit cards */}
            <div className="flex flex-col items-center">
              <div className="neon-frame" style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '10px' }}>
                <div className="neon-content h-[260px] w-[260px] md:h-[300px] md:w-[300px] bg-card-2">
                  {slide.images && slide.images[0] ? (
                    <img src={slide.images[0]} alt="" className="h-full w-full object-cover" />
                  ) : null}
                </div>
              </div>
            </div>
            {/* Text column — same Y-axis as picture */}
            <div className="w-[260px] md:w-[300px] text-left">
              {slide.bullets && slide.bullets.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted text-base md:text-lg">
                  {slide.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      );
    case "amd-tri-cards":
      return (
        <div className="grid h-full w-full place-items-center text-fg">
          {/* Mirror Projects AmdTriCards compact sizing */}
          <div className="grid w-full max-w-[700px] grid-cols-3 gap-3 justify-items-center">
            {(slide.cards ?? []).map((c, i) => (
              <div key={i} className="flex w-[220px] flex-col items-center">
                <div className="neon-frame w-[200px] md:w-[220px]" style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '12px' }}>
                  <div className="neon-content aspect-[4/3] bg-card-2">
                    {slide.images && slide.images[i] ? (
                      <img src={slide.images[i]} alt="" className="h-full w-full object-cover" />
                    ) : null}
                  </div>
                </div>
                <div className="mt-2 w-[200px] text-left md:w-[220px]">
                  <div className="text-xs font-extrabold md:text-sm">{c.title}</div>
                  {c.desc && <div className="mt-1 text-[11px] text-muted md:text-xs leading-snug">{c.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function getSlideDescription(slide: Slide): string {
  return (
    slide.desc ||
    slide.headingNote ||
    slide.subtitle ||
    (slide.type === "three-cards" ? "Feature highlights" : "")
  );
}

