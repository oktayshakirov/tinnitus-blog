import { css } from '@emotion/react';
import { colors } from './colors';
import { theme } from '@theme/theme';

export const global = css`
  body {
    background: ${colors.gradient}, ${colors.primary};
    color: ${theme.palette.grey[200]}!important;
    fontFamily: 'Nunito, sans-serif;
    font-size: 1.1rem;
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
    margin 1px 0 0 0 !important;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    border-radius: 25px !important;
    overflow: hidden !important;
  }
`;
