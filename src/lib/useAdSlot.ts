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

/**
 * Injects the AdSense library the first time a slot asks for an ad, so a page
 * without slots never loads it: not the app, not the legal and about pages,
 * and not development, where slots render placeholders. With Auto ads overlays
 * switched on, this is also what keeps anchors and vignettes off those pages.
 */
const loadAdSense = () => {
  if (document.querySelector('script[src*="adsbygoogle.js"]')) {
    return;
  }
  const script = document.createElement('script');
  script.async = true;
  script.src =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521';
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
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
 * - Load the library on first use, then push this slot's own `<ins>` exactly
 *   once. Pushing before it has loaded is fine: `window.adsbygoogle` is a
 *   queue it drains on arrival.
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
  const { asPath } = useRouter();
  // Neither the query string nor the hash changes which creative is served,
  // and an in-page anchor jump must not re-request every ad on the page.
  const adKey = asPath.split(/[?#]/)[0];
  // Keyed by page so a status left over from the previous route never frames
  // the fresh, still empty slot.
  const [fill, setFill] = useState<{ key: string | null; status: AdStatus }>({
    key: null,
    status: null,
  });

  useEffect(() => {
    const ins = insRef.current;
    if (!enabled || !ins) {
      return;
    }

    loadAdSense();

    const observer = new MutationObserver(() => {
      const value = ins.getAttribute('data-ad-status');
      setFill({
        key: adKey,
        status: value === 'filled' || value === 'unfilled' ? value : null,
      });
    });
    observer.observe(ins, {
      attributes: true,
      attributeFilter: ['data-ad-status'],
    });

    // Give layout a tick so the slot is measured at its final width.
    const timer = setTimeout(() => {
      if (ins.hasAttribute('data-adsbygoogle-status')) {
        return;
      }
      try {
        // Name the element. A bare push({}) fills the first unfilled <ins> in
        // the DOM, not this one: after a route change the slots that survive
        // it push first, fill the new in-article units above them, those then
        // skip their own push, and the last slot on the page stays empty.
        (window.adsbygoogle = window.adsbygoogle || []).push({ element: ins });
      } catch {
        /* AdSense will log its own error; nothing to recover here. */
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [enabled, adKey]);

  return {
    insRef,
    adKey,
    status: fill.key === adKey ? fill.status : null,
  };
};
