'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type JQueryEl = {
  length: number;
  hasClass: (cls: string) => boolean;
  trigger: (ev: string) => void;
  owlCarousel?: (opts: {
    loop?: boolean;
    margin?: number;
    dots?: boolean;
    autoplay?: boolean;
    smartSpeed?: number;
    responsive?: Record<number, { items: number }>;
  }) => unknown;
  data?: (key: string, value?: unknown) => unknown;
  find?: (selector: string) => JQueryEl & { children: () => JQueryEl & { unwrap: () => void } };
  removeClass?: (cls: string) => JQueryEl;
  each?: (cb: (idx: number, el: unknown) => void) => unknown;
  on?: (...args: unknown[]) => unknown;
  attr?: (name: string) => string | undefined;
};

type JQueryStatic = {
  (selector: unknown): JQueryEl;
  fn?: Record<string, unknown>;
};

export default function VendorCarouselInit() {
  const pathname = usePathname();
  useEffect(() => {
    let tries = 0;
    const maxTries = 80;
    let vendorReady = false;
    let testiReady = false;
    const refreshAll = () => {
      const win = window as unknown as { jQuery?: JQueryStatic; $?: JQueryStatic };
      const $ = win?.jQuery ?? win?.$;
      if (!$) return;
      $('.vendor-carousel').trigger('refresh.owl.carousel');
      $('.testimonial-carousel').trigger('refresh.owl.carousel');
    };
    const interval = setInterval(() => {
      tries += 1;
      const win = window as unknown as { jQuery?: JQueryStatic; $?: JQueryStatic };
      const $ = win?.jQuery ?? win?.$;
      if (!$ || !$.fn) {
        if (tries >= maxTries) clearInterval(interval);
        return;
      }
      const ensureInit = (selector: string, options: Record<string, unknown>) => {
        const el = $(selector) as unknown as JQueryEl;
        if (!el || el.length === 0) return false;
        if (typeof el.owlCarousel !== 'function') return false;
        const inst = el.data?.('owl.carousel');
        if (el.hasClass('owl-loaded') && inst) {
          el.trigger('refresh.owl.carousel');
          return true;
        }
        if (el.hasClass('owl-loaded') && !inst) {
          el.trigger('destroy.owl.carousel');
          try {
            el.find?.('.owl-stage-outer').children().unwrap();
          } catch {}
          el.removeClass?.('owl-center owl-loaded owl-text-select-on');
        }
        el.owlCarousel?.(options as {
          loop?: boolean;
          margin?: number;
          dots?: boolean;
          autoplay?: boolean;
          smartSpeed?: number;
          responsive?: Record<number, { items: number }>;
        });
        return true;
      };
      const initVendor = () =>
        ensureInit('.vendor-carousel', {
          loop: true,
          margin: 45,
          dots: false,
          autoplay: true,
          smartSpeed: 1000,
          autoHeight: true,
          responsive: { 0: { items: 2 }, 576: { items: 4 }, 768: { items: 6 }, 992: { items: 8 } },
        });
      const initTestimonial = () =>
        ensureInit('.testimonial-carousel', {
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          nav: false,
          loop: true,
          center: true,
          autoHeight: true,
          responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
        });
      if (!vendorReady) vendorReady = initVendor() || vendorReady;
      if (!testiReady) testiReady = initTestimonial() || testiReady;
      const bothDoneOrAbsent =
        (vendorReady || $('.vendor-carousel').length === 0) &&
        (testiReady || $('.testimonial-carousel').length === 0);
      if (bothDoneOrAbsent || tries >= maxTries) {
        clearInterval(interval);
        setTimeout(refreshAll, 500);
      }
    }, 120);
    window.addEventListener('load', refreshAll);
    const onResize = () => setTimeout(refreshAll, 150);
    window.addEventListener('resize', onResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('load', refreshAll);
      window.removeEventListener('resize', onResize);
    };
  }, [pathname]);
  return null;
}
