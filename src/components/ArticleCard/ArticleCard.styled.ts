import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Link from '@components/Link';
import { alpha } from '@mui/system/colorManipulator';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

export const StyledCard = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    background: ${alpha(theme.palette.common.white, 0.05)};
    border-radius: ${theme.spacing(0.5)};
  `}
`;

export const StyledContent = styled('div')`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.palette.grey[800]};
    padding: ${theme.spacing(2)};

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${theme.palette.text.secondary};
    }
  `}
`;

export const StyledDate = styled(Chip)`
  ${({ theme }) => css`
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.black};
    margin: 0;
    position: absolute;
    top: ${theme.spacing(2)};
    left: ${theme.spacing(2)};
    z-index: 1;
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    && {
      color: ${theme.palette.common.white};
      text-decoration: none;

      &:active {
        img {
          transform: scale(1.1);
        }
      }
    }
  `}
`;

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: 0 ${theme.spacing(2)};
  `}
`;

export const StyledFooter = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(3)};
    padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
  `}
`;

export const StyledReadingTime = styled(Chip)`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.black};
    margin: 0;

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
    gap: ${theme.spacing(2)};
    overflow-x: scroll;

    /* Hide scrollbar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const StyledTag = styled('span')`
  text-transform: uppercase;

  a {
    text-decoration: none;
    white-space: nowrap;
  }
`;
