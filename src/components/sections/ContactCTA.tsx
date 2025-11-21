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
      className="relative py-24 md:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0a0a0c] p-10 text-center md:p-16"
      >
        <h3 className="font-tech text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
          Get in <span className="text-rogCyan">Touch</span>
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
          Got a product brewing? Let's build something intelligent together.
        </p>

        {/* Responsive Grid for Contact Buttons */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          
          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 transition-all hover:border-rogRed hover:bg-rogRed/10"
          >
            <i className="fa-brands fa-linkedin-in mb-3 text-2xl text-gray-400 transition-colors group-hover:text-rogRed"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 transition-all hover:border-rogCyan hover:bg-rogCyan/10"
          >
            <i className="fa-brands fa-github mb-3 text-2xl text-gray-400 transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
              GitHub
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 transition-all hover:border-rogRed hover:bg-rogRed/10"
          >
            <i className="fa-solid fa-envelope mb-3 text-2xl text-gray-400 transition-colors group-hover:text-rogRed"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
              Email
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 transition-all hover:border-rogCyan hover:bg-rogCyan/10"
          >
            <i className="fa-solid fa-phone mb-3 text-2xl text-gray-400 transition-colors group-hover:text-rogCyan"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
              Phone
            </span>
          </a>

          {/* WeChat (Spans 2 cols on mobile to center) */}
          <button
            onClick={copyWeChat}
            className="group col-span-2 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 transition-all hover:border-rogRed hover:bg-rogRed/10 md:col-span-1"
          >
            <i className="fa-brands fa-weixin mb-3 text-2xl text-gray-400 transition-colors group-hover:text-rogRed"></i>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
              {copied ? "Copied!" : "WeChat"}
            </span>
          </button>

        </div>
      </motion.div>
    </motion.section>
  );
}