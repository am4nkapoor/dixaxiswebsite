"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 2000;

export default function CounterUp({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasAnimated) return;
        setHasAnimated(true);

        const start = performance.now();
        const run = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / DURATION_MS, 1);
          // easeOutQuart for a smooth slowdown at the end
          const eased = 1 - (1 - progress) ** 4;
          const value = Math.round(eased * to);
          setCount(value);
          if (progress < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
