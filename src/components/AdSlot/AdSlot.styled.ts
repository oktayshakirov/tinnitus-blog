import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

/**
 * Frame around an AdSense unit. Google reserves a box from the slot width and
 * often serves a shorter creative into it, leaving transparent space we cannot
 * measure or collapse. Framing the slot makes that space read as a deliberate
 * placement instead of a broken layout.
 *
 * The frame only paints once an ad is actually there, so blocked or unfilled
 * slots leave nothing behind.
 */
export const StyledAdSlot = styled('div')`
  ${({ theme }) => css`
    margin: ${theme.spacing(1)} auto;

    ins.adsbygoogle {
      display: block;
      width: 100%;
    }

    &[data-filled='true'] {
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.15);
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
      border-radius: 25px 0 25px 0;
      padding-bottom: ${theme.spacing(1)};
    }
  `}
`;

export const StyledAdLabel = styled('span')`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    font-size: 0.7rem;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.palette.text.secondary};
  `}
`;

export const StyledAdPlaceholder = styled('div')`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacing(10)};
    border: 1px dashed ${theme.palette.common.white};
    color: ${theme.palette.common.white};
  `}
`;
