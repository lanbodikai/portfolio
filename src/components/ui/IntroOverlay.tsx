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
          setTimeout(() => setIsLoading(false), 500); 
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
          exit={{ scale: 1.08, opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg text-fg"
        >
          <div className="w-full max-w-md px-6 text-left">
            <h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
            >
              Loading
            </h1>
            
            <div className="mx-auto h-1 w-full overflow-hidden bg-card-2">
              <motion.div 
                className="h-full bg-rogCyan"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-2 flex justify-between font-mono text-xs text-rogCyan">
              <span>Starting...</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
