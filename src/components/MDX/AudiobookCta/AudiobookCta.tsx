import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaSpotify, FaGooglePlay } from 'react-icons/fa';
import Icon from '@components/Icon';
import Link from '@components/Link';
import { AUDIOBOOK } from '@const/audiobook';

type Props = {
  /** Which chapter this post feeds, e.g. "Chapter 10: Stop Listening For It". */
  chapter?: string;
  /** One line on what that chapter does, written for this post's reader. */
  teaser?: string;
};

/**
 * End-of-post pointer to the audiobook.
 *
 * Takes the chapter so each post can point at the part of the book it leads
 * into. A reader finishing the CBT article is already the best-qualified
 * listener for the chapter built on it, and a generic "buy my audiobook" box
 * throws that away.
 */
const AudiobookCta: React.FC<Props> = ({ chapter, teaser }) => (
  <Box
    sx={{
      backgroundColor: 'rgba(23, 23, 23, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '12px',
      padding: { xs: '16px', md: '20px' },
      margin: '30px 0',
    }}
  >
    <Typography
      variant="overline"
      sx={{ opacity: 0.7, letterSpacing: '0.1em' }}
    >
      From the audiobook
    </Typography>
    <Typography variant="h6" component="p" sx={{ marginBottom: '6px' }}>
      {AUDIOBOOK.title}
    </Typography>
    <Typography variant="body2" sx={{ marginBottom: '14px' }}>
      {chapter ? <strong>{chapter}. </strong> : null}
      {teaser ??
        'The whole argument in under an hour, with every claim sourced.'}
    </Typography>
    <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Link
        href={AUDIOBOOK.spotify}
        target="_blank"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}
      >
        <Icon icon={FaSpotify} size={17} />
        Listen on Spotify
      </Link>
      <Link
        href={AUDIOBOOK.googlePlay}
        target="_blank"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}
      >
        <Icon icon={FaGooglePlay} size={15} />
        Google Play Books
      </Link>
    </Box>
  </Box>
);

export default AudiobookCta;
