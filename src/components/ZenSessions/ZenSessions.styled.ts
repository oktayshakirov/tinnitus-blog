import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
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
    width: 100%;
    text-align: left;

    .session-poster {
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

    .session-length {
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

    .session-label {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: ${theme.spacing(1)};
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.35;
      color: ${active ? theme.palette.primary.main : theme.palette.text.primary};
      transition: color 150ms ease;
    }

    &:hover .session-label,
    &:focus-visible .session-label {
      color: ${theme.palette.primary.main};
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
