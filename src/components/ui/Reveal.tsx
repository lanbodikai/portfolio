"use client";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: threshold });

  const getVariants = (type: AnimationType): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    switch (type) {
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.98 },
          visible: { opacity: 1, scale: 1 }
        };
      case "blur":
        return {
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 }
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -28 },
          visible: { opacity: 1, x: 0 }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 28 },
          visible: { opacity: 1, x: 0 }
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -28 },
          visible: { opacity: 1, y: 0 }
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: 28 },
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
      transition={{ duration: Math.min(duration, 0.65), delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
