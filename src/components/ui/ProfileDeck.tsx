"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// You can now mix images and videos here
const CARDS = [
  "/gallery/13.png", 
  "/gallery/12.mp4",
  "/gallery/1.jpg"
];

export default function ProfileDeck() {
  const [items, setItems] = useState(CARDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItems = [...prev];
        const first = newItems.shift(); // Remove top card
        if (first) newItems.push(first); // Add to bottom
        return newItems;
      });
    }, 3000); // Cycle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] w-[300px] md:h-[500px] md:w-[380px] perspective-1000">
      <div className="relative h-full w-full">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            // Only render the top 3 cards for performance/visuals
            if (index > 2) return null;

            return (
              <motion.div
                key={item}
                layoutId={item}
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{
                  scale: 1 - index * 0.05, // Stack depth effect
                  y: index * 15, // Vertical offset for stack
                  zIndex: CARDS.length - index,
                  opacity: 1 - index * 0.2,
                  rotate: index % 2 === 0 ? index * 2 : index * -2, // Slight random rotation
                }}
                exit={{
                  x: 200,
                  opacity: 0,
                  rotate: 20,
                  transition: { duration: 0.4 }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 rounded-xl border-2 border-white/10 bg-gray-900 shadow-2xl overflow-hidden origin-bottom"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 z-20 h-16 w-16 border-t-4 border-l-4 border-rogRed/50 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 z-20 h-16 w-16 border-b-4 border-r-4 border-rogCyan/50 rounded-br-xl" />
                
                {/* Render Video or Image based on extension */}
                {item.endsWith('.mp4') || item.endsWith('.webm') ? (
                  <video 
                    src={item}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <img 
                    src={item} 
                    alt="Profile Card" 
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                )}
                
                {/* Removed the Scanline Overlay Div here */}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}