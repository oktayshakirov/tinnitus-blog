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
  format?: string;
  layout?: string;
  fullWidthResponsive?: boolean;
  /** Shown instead of the unit outside production. */
  placeholder: string;
};

const AdSlot = ({
  slot,
  format,
  layout,
  fullWidthResponsive,
  placeholder,
}: Props) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const shouldRenderAd = useAdsEnabled();
  const { insRef, adKey, status } = useAdSlot({ enabled: shouldRenderAd });

  if (!shouldRenderAd) {
    return null;
  }

  if (!isProduction) {
    return (
      <StyledAdSlot>
        <StyledAdPlaceholder>{placeholder}</StyledAdPlaceholder>
      </StyledAdSlot>
    );
  }

  return (
    <StyledAdSlot data-filled={status === 'filled'}>
      {status === 'filled' && <StyledAdLabel>Advertisement</StyledAdLabel>}
      <ins
        key={adKey}
        ref={insRef}
        className="adsbygoogle"
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive={fullWidthResponsive ? 'true' : undefined}
      ></ins>
    </StyledAdSlot>
  );
};

export default AdSlot;
