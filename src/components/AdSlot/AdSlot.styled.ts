import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

/**
 * Frame around an AdSense unit.
 *
 * Fixed slots are sized to a standard 300x250, so AdSense fills the box
 * exactly and the frame hugs the ad. Everything else is sized by AdSense from
 * the slot width; it can serve a shorter creative into the box it reserved,
 * and that leftover space is inside a cross-origin iframe we cannot measure or
 * collapse - framing it at least makes it read as a placement rather than a
 * broken layout.
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

    &[data-fixed='true'] {
      width: fit-content;

      ins.adsbygoogle {
        display: inline-block;
        width: 300px;
        height: 250px;
      }
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
    text-align: left;
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
