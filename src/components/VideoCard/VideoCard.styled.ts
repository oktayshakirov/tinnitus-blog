import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';

export const StyledCard = styled(NextLink)`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    text-align: left;
    text-decoration: none;

    .video-poster {
      position: relative;
      display: block;
      width: 100%;
      line-height: 0;
      border-radius: ${theme.shape.borderRadius}px;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
    }

    .video-length {
      position: absolute;
      right: ${theme.spacing(0.75)};
      bottom: ${theme.spacing(0.75)};
      padding: 0 ${theme.spacing(0.75)};
      border-radius: 4px;
      font-size: 0.6875rem;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      line-height: 1.6;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
    }

    .video-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: ${theme.spacing(1)};
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.35;
      color: ${theme.palette.text.primary};
      transition: color 150ms ease;
    }

    &:hover .video-title,
    &:focus-visible .video-title {
      color: ${theme.palette.primary.main};
    }
  `}
`;
