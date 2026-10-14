import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { colors } from '@theme/colors';

// Shared by AppsBanner and AudiobookBanner. They sit side by side in the
// footer, so one set of styles keeps them a matched pair; the artwork on the
// left is what tells them apart.
//
// The flex basis lets the two cards share a row on desktop and wrap onto their
// own rows on narrower screens. On /app or /audiobook only one is rendered and
// it grows to the full width.
export const StyledCard = styled(Box)(({ theme }) => ({
  flex: '1 1 440px',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  // Transparent at rest so the hover border does not shift the layout.
  border: '1px solid transparent',
  borderRadius: '25px',
  padding: theme.spacing(2.5, 3),
  transition:
    'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background-color 200ms ease',

  // Hover only where there is a real pointer: on touch screens a tap would
  // leave the card stuck in its lifted state.
  '@media (hover: hover)': {
    '&:hover': {
      transform: 'translateY(-3px)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(255, 218, 185, 0.25)',
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
    },
    '&:hover .promo-artwork': {
      transform: 'scale(1.05) rotate(-2deg)',
    },
    '&:hover h2': {
      color: colors.primary,
    },
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&:hover, &:hover .promo-artwork': {
      transform: 'none',
    },
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    padding: theme.spacing(2.5, 2),
    textAlign: 'center',
  },
}));

export const Artwork = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  // 96px keeps both sources sharp at 2x: the app icon is 180px and the cover
  // thumbnail 192px.
  width: 96,
  height: 96,
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
  transition: 'transform 250ms ease',

  '& a, & img': {
    display: 'block',
    width: '100%',
    height: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    width: 72,
    height: 72,
    borderRadius: '16px',
  },
}));

export const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minWidth: 0,

  '& h2': {
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: 1.2,
    transition: 'color 200ms ease',
  },

  '& p': {
    marginTop: theme.spacing(0.75),
    fontSize: '1.0625rem',
    lineHeight: 1.5,
    color: theme.palette.text.secondary,
  },

  '& p a': {
    color: colors.primary,
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    '& h2': {
      fontSize: '1.4rem',
    },
    '& p': {
      fontSize: '1rem',
    },
  },
}));

// A small label above the title, so the two cards can be told apart before
// reading them.
export const Eyebrow = styled('span')`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  opacity: 0.85;
  margin-bottom: 2px;
`;

// No wrapping: a badge row that breaks on one card but not the other reads as
// a mistake. flexShrink keeps the badges on one line even though the Spotify
// badge is a little wider than the app ones.
export const BadgeSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: theme.spacing(2),

  '& a': {
    flexShrink: 0,
    display: 'inline-flex',
    borderRadius: '8px',
    transition: 'transform 150ms ease, filter 150ms ease',
  },

  '@media (hover: hover)': {
    '& a:hover': {
      transform: 'translateY(-2px)',
      filter: 'brightness(1.15)',
    },
  },

  '@media (prefers-reduced-motion: reduce)': {
    '& a': { transition: 'none' },
    '& a:hover': { transform: 'none' },
  },
}));
