import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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

export const BadgeSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginTop: theme.spacing(1.5),
}));
