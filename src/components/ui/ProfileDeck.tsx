"use client";
import { motion } from "framer-motion";

const CARD = "/gallery/13.png";

export default function ProfileDeck() {
  const isVideo = CARD.endsWith(".mp4") || CARD.endsWith(".webm");

  return (
    <div className="relative h-[360px] w-[260px] md:h-[440px] md:w-[320px] perspective-1000">
      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        whileHover={{ rotateX: 2, rotateY: -3, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="relative h-full w-full rounded-xl border-2 border-border bg-card-2 shadow-2xl overflow-hidden origin-bottom"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-0 left-0 z-20 h-16 w-16 rounded-tl-xl border-l-4 border-t-4 border-border dark:border-rogRed/35" />
        <div className="absolute bottom-0 right-0 z-20 h-16 w-16 rounded-br-xl border-b-4 border-r-4 border-border dark:border-rogCyan/35" />

        {isVideo ? (
          <video
            src={CARD}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <img
            src={CARD}
            alt="Profile Card"
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        )}
      </motion.div>
    </div>
  );
}

