"use client";
import { motion } from "framer-motion";

export default function ContactCTA(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      id="contact"
      data-snap
      className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
      >
        <h3 className="text-3xl font-semibold md:text-5xl">Get in touch</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Building something worth shipping? I can help with CV, interfaces, and product sense.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="mailto:kai@example.com"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10"
          >
            Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}
