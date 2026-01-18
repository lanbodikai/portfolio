"use client";
import { motion } from "framer-motion";

export default function TechSeparator() {
  return (
    <div className="relative flex items-center justify-center py-4 opacity-80">
      {/* Left Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "30%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-rogRed to-rogRed"
      />

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
