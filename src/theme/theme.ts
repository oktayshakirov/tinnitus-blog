import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'inherit',
    },
    palette: {
      mode: 'dark',
      primary: amber,
      divider: amber[700],
      background: {
        default: grey[900],
        paper: grey[900],
      },
    },
  })
);
