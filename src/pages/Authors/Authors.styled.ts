import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Link from 'next/link';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(5)};

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(5)};
      padding-bottom: ${theme.spacing(0)};
    }
  `}
`;

export const StyledIntro = styled('p')`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.palette.text.secondary};
    max-width: 640px;
    margin: 0 auto ${theme.spacing(4)};
  `}
`;

export const StyledGrid = styled('div')`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing(3)};
    max-width: 640px;
    margin: 0 auto;

    ${theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const StyledCard = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(3)};
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    text-decoration: none;
    color: inherit;
    transition: transform ${theme.transitions.duration.shortest}ms;

    &:hover {
      transform: translateY(-4px);
    }

    &:hover .card-name {
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const StyledAvatar = styled('span')`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${theme.palette.grey[600]};
    margin-bottom: ${theme.spacing(1)};

    img {
      object-fit: cover;
    }
  `}
`;

export const StyledName = styled('span')`
  ${({ theme }) => css`
    font-size: 1.15rem;
    font-weight: 700;
    color: ${theme.palette.common.white};
    transition: color ${theme.transitions.duration.shortest}ms;
  `}
`;

export const StyledRole = styled('span')`
  ${({ theme }) => css`
    font-size: 0.85rem;
    color: ${theme.palette.primary.main};
  `}
`;

export const StyledDescription = styled('span')`
  ${({ theme }) => css`
    font-size: 0.9rem;
    color: ${theme.palette.text.secondary};
  `}
`;
