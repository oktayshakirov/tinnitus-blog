import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';
import ButtonBase from '@mui/material/ButtonBase';

export const StyledSection = styled('section')`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(5)};
  `}
`;

export const StyledPlayer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 16 / 9;
    margin-bottom: ${theme.spacing(2)};
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
    gap: ${theme.spacing(2)};
    grid-template-columns: 1fr;

    ${theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const StyledCard = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  ${({ theme, active }) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;
    text-align: left;
    border: 1px solid
      ${active
        ? theme.palette.primary.main
        : alpha(theme.palette.common.white, 0.15)};
    border-radius: ${theme.shape.borderRadius}px;
    background: ${alpha(theme.palette.common.white, active ? 0.08 : 0.04)};
    transition: border-color 150ms ease, background-color 150ms ease;

    &:hover,
    &:focus-visible {
      border-color: ${theme.palette.primary.main};
      background: ${alpha(theme.palette.common.white, 0.07)};
    }

    .session-poster {
      position: relative;
      display: block;
      width: 100%;
      line-height: 0;

      img {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
    }

    .session-badge {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
    }

    .session-body {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: ${theme.spacing(1)};
      width: 100%;
      padding: ${theme.spacing(1.25)} ${theme.spacing(1.5)};
    }

    .session-label {
      font-weight: 600;
      line-height: 1.3;
      color: ${theme.palette.text.primary};
    }

    .session-length {
      flex-shrink: 0;
      font-size: 0.85rem;
      font-variant-numeric: tabular-nums;
      color: ${theme.palette.text.secondary};
    }
  `}
`;

export const StyledNote = styled('p')`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)} 0 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${theme.palette.text.secondary};
  `}
`;
