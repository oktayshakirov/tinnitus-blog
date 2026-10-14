import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from '@components/Link';
import { AUDIOBOOK, AUDIOBOOK_BADGES } from '@const/audiobook';
import {
  StyledContainer,
  BannerWrapper,
  TextSection,
  BadgeSection,
} from './AudiobookBanner.styled';

const AudiobookBanner = () => {
  return (
    <StyledContainer>
      <BannerWrapper>
        <TextSection>
          <Typography variant="h5" component="h2">
            {AUDIOBOOK.title}
          </Typography>
          <Typography variant="body2">
            Our {AUDIOBOOK.runtime} audiobook on why your ears ring, why it
            gets louder, and how to stop it running your life.
          </Typography>
        </TextSection>
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
      </BannerWrapper>
    </StyledContainer>
  );
};

export default AudiobookBanner;
