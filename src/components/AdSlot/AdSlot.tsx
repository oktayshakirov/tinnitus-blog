import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAdSlot, useAdsEnabled } from '@lib/useAdSlot';
import {
  StyledAdLabel,
  StyledAdPlaceholder,
  StyledAdSlot,
} from './AdSlot.styled';

const AD_CLIENT = 'ca-pub-5852582960793521';

type Props = {
  /** AdSense ad unit id. */
  slot: string;
  /**
   * `display` is a plain banner. Below md it is pinned to a fixed 300x250:
   * the responsive unit reserves a square from the slot width on phones and
   * happily serves a 320x50 into it, leaving a box that is ~85% empty. A fixed
   * size is the only deterministic fix, since the creative sits in a
   * cross-origin iframe we cannot measure. Wider screens keep the responsive
   * unit, which already fills its letterbox well.
   *
   * `in-article` is the native format, sized by AdSense.
   */
  variant: 'display' | 'in-article';
  /** Shown instead of the unit outside production. */
  placeholder: string;
};

const AdSlot = ({ slot, variant, placeholder }: Props) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const theme = useTheme();
  // Ads only ever render after hydration, so this is accurate on first paint.
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  const shouldRenderAd = useAdsEnabled();
  const { insRef, adKey, status } = useAdSlot({ enabled: shouldRenderAd });

  if (!shouldRenderAd) {
    return null;
  }

  const isFixed = variant === 'display' && !isDesktop;

  if (!isProduction) {
    return (
      <StyledAdSlot>
        <StyledAdPlaceholder>{placeholder}</StyledAdPlaceholder>
      </StyledAdSlot>
    );
  }

  const isResponsive = variant === 'display' && isDesktop;

  return (
    <StyledAdSlot data-filled={status === 'filled'} data-fixed={isFixed}>
      {status === 'filled' && <StyledAdLabel>Advertisement</StyledAdLabel>}
      <ins
        // A size change swaps the tag AdSense reads, so request a fresh unit.
        key={`${adKey}-${isFixed ? 'fixed' : 'auto'}`}
        ref={insRef}
        className="adsbygoogle"
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={
          variant === 'in-article' ? 'fluid' : isResponsive ? 'auto' : undefined
        }
        data-ad-layout={variant === 'in-article' ? 'in-article' : undefined}
        data-full-width-responsive={isResponsive ? 'true' : undefined}
      ></ins>
    </StyledAdSlot>
  );
};

export default AdSlot;
