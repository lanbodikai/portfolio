"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 1000); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="w-full max-w-md px-6 text-center">
            <h1 
              className="glitch-text mb-6 text-4xl font-black uppercase tracking-[0.2em] md:text-6xl" 
              data-text="INITIALIZING"
            >
              INITIALIZING
            </h1>
            
            <div className="mx-auto h-1 w-full overflow-hidden bg-gray-900">
              <motion.div 
                className="h-full bg-rogRed shadow-[0_0_15px_#ff0033]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-2 flex justify-between font-mono text-xs text-rogRed">
              <span>SYSTEM BOOT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}