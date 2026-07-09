import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StyledByline = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1.5)};
    text-decoration: none;
    color: inherit;
    padding: ${theme.spacing(1.5)} 0;

    &:hover .author-name {
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const StyledAvatar = styled('span')`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${theme.palette.grey[600]};

    img {
      object-fit: cover;
    }
  `}
`;

export const StyledMeta = styled('span')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    line-height: 1.35;

    .written-by {
      font-size: 0.75rem;
      color: ${theme.palette.text.secondary};
    }

    .author-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: ${theme.palette.common.white};
      transition: color ${theme.transitions.duration.shortest}ms;
    }

    .author-date {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(0.5)};
      font-size: 0.8rem;
      color: ${theme.palette.text.secondary};
    }
  `}
`;
