"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function TopBarROG() {
  const pathname = usePathname(); // keeps API parity; we underline “Features” by default

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[var(--border)] bg-[var(--card)] backdrop-blur-sm"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-8">
        <div className="select-none text-[22px] font-extrabold tracking-wide text-[var(--fg)]">
          Kai Zhao
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-stretch gap-6 md:flex">
            {links.map((l) => {
              const isActive = l.href.startsWith("/") && pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className="group relative flex items-center text-[18px] font-semibold text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-[14px] left-0 h-[3px] w-full origin-left rounded bg-rogRed transition-transform ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
