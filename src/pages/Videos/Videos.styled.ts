import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

// Links, because each tab is a route of its own: /videos and /videos/sessions.
export const StyledTabs = styled('nav')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(4)};

    a {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      padding: 0 ${theme.spacing(2)};
      border: 1px solid ${alpha(theme.palette.common.white, 0.15)};
      border-radius: 999px;
      font-size: 0.95rem;
      text-decoration: none;
      color: ${theme.palette.text.secondary};
      transition: color 150ms ease, border-color 150ms ease,
        background-color 150ms ease;
    }

    a:hover {
      color: ${theme.palette.text.primary};
      border-color: ${theme.palette.primary.main};
    }

    a[aria-current='page'] {
      color: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.main};
      background: ${alpha(theme.palette.common.white, 0.06)};
    }
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
