import { css } from '@emotion/react';
import { styled, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';
import ButtonBase from '@mui/material/ButtonBase';
import NextLink from 'next/link';

// One card in two shells: the /videos hub plays inline so it needs a button,
// the home row links to the hub so it needs an anchor. Only the element differs.
const card = (theme: Theme, active?: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: left;
  text-decoration: none;
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

  .video-poster {
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

  .video-badge {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    transition: background-color 150ms ease;
  }

  &:hover .video-badge {
    background: rgba(0, 0, 0, 0.15);
  }

  .video-length {
    position: absolute;
    right: ${theme.spacing(1)};
    bottom: ${theme.spacing(1)};
    padding: 0 ${theme.spacing(0.75)};
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
  }

  .video-title {
    display: block;
    padding: ${theme.spacing(1.5)};
    font-weight: 600;
    line-height: 1.35;
    color: ${theme.palette.text.primary};
  }
`;

export const StyledButtonCard = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  ${({ theme, active }) => card(theme, active)}
`;

export const StyledLinkCard = styled(NextLink)`
  ${({ theme }) => card(theme)}
`;
