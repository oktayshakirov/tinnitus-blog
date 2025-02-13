import { css } from '@emotion/react';
import { colors } from './colors';
import { theme } from '@theme/theme';

export const global = css`
  body {
    background: ${colors.background};
    color: ${theme.palette.grey[200]}!important;
    fontfamily: 'Nunito, sans-serif';
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

  a {
    text-decoration: none !important;
  }

.is-app .header {
  display: none;
`;
