import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

export const StyledImageContainer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: ${theme.spacing(0.5)};
    min-height: 200px;

    ${theme.breakpoints.down('md')} {
      aspect-ratio: 4 / 3;
    }
  `}
`;
