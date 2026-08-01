import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

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

export type AdStatus = 'filled' | 'unfilled' | null;

/**
 * Shared AdSense slot loader.
 *
 * Responsibilities:
 * - Wait for the adsbygoogle script, then push the slot exactly once.
 * - Request a fresh ad on client-side route changes. AdSense does not support
 *   recycling an `<ins>`, so the caller must apply `adKey` as the element's
 *   React key: the old node is unmounted and a brand new one is pushed.
 * - Report the fill status so the caller can keep its frame hidden until an
 *   ad actually arrives.
 *
 * Deliberately does NOT try to resize the slot to its creative. The creative
 * lives in a cross-origin iframe that always fills the `<ins>` box Google
 * reserved, so its real height is unmeasurable from here; the previous attempt
 * could never shrink anything and risked clipping ads that grew later.
 */
export const useAdSlot = ({ enabled }: UseAdSlotOptions) => {
  const insRef = useRef<HTMLModElement>(null);
  const [status, setStatus] = useState<AdStatus>(null);
  const { asPath } = useRouter();
  // The query string never changes which creative is served.
  const adKey = asPath.split('?')[0];

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') {
      return;
    }

    let cancelled = false;
    let waitTimer: ReturnType<typeof setTimeout> | null = null;

    setStatus(null);

    const readStatus = () => {
      const value = insRef.current?.getAttribute('data-ad-status');
      setStatus(value === 'filled' || value === 'unfilled' ? value : null);
    };

    const pushAd = () => {
      const ins = insRef.current;
      if (cancelled || !ins || ins.hasAttribute('data-adsbygoogle-status')) {
        return;
      }

      // Script not ready yet - retry shortly instead of a tight 100ms loop.
      if (!window.adsbygoogle) {
        waitTimer = setTimeout(pushAd, 200);
        return;
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        /* AdSense will log its own error; nothing to recover here. */
      }
    };

    const observer = new MutationObserver(readStatus);
    if (insRef.current) {
      observer.observe(insRef.current, {
        attributes: true,
        attributeFilter: ['data-ad-status'],
      });
    }

    const handleScriptLoad = () => pushAd();
    window.addEventListener('adsbygoogle-loaded', handleScriptLoad);

    // Give layout a tick so the slot is measured at its final width.
    const mountTimer = setTimeout(pushAd, 100);

    return () => {
      cancelled = true;
      clearTimeout(mountTimer);
      if (waitTimer) {
        clearTimeout(waitTimer);
      }
      observer.disconnect();
      window.removeEventListener('adsbygoogle-loaded', handleScriptLoad);
    };
  }, [enabled, adKey]);

  return { insRef, adKey, status };
};
