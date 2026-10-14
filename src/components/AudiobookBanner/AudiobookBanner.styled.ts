import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@components/Link';

export const StyledContainer = styled(Container)`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 1rem;
`;

export const BannerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
}));

export const ButtonSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginTop: theme.spacing(1.5),
  flexWrap: 'wrap',
}));

// Built from react-icons rather than the stores' own badge images: the
// official badges are separate downloads with their own usage rules, and two
// different vendors' artwork side by side never lines up. These match the
// icon treatment the footer already uses elsewhere.
export const StoreButton = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 14px',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontSize: '0.85rem',
  lineHeight: 1.2,
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.45)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '7px 12px',
  },
}));
