import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors } from './colors';

export const theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1060,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: 'Nunito, sans-serif',
    },
    palette: {
      mode: 'dark',
      primary: {
        main: colors.primary,
      },
      divider: colors.primary,
    },
  })
);
