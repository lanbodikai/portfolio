"use client";
import { useEffect, useState } from "react";

export default function MetricCounter({ to, duration = 800, prefix = "", suffix = "" }: { to: number; duration?: number; prefix?: string; suffix?: string; }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(to * p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to, duration]);
  return <span>{prefix}{val.toLocaleString()}{suffix}</span>;
}
