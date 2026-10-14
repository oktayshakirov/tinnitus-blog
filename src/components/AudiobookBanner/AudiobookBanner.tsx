import { Typography } from '@mui/material';
import { FaSpotify, FaGooglePlay } from 'react-icons/fa';
import Icon from '@components/Icon';
import { AUDIOBOOK } from '@const/audiobook';
import {
  StyledContainer,
  BannerWrapper,
  TextSection,
  ButtonSection,
  StoreButton,
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
        <ButtonSection>
          <StoreButton href={AUDIOBOOK.spotify} target="_blank">
            <Icon icon={FaSpotify} size={18} />
            Listen on Spotify
          </StoreButton>
          <StoreButton href={AUDIOBOOK.googlePlay} target="_blank">
            <Icon icon={FaGooglePlay} size={16} />
            Google Play Books
          </StoreButton>
        </ButtonSection>
      </BannerWrapper>
    </StyledContainer>
  );
};

export default AudiobookBanner;
