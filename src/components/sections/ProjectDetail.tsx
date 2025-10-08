"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectDetail({
  title,
  img,
  eyebrow = "\\ Experiences",
  children,
  ctaHref,
  ctaLabel,
  ctaTarget,
  layout = "default",
  ..._props
}: React.HTMLAttributes<HTMLElement> & {
  title: string;
  img: string;
  eyebrow?: string;
  children?: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ctaTarget?: string;
  layout?: "default" | "right-portrait";
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="relative section-narrow section-pad text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* top glow + thin divider to echo ROG sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(55%_55%_at_50%_0%,rgba(124,58,237,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#22d3ee] opacity-80" />

      <div className={`relative grid items-center gap-10 ${layout === 'right-portrait' ? 'md:grid-cols-[30%_60%]' : 'md:grid-cols-2'}`}
      >
        {/* Copy block — ROG typography */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className={layout === 'right-portrait' ? 'md:order-2' : ''}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a78bfa]">{eyebrow}</p>
          <h3 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">{title}</h3>
          {children ? (
            <div className="mt-5 text-white/85">{children}</div>
          ) : (
            <>
              <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
                Replace this with your project story: problem → approach → result. Keep it tight but concrete — what
                you built, why it mattered, and the outcomes.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/75 md:text-base">
                <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]" /> Role: IC / PM</li>
                <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#22d3ee]" /> Stack: Next.js + Framer Motion</li>
                <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed]" /> Time: 6 weeks</li>
                <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]" /> Outcome: +23% CTR</li>
              </ul>
            </>
          )}
          {ctaHref ? (
            <div className="mt-6">
              <a
                href={ctaHref}
                target={ctaTarget}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                {ctaLabel ?? "View Project"}
              </a>
            </div>
          ) : null}
        </motion.div>

        {/* Media with neon frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className={`relative mt-6 w-full md:mt-0 ${layout === 'right-portrait' ? 'md:order-1 md:justify-self-start' : 'md:justify-self-end'}`}
        >
          <div
            className={`neon-frame w-full mx-auto ${layout === 'right-portrait' ? '' : 'max-w-[620px] md:max-w-[520px] md:ml-auto'}`}
            style={{ ['--neon' as any]: '#7a5bff', ['--r' as any]: '32px' }}
          >
            <div className={`neon-content relative bg-[#05070f] ${layout === 'right-portrait' ? 'aspect-[10/16]' : 'aspect-[16/10]'}`}>
              {img.toLowerCase().endsWith('.mp4') ? (
                <video src={img} className="h-full w-full object-cover" autoPlay muted loop playsInline />
              ) : (
                <img src={img} alt="" className="h-full w-full object-cover" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/65" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
