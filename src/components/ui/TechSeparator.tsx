"use client";
import { motion } from "framer-motion";

export default function TechSeparator() {
  return (
    <div className="relative flex items-center justify-center py-24 opacity-80">
      {/* Left Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "30%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-rogRed to-rogRed"
      />

      {/* Center Graphic */}
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-4 h-3 w-3 border border-rogCyan bg-black shadow-[0_0_10px_#00f0ff]"
      >
        <div className="h-full w-full animate-ping bg-rogCyan opacity-20" />
      </motion.div>

      {/* Right Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "30%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="h-[1px] bg-gradient-to-l from-transparent via-rogRed to-rogRed"
      />
    </div>
  );
}