"use client";
import { motion } from "framer-motion";

export default function ProjectDetail({
  title,
  img,
  ...props
}: React.HTMLAttributes<HTMLElement> & { title: string; img: string }) {
  return (
    <section {...props} className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold md:text-5xl">{title}</h3>
          <p className="mt-3 max-w-xl text-white/80">
            Replace this with your project story: problem → approach → result. Keep it tight.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/75">
            <li>• Role: IC / PM</li>
            <li>• Stack: Next.js + FM</li>
            <li>• Time: 6 weeks</li>
            <li>• Outcome: +23% CTR</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <img src={img} alt="" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
