import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from '@components/Link';
import { AUDIOBOOK, AUDIOBOOK_BADGES } from '@const/audiobook';
import {
  StyledCard,
  Artwork,
  Eyebrow,
  TextSection,
  BadgeSection,
} from '@components/PromoCard/PromoCard.styled';

const AudiobookBanner = () => {
  return (
    <StyledCard>
      <Artwork className="promo-artwork">
        <Link href="/audiobook" aria-label={`About ${AUDIOBOOK.title}`}>
          <Image
            src={AUDIOBOOK.coverThumb}
            alt={`${AUDIOBOOK.title} audiobook cover`}
            width={96}
            height={96}
            unoptimized
          />
        </Link>
      </Artwork>
      <TextSection>
        <Eyebrow>Audiobook</Eyebrow>
        <Typography variant="h5" component="h2">
          {AUDIOBOOK.title}
        </Typography>
        <Typography variant="body1">
          {AUDIOBOOK.runtime} on why your ears ring, why it gets louder, and
          how to stop it running your life.{' '}
          <Link href="/audiobook" style={{ textDecoration: 'underline' }}>
            Learn more
          </Link>
        </Typography>
        <BadgeSection>
          {AUDIOBOOK_BADGES.map(({ href, src, alt, width, height }) => (
            <Link key={href} href={href} target="_blank">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                unoptimized
              />
            </Link>
          ))}
        </BadgeSection>
      </TextSection>
    </StyledCard>
  );
};

export default AudiobookBanner;
