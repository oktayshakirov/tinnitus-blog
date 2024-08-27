import { css } from '@emotion/react';
import { colors } from './colors';
import { Inter } from 'next/font/google';
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

  ins.adsbygoogle {
    display: block;
    margin: ${theme.spacing(3)} auto;
    max-width: 100%;
    padding: ${theme.spacing(3)};
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    text-align: center;
    box-sizing: border-box;
    color: ${theme.palette.text.primary};

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(5)};
    }
  }
`;
