import { css } from '@emotion/react';
import { colors } from './colors';
import { Inter } from '@next/font/google';
import { theme } from '@theme/theme';

const inter = Inter({ weight: ['400', '600'], subsets: ['latin'] });

export const global = css`
  body {
    background: ${colors.gradient}, ${colors.primary};
    color: ${theme.palette.grey[200]}!important;
    font-family: ${inter.style.fontFamily};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }
  input,
  textarea {
    font-family: inherit;
    font-weight: 400;
    font-size: 1rem;
  }
  #__next {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  main {
    flex-grow: 1;
  }
`;
