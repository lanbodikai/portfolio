"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

export default function DecodeText({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState("");

  useEffect(() => {
    // Seed the text with random characters first
    if (!isInView) return;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2; // Control speed of decoding
    }, 30);
    
    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span ref={ref} className={`${className} font-mono uppercase tracking-widest`}>
      {display}
    </span>
  );
}