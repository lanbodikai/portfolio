"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type AnimationType = "up" | "down" | "left" | "right" | "zoom" | "blur";

interface RevealProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number; // How much of the element must be visible
}

export default function Reveal({ 
  children, 
  type = "up", 
  delay = 0, 
  duration = 0.8,
  className = "",
  threshold = 0.2
}: RevealProps) {
  const ref = useRef(null);
  // once: false ensures it animates EVERY time it enters/leaves viewport
  const isInView = useInView(ref, { once: false, amount: threshold });

  const getVariants = (type: AnimationType): Variants => {
    switch (type) {
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 1.1 },
          visible: { opacity: 1, scale: 1 }
        };
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
          visible: { opacity: 1, filter: "blur(0px)", scale: 1 }
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants(type)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // Custom cubic-bezier for smooth feel
      className={className}
    >
      {children}
    </motion.div>
  );
}