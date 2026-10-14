import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from '@components/Link';
import {
  StyledCard,
  Artwork,
  Eyebrow,
  TextSection,
  BadgeSection,
} from '@components/PromoCard/PromoCard.styled';

const AppsBanner = () => {
  return (
    <StyledCard>
      <Artwork className="promo-artwork">
        <Link href="/app" aria-label="About the TinnitusHelp.me app">
          <Image
            src="/apple-touch-icon.png"
            alt="TinnitusHelp.me app icon"
            width={96}
            height={96}
            unoptimized
          />
        </Link>
      </Artwork>
      <TextSection>
        <Eyebrow>Mobile app</Eyebrow>
        <Typography variant="h5" component="h2">
          Download our app
        </Typography>
        <Typography variant="body1">
          Managing tinnitus is even easier with our app. Stay up to date with
          the new posts and sounds.{' '}
          <Link href="/app" style={{ textDecoration: 'underline' }}>
            Learn more
          </Link>
        </Typography>
        <BadgeSection>
          <Link
            href="https://apps.apple.com/de/app/tinnitushelp-me/id6741688965"
            target="_blank"
          >
            <Image
              src="/app-store-badge-ios.png"
              alt="Download on the App Store"
              width={120}
              height={40}
              unoptimized
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.shadev.tinnitushelpme"
            target="_blank"
          >
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={123}
              height={40}
              unoptimized
            />
          </Link>
        </BadgeSection>
      </TextSection>
    </StyledCard>
  );
};

export default AppsBanner;
