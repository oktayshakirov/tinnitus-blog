import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

export const StyledImageContainer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    height: ${theme.spacing(25)};

    ${theme.breakpoints.up('md')} {
      height: ${theme.spacing(30)};
      max-height: ${theme.spacing(50)};
    }

    img {
      object-fit: cover;
      transition: ${theme.transitions.duration.short}ms;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -35%);
      width: ${theme.spacing(15)};
      height: ${theme.spacing(15)};
      fill: ${theme.palette.grey[800]};
    }
  `}
`;
