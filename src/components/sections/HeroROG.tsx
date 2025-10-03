"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroROG(props: React.HTMLAttributes<HTMLElement>) {
  const prefersReduced = useReducedMotion();

  return (
    <section {...props}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-10 top-24 h-1/2 w-40 -skew-y-6 bg-neon-magenta/15 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-1/3 w-32 skew-y-6 bg-neon-cyan/15 blur-2xl" />

      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-20 md:grid-cols-2 md:pt-28">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-extrabold leading-tight md:text-7xl"
          >
            I design tools <br className="hidden md:block" /> that fit people.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 max-w-2xl text-white/80 md:text-xl"
          >
            Engineer ⇄ PM — CV + interfaces + business sense.
          </motion.p>
        </div>

        {/* Masked media */}
        <div className="relative order-first flex justify-center md:order-none">
          <div className="relative h-[84vh] w-[62vw] max-w-[1100px] min-w-[640px]">
            <video
              src="/hero/intro.mp4"
              muted loop autoPlay playsInline
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                clipPath:
                  "polygon(12% 0, 100% 0, 100% 100%, 8% 100%, 0 80%, 0 20%)",
              }}
            />
            {/* four edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-l from-transparent to-black/95" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-black/95" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/90 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent" />
            {/* pulse */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[36px] bg-[radial-gradient(70%_70%_at_60%_50%,rgba(192,132,252,0.12),rgba(34,211,238,0.08),transparent_80%)] blur-2xl"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
