import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Link from '@components/Link';
import Chip from '@mui/material/Chip';
import { colors } from '@theme/colors';

export const StyledCard = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px 0 25px 0;
    margin: auto;
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
    display: flex;
    flex-direction: column;
    min-height: 370px; // Ensures consistent card height, adjust as needed
  `}
`;

export const StyledContent = styled('div')`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.palette.grey[800]};
    padding: ${theme.spacing(2)};
    display: flex;
    flex-direction: column;
    min-height: 0;

    h2 {
      margin-bottom: ${theme.spacing(1)};
      font-size: 1.1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      margin: 0;
      color: ${theme.palette.text.secondary};
    }
  `}
`;

export const StyledTime = styled(Chip)`
  ${({ theme }) => css`
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.black};
    margin: 0;
    position: absolute;
    top: ${theme.spacing(2)};
    left: ${theme.spacing(2)};
    z-index: 1;
    font-weight: bold;
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    && {
      color: ${theme.palette.common.white};
      text-decoration: none;
      display: flex;
      flex-direction: column;
      height: 100%;

      &:active {
        img {
          transform: scale(1.1);
        }
      }
    }
  `}
`;

export const StyledFooter = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(3)};
    padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
    margin-top: auto;
  `}
`;

export const StyledReadingTime = styled(Chip)`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.black};
    margin: 0;
    font-weight: bold;

    &:after {
      display: block;
      content: '';
      border-right: 1px solid ${theme.palette.divider};
      position: absolute;
      right: -${theme.spacing(1.5)};
      top: ${theme.spacing(0.5)};
      z-index: 1;
      height: ${theme.spacing(3)};
    }
  `}
`;

export const StyledTags = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1.5)};
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    min-height: 30px;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const StyledTag = styled('span')`
  text-transform: uppercase;
  font-size: 0.9rem;
  color: ${colors.primary};

  a {
    text-decoration: none;
    white-space: nowrap;
    color: inherit;
  }
`;
