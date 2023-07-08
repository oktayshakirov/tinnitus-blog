import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)}
      ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.palette.grey[500]};
    height: ${theme.spacing(8)};
  `}
`;

export const StyledCloseButton = styled(IconButton)`
  display: flex;
`;

export const StyledNav = styled('nav')`
  ${({ theme }) => css`
    a {
      display: block;
      padding: ${theme.spacing(2)} ${theme.spacing(2)};
      color: ${theme.palette.common.white};
      text-decoration: none;
      transition: ${theme.transitions.duration.shortest}ms;

      &:hover,
      &:focus {
        color: ${theme.palette.grey[900]};
        background: ${theme.palette.common.white};
      }
    }
  `}
`;
