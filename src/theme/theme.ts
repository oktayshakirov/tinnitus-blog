import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const customColor = '#FFDAB9';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Nunito, sans-serif',
    },
    palette: {
      mode: 'dark',
      primary: {
        main: customColor,
      },
      divider: customColor,
      background: {
        default: grey[900],
        paper: grey[900],
      },
    },
  })
);
