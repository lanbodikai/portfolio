"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ThemeName = "light" | "dark";

const baseButton =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-border bg-card text-[var(--fg)] transition hover:bg-card-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border)] dark:border";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={`${baseButton} ${className} pointer-events-none opacity-0`}
      />
    );
  }

  const currentTheme: ThemeName = resolvedTheme === "dark" ? "dark" : "light";
  const nextTheme: ThemeName = currentTheme === "dark" ? "light" : "dark";
  const label = `Theme: ${currentTheme} (click to switch)`;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(nextTheme)}
      className={`${baseButton} ${className}`}
    >
      {currentTheme === "dark" ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </button>
  );
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.5A8.5 8.5 0 1 1 11.5 3 7 7 0 0 0 21 12.5z" />
    </svg>
  );
}
