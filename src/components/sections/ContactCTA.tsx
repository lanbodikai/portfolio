"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactCTA(props: React.HTMLAttributes<HTMLElement>) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-20% 0px" });
  const [copied, setCopied] = useState(false);

  // Replace these with your actual contact handles
  const linkedinUrl = "https://www.linkedin.com/in/your-handle";
  const githubUrl = "https://github.com/your-handle";
  const email = "kai@example.com";
  const phone = "+1-555-123-4567";
  const wechatId = "your-wechat-id";

  const copyWeChat = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <motion.section
      ref={sectionRef}
      {...props}
      id="contact"
      data-snap
      className="relative section-narrow py-16 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-[860px] rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
      >
        <h3 className="text-3xl font-semibold md:text-5xl">Get in touch</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">Got a product brewing? Hit me up.</p>

        <div className="mt-8 mx-auto flex max-w-[520px] flex-wrap items-center justify-center gap-[2px]">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="neon-bubble">
            <span className="inner">
              <span className="icon">in</span>
              <span className="label">LinkedIn</span>
            </span>
          </a>

          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="neon-bubble">
            <span className="inner">
              <span className="icon">GH</span>
              <span className="label">GitHub</span>
            </span>
          </a>

          <a href={`mailto:${email}`} className="neon-bubble">
            <span className="inner">
              <span className="icon">@</span>
              <span className="label">Email</span>
            </span>
          </a>

          <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="neon-bubble">
            <span className="inner">
              <span className="icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="14" height="14" className="text-white" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.56 3.54.56a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.19 2.42.56 3.54a1 1 0 01-.24 1.05l-2.2 2.2z"/>
                </svg>
              </span>
              <span className="label">Phone</span>
            </span>
          </a>

          <button onClick={copyWeChat} className="neon-bubble" title={wechatId}>
            <span className="inner">
              <span className="icon">微</span>
              <span className="label">{copied ? "Copied!" : "WeChat"}</span>
            </span>
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
