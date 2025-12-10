import { css } from '@emotion/react';
import { colors } from './colors';
import { theme } from '@theme/theme';

export const global = css`
  body {
    background: ${colors.background};
    color: ${theme.palette.grey[200]}!important;
    font-size: 1rem;
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

  /* Hide unfilled or error ads */
  div:has(> ins.adsbygoogle[data-ad-status='unfilled']),
  div:has(> ins.adsbygoogle[data-ad-status='error']) {
    display: none !important;
  }

  /* Mobile ad styling to prevent cropping and empty space */
  @media (max-width: 768px) {
    ins.adsbygoogle {
      width: 100% !important;
      max-width: 100% !important;
      min-height: 0 !important;
      overflow: hidden !important;
    }

    /* Hide empty ad containers on mobile */
    div:has(> ins.adsbygoogle:empty),
    div:has(> ins.adsbygoogle[data-adsbygoogle-status='unfilled']),
    div:has(> ins.adsbygoogle[data-adsbygoogle-status='error']) {
      display: none !important;
      height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Ensure ad containers don't leave empty space */
    div:has(> ins.adsbygoogle[data-adsbygoogle-status='done']):not(
        :has(> ins.adsbygoogle > *)
      ) {
      display: none !important;
    }
  }
`;
