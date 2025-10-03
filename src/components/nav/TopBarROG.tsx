"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About Me", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function TopBarROG() {
  const pathname = usePathname(); // keeps API parity; we underline “Features” by default

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/5 bg-[#121212]/98 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-8">
        <div className="select-none text-[22px] font-extrabold tracking-wide text-white">
          Junkai (Kai) Zhao
        </div>

        <nav className="hidden items-stretch gap-6 md:flex">
          {links.map((l, i) => {
            const isActive = i === 0; // “Features” looks active on the ASUS page
            return (
              <Link
                key={l.label}
                href={l.href}
                className="group relative flex items-center text-[18px] font-semibold text-white/85 hover:text-white"
              >
                {l.label}
                <span
                  className={`absolute -bottom-[14px] left-0 h-[3px] w-full origin-left rounded bg-[#E3362D] transition-transform ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
