import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledIntro = styled('p')`
  ${({ theme }) => css`
    max-width: 60ch;
    margin: 0 auto ${theme.spacing(4)};
    text-align: center;
    line-height: 1.7;
    color: ${theme.palette.text.secondary};
  `}
`;

export const StyledPlayer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 16 / 9;
    margin-bottom: ${theme.spacing(4)};
    overflow: hidden;
    border-radius: ${theme.shape.borderRadius}px;

    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `}
`;

export const StyledGrid = styled('div')`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(3)};
    grid-template-columns: 1fr;

    ${theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${theme.breakpoints.up('md')} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const StyledItem = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};

    /* The source link sits under the card rather than inside it: the card is a
       button that loads the player, and an anchor nested in a button is neither
       valid markup nor reachable by keyboard. */
    .video-source {
      font-size: 0.85rem;
      color: ${theme.palette.text.secondary};
      text-decoration: none;
    }

    .video-source:hover {
      color: ${theme.palette.primary.main};
    }
  `}
`;
