"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** Counts up to a figure such as "100+" the first time it is seen. */
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const parsed = useMemo(() => {
    const match = /^(\d+)(.*)$/.exec(value);
    return { numeric: Boolean(match), target: match ? Number(match[1]) : 0, suffix: match ? match[2] : "" };
  }, [value]);
  // The server renders the real figure, so it is right even before scripts run.
  const [shown, setShown] = useState(parsed.target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !parsed.numeric || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          setShown(Math.round(parsed.target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, parsed]);

  if (!parsed.numeric) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {shown}
        {parsed.suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
