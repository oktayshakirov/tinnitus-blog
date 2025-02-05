import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface StreamingPlatformsProps {
  spotifyLink: string;
  appleMusicLink: string;
  youtubeMusicLink: string;
  amazonMusicLink: string;
  deezerLink: string;
}

const StreamingPlatforms: React.FC<StreamingPlatformsProps> = ({
  spotifyLink,
  appleMusicLink,
  youtubeMusicLink,
  amazonMusicLink,
  deezerLink,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const textFontSize = isDesktop ? '1rem' : '0.8rem';

  const platforms = [
    {
      name: 'Spotify',
      link: spotifyLink,
      imgSrc: '/images/streaming-icons/spotify.png',
    },
    {
      name: 'Apple',
      link: appleMusicLink,
      imgSrc: '/images/streaming-icons/apple-music.png',
    },
    {
      name: 'YouTube',
      link: youtubeMusicLink,
      imgSrc: '/images/streaming-icons/youtube.png',
    },
    {
      name: 'Amazon',
      link: amazonMusicLink,
      imgSrc: '/images/streaming-icons/amazon.png',
    },
    {
      name: 'Deezer',
      link: deezerLink,
      imgSrc: '/images/streaming-icons/deezer.png',
    },
  ];

  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: 'rgba(23, 23, 23, 0.4)',
        borderRadius: 2,
        p: 2,
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'nowrap',
        }}
      >
        {platforms.map((platform) => (
          <Link
            key={platform.name}
            href={platform.link}
            underline="none"
            color="inherit"
            sx={{ textAlign: 'center', flex: '1 1 auto' }}
          >
            <Image
              src={platform.imgSrc}
              alt={platform.name}
              width={60}
              height={60}
            />
            <Typography variant="body2" sx={{ fontSize: textFontSize }}>
              {platform.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default StreamingPlatforms;
