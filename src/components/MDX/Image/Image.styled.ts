import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

export const StyledImageContainer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: ${theme.spacing(0.5)};
    min-height: 200px;
    aspect-ratio: 16 / 9;

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      aspect-ratio: 4 / 3;
      min-height: 180px;
    }

    img {
      object-fit: cover;
      object-position: center;
      width: 100% !important;
      height: 100% !important;
    }
  `}
`;
