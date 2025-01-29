import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

export const StyledImageContainer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: ${theme.spacing(0.5)};

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    ${theme.breakpoints.down('md')} {
      aspect-ratio: 4 / 3;
    }

    ${theme.breakpoints.up('md')} {
      max-height: ${theme.spacing(50)};
    }
  `}
`;
