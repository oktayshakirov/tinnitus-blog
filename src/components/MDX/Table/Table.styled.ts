import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';
import { colors } from '@theme/colors';

type ViewportProps = { $fadeStart?: boolean; $fadeEnd?: boolean };

const FADE_WIDTH = '2rem';

export const StyledWrap = styled('div')`
  ${({ theme }) => css`
    margin: ${theme.spacing(3)} 0;
    max-width: 100%;
  `}
`;

// Holds the border and the edge fades so they sit above the scrolling content.
export const StyledViewport = styled('div')<ViewportProps>`
  ${({ theme, $fadeStart, $fadeEnd }) => css`
    position: relative;
    border: 1px solid ${alpha(theme.palette.common.white, 0.12)};
    border-radius: ${theme.spacing(1)};
    background-color: ${colors.surface};
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: ${FADE_WIDTH};
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 1;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        to right,
        ${colors.surface},
        ${alpha(colors.surface, 0)}
      );
      ${$fadeStart &&
      css`
        opacity: 1;
      `}
    }

    &::after {
      right: 0;
      background: linear-gradient(
        to left,
        ${colors.surface},
        ${alpha(colors.surface, 0)}
      );
      ${$fadeEnd &&
      css`
        opacity: 1;
      `}
    }
  `}
`;

export const StyledScroller = styled('div')`
  ${({ theme }) => css`
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    /* Keep the bar visible so it is obvious there is more to the right. */
    scrollbar-width: thin;
    scrollbar-color: ${alpha(theme.palette.common.white, 0.3)} transparent;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${alpha(theme.palette.common.white, 0.25)};
      border-radius: 3px;
    }

    &:focus-visible {
      outline: 2px solid ${theme.palette.primary.main};
      outline-offset: -2px;
    }
  `}
`;

export const StyledHint = styled('p')`
  ${({ theme }) => css`
    margin: ${theme.spacing(0.75)} 0 0;
    font-size: 0.8125rem;
    line-height: 1.4;
    color: ${alpha(theme.palette.common.white, 0.6)};
  `}
`;

export const StyledTable = styled('table')`
  ${({ theme }) => css`
    width: 100%;
    margin: 0;
    border-collapse: collapse;
    font-size: 0.9375rem;
    line-height: 1.55;

    th,
    td {
      padding: ${theme.spacing(1.25)} ${theme.spacing(1.75)};
      text-align: left;
      vertical-align: top;
      border-bottom: 1px solid ${alpha(theme.palette.common.white, 0.1)};
      border-right: 1px solid ${alpha(theme.palette.common.white, 0.08)};
      overflow-wrap: break-word;
    }

    th:last-of-type,
    td:last-of-type {
      border-right: 0;
    }

    tbody tr:last-of-type td {
      border-bottom: 0;
    }

    th {
      background-color: ${colors.surfaceStrong};
      font-weight: 600;
      color: ${theme.palette.primary.main};
    }

    tbody td:first-of-type {
      font-weight: 600;
    }

    @media (hover: hover) {
      tbody tr:hover {
        background-color: ${alpha(theme.palette.common.white, 0.03)};
      }
    }

    ${theme.breakpoints.down('sm')} {
      th,
      td {
        padding: ${theme.spacing(1)} ${theme.spacing(1.25)};
      }
    }
  `}
`;
