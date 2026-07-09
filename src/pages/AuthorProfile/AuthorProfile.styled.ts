import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
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

export const StyledCard = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    padding: ${theme.spacing(3)};

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(4)};
    }
  `}
`;

export const StyledHeader = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(2)};
  `}
`;

export const StyledAvatar = styled('span')`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${theme.palette.grey[600]};
    margin-bottom: ${theme.spacing(1)};

    img {
      object-fit: cover;
    }
  `}
`;

export const StyledRole = styled('p')`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.palette.primary.main};
    font-size: 0.95rem;
  `}
`;

export const StyledSocials = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(1)};

    a {
      color: ${theme.palette.common.white};
      display: inline-flex;
      transition: color ${theme.transitions.duration.shortest}ms;

      &:hover {
        color: ${theme.palette.primary.main};
      }
    }
  `}
`;

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: ${theme.spacing(3)} 0;
  `}
`;

export const StyledBio = styled('div')`
  ${({ theme }) => css`
    p {
      margin: 0 0 ${theme.spacing(2)};
      line-height: 1.7;
    }
  `}
`;

export const StyledSectionTitle = styled('h2')`
  ${({ theme }) => css`
    font-size: 1.35rem;
    color: ${theme.palette.common.white};
    margin: 0 0 ${theme.spacing(2)};
  `}
`;

export const StyledResources = styled('div')`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing(2)};

    ${theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const StyledResourceCard = styled(Link)`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacing(2)};
    border: 1px solid ${theme.palette.grey[700]};
    border-radius: 15px;
    text-decoration: none;
    color: inherit;
    transition: border-color ${theme.transitions.duration.shortest}ms;

    &:hover {
      border-color: ${theme.palette.primary.main};
    }

    &:hover .resource-label {
      color: ${theme.palette.primary.main};
    }

    .resource-label {
      display: block;
      font-weight: 700;
      color: ${theme.palette.common.white};
      margin-bottom: ${theme.spacing(0.5)};
      transition: color ${theme.transitions.duration.shortest}ms;
    }

    .resource-description {
      display: block;
      font-size: 0.85rem;
      color: ${theme.palette.text.secondary};
      line-height: 1.5;
    }
  `}
`;
