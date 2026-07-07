import { useEffect, useRef, useState } from 'react';
import Router from 'next/router';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * Ads render on the website but never inside the native app wrapper.
 * Detected via the `is-app` html class or the persisted `isApp` flag.
 */
export const useAdsEnabled = (): boolean => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isApp =
      document.documentElement.classList.contains('is-app') ||
      localStorage.getItem('isApp') === 'true';
    setEnabled(!isApp);
  }, []);

  return enabled;
};

type UseAdSlotOptions = {
  /** Only load the ad when this is true (e.g. not inside the native app). */
  enabled: boolean;
};

/**
 * Shared AdSense slot loader.
 *
 * Responsibilities:
 * - Wait for the adsbygoogle script, then push the slot exactly once.
 * - Re-initialise the same slot on client-side route changes.
 * - Collapse the reserved space so smaller creatives don't leave empty
 *   square padding on mobile: when filled, shrink the <ins> to the real
 *   iframe height; when unfilled, collapse it to zero.
 */
export const useAdSlot = ({ enabled }: UseAdSlotOptions) => {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') {
      return;
    }

    let cancelled = false;
    let waitTimer: ReturnType<typeof setTimeout> | null = null;
    const fitTimers: ReturnType<typeof setTimeout>[] = [];
    let observer: MutationObserver | null = null;

    // Match the rendered <ins> box to the actual ad creative so a smaller
    // ad served into a larger responsive slot doesn't leave empty space.
    const fitToContent = () => {
      const ins = insRef.current;
      if (!ins) {
        return;
      }

      const status = ins.getAttribute('data-ad-status');

      if (status === 'unfilled') {
        // The global CSS hides unfilled ads; also drop reserved height.
        ins.style.height = '0px';
        return;
      }

      if (status === 'filled') {
        const iframe = ins.querySelector('iframe');
        const height = iframe?.offsetHeight ?? 0;
        // Only ever shrink to the creative; never force it taller.
        if (height > 0 && height < ins.offsetHeight) {
          ins.style.height = `${height}px`;
        }
      }
    };

    const observe = (ins: HTMLModElement) => {
      observer?.disconnect();
      observer = new MutationObserver(fitToContent);
      observer.observe(ins, {
        attributes: true,
        attributeFilter: ['data-ad-status'],
        childList: true,
        subtree: true,
      });
      // Fallbacks in case the creative resizes after the initial fill.
      [600, 1500, 3500].forEach((delay) => {
        fitTimers.push(setTimeout(fitToContent, delay));
      });
    };

    const pushAd = () => {
      const ins = insRef.current;
      if (cancelled || !ins) {
        return;
      }

      // Already initialised – just make sure it fits its content.
      if (ins.hasAttribute('data-adsbygoogle-status')) {
        fitToContent();
        return;
      }

      // Script not ready yet – retry shortly instead of a tight 100ms loop.
      if (!window.adsbygoogle) {
        waitTimer = setTimeout(pushAd, 200);
        return;
      }

      try {
        ins.style.removeProperty('height');
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        observe(ins);
      } catch {
        /* AdSense will log its own error; nothing to recover here. */
      }
    };

    const handleScriptLoad = () => pushAd();

    const handleRouteChange = () => {
      const ins = insRef.current;
      if (ins) {
        // Reset so the same element can request a fresh ad on the new page.
        ins.removeAttribute('data-adsbygoogle-status');
        ins.removeAttribute('data-ad-status');
        ins.style.removeProperty('height');
        ins.innerHTML = '';
      }
      setTimeout(pushAd, 300);
    };

    window.addEventListener('adsbygoogle-loaded', handleScriptLoad);
    Router.events.on('routeChangeComplete', handleRouteChange);

    const mountTimer = setTimeout(pushAd, 100);

    return () => {
      cancelled = true;
      clearTimeout(mountTimer);
      if (waitTimer) {
        clearTimeout(waitTimer);
      }
      fitTimers.forEach(clearTimeout);
      observer?.disconnect();
      window.removeEventListener('adsbygoogle-loaded', handleScriptLoad);
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [enabled]);

  return insRef;
};
