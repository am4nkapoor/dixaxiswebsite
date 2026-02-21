'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type AOSModule = {
  init: (options?: {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
  }) => void;
  refresh?: () => void;
  refreshHard?: () => void;
};

export default function AOSInit() {
  const pathname = usePathname();
  useEffect(() => {
    let mounted = true;
    import("aos")
      .then((mod) => {
        if (!mounted) return;
        const AOS = (mod as unknown as { default: AOSModule }).default;
        if (AOS && typeof AOS.init === "function") {
          AOS.init({ duration: 1200, easing: "ease-in-out", once: false, mirror: true });
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    let cancelled = false;
    import("aos")
      .then((mod) => {
        if (cancelled) return;
        const AOS = (mod as unknown as { default: AOSModule }).default;
        if (AOS?.refreshHard) {
          AOS.refreshHard();
        } else if (AOS?.refresh) {
          AOS.refresh();
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);
  return null;
}
