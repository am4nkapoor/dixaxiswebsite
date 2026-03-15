"use client";

import { useEffect } from "react";

const testimonialOwlOptions = {
  autoplay: true,
  smartSpeed: 1500,
  dots: true,
  nav: false,
  loop: true,
  center: true,
  responsive: {
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  },
};

const vendorOwlOptions = {
  loop: true,
  margin: 45,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: { items: 2 },
    576: { items: 4 },
    768: { items: 6 },
    992: { items: 8 },
  },
};

export default function CarouselInitializer() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = () => {
      const J = (typeof window !== "undefined" && (window as unknown as { jQuery?: { fn?: { owlCarousel?: unknown } } }).jQuery) as
        | { (s: string | HTMLElement): { each: (f: () => void) => void; hasClass: (c: string) => boolean; owlCarousel: (o: object) => void; trigger: (e: string) => void }; fn?: { owlCarousel?: unknown } }
        | undefined;
      if (!J?.fn?.owlCarousel) return false;
      const $ = J;
      $(".testimonial-carousel").each(function (this: HTMLElement) {
        if (!$(this).hasClass("owl-loaded")) {
          $(this).owlCarousel(testimonialOwlOptions);
        }
      });
      $(".vendor-carousel").each(function (this: HTMLElement) {
        if (!$(this).hasClass("owl-loaded")) {
          $(this).owlCarousel(vendorOwlOptions);
        }
      });
      return true;
    };

    // Run when DOM is ready; retry if jQuery/Owl not loaded yet (e.g. first load)
    let done = false;
    const run = () => {
      if (done) return;
      if (init()) done = true;
    };
    const t1 = setTimeout(run, 0);
    const t2 = setTimeout(run, 150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      done = true;
      try {
        const $ = (window as unknown as { jQuery?: (s: string) => { trigger: (e: string) => void } }).jQuery;
        if ($) {
          $(".testimonial-carousel").trigger("destroy.owl.carousel");
          $(".vendor-carousel").trigger("destroy.owl.carousel");
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return null;
}
