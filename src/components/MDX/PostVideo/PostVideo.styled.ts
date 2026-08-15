import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';
import ButtonBase from '@mui/material/ButtonBase';

export const StyledFacade = styled(ButtonBase)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(1.5)};
    margin: ${theme.spacing(3)} 0;
    text-align: left;
    border: 1px solid ${alpha(theme.palette.common.white, 0.15)};
    border-radius: ${theme.shape.borderRadius}px;
    background: ${alpha(theme.palette.common.white, 0.04)};
    transition: border-color 150ms ease, background-color 150ms ease;

    &:hover,
    &:focus-visible {
      border-color: ${theme.palette.primary.main};
      background: ${alpha(theme.palette.common.white, 0.07)};
    }
  `}
`;

export const StyledPoster = styled('span')`
  ${({ theme }) => css`
    position: relative;
    flex-shrink: 0;
    display: block;
    overflow: hidden;
    border-radius: ${Number(theme.shape.borderRadius) / 2}px;
    line-height: 0;

    img {
      display: block;
      width: 128px;
      height: 72px;
      object-fit: cover;
    }

    ${theme.breakpoints.up('sm')} {
      img {
        width: 160px;
        height: 90px;
      }
    }
  `}
`;

export const StyledPlayBadge = styled('span')`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
  background: rgba(0, 0, 0, 0.3);
  transition: background-color 150ms ease;
`;

export const StyledText = styled('span')`
  ${({ theme }) => css`
    display: block;
    min-width: 0;

    .video-eyebrow {
      display: block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: ${theme.palette.primary.main};
    }

    .video-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: ${theme.spacing(0.5)};
      font-weight: 600;
      line-height: 1.35;
      color: ${theme.palette.text.primary};
    }

    .video-meta {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(0.75)};
      margin-top: ${theme.spacing(0.5)};
      font-size: 0.85rem;
      color: ${theme.palette.text.secondary};
    }
  `}
`;

export const StyledPlayer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 16 / 9;
    margin: ${theme.spacing(3)} 0;
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
