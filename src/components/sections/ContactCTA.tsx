"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactCTA(_: React.HTMLAttributes<HTMLElement>) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-20% 0px" });
  const [copied, setCopied] = useState(false);

  // Update these with your real info
  const linkedinUrl = "https://www.linkedin.com/in/kai-zhao-85b9832a1/";
  const githubUrl = "https://github.com/lanbodikai";
  const email = "lanbodikai@gmail.com";
  const phone = "+1-641-819-2530";
  const wechatId = "lanbodikai"; // Add your real ID here

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
      id="contact"
      className="relative pt-8 pb-24 md:pt-12 md:pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-5xl rounded-lg border border-border bg-white/76 p-7 text-center shadow-[0_24px_80px_rgba(41,112,232,0.08)] backdrop-blur-sm md:p-14"
      >
        <h3 className="text-4xl font-bold tracking-tight text-fg md:text-6xl">
          Get in <span className="text-rogCyan">Touch</span>
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Got a product brewing? Let's build something intelligent together.
        </p>

        {/* Responsive Grid for Contact Buttons */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          
          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-28 flex-col items-center justify-center rounded-md border border-border bg-white/70 py-6 transition-all hover:border-rogCyan hover:bg-[#f6f9ff]"
          >
            <i className="fa-brands fa-linkedin-in mb-3 text-2xl text-muted transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-fg">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-28 flex-col items-center justify-center rounded-md border border-border bg-white/70 py-6 transition-all hover:border-rogCyan hover:bg-[#f6f9ff]"
          >
            <i className="fa-brands fa-github mb-3 text-2xl text-muted transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-fg">
              GitHub
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group flex min-h-28 flex-col items-center justify-center rounded-md border border-border bg-white/70 py-6 transition-all hover:border-rogCyan hover:bg-[#f6f9ff]"
          >
            <i className="fa-solid fa-envelope mb-3 text-2xl text-muted transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-fg">
              Email
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="group flex min-h-28 flex-col items-center justify-center rounded-md border border-border bg-white/70 py-6 transition-all hover:border-rogCyan hover:bg-[#f6f9ff]"
          >
            <i className="fa-solid fa-phone mb-3 text-2xl text-muted transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-fg">
              Phone
            </span>
          </a>

          {/* WeChat (Spans 2 cols on mobile to center) */}
          <button
            onClick={copyWeChat}
            className="group col-span-2 flex min-h-28 flex-col items-center justify-center rounded-md border border-border bg-white/70 py-6 transition-all hover:border-rogCyan hover:bg-[#f6f9ff] md:col-span-1"
          >
            <i className="fa-brands fa-weixin mb-3 text-2xl text-muted transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted group-hover:text-fg">
              {copied ? "Copied!" : "WeChat"}
            </span>
          </button>

        </div>
      </motion.div>
    </motion.section>
  );
}

