import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

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

// Buttons rather than links, because both tabs are one page: the sessions have
// no route of their own any more. ?tab= still opens either of them.
export const StyledTabs = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(4)};

    button {
      min-height: 44px;
      padding: 0 ${theme.spacing(2)};
      border: 1px solid ${alpha(theme.palette.common.white, 0.15)};
      border-radius: 999px;
      background: none;
      font: inherit;
      font-size: 0.95rem;
      color: ${theme.palette.text.secondary};
      cursor: pointer;
      transition: color 150ms ease, border-color 150ms ease,
        background-color 150ms ease;
    }

    button:hover {
      color: ${theme.palette.text.primary};
      border-color: ${theme.palette.primary.main};
    }

    button[aria-current='page'] {
      color: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.main};
      background: ${alpha(theme.palette.common.white, 0.06)};
    }
  `}
`;

export const StyledAlbum = styled('div')`
  ${({ theme }) => css`
    /* ZenSessions already opens with a top margin; this only separates albums
       from each other. */
    & + & {
      margin-top: ${theme.spacing(2)};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const StyledNote = styled('p')`
  ${({ theme }) => css`
    max-width: 60ch;
    margin: 0 auto ${theme.spacing(3)};
    text-align: center;
    line-height: 1.7;
    color: ${theme.palette.text.secondary};
  `}
`;
