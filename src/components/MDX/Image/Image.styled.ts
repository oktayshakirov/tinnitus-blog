import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

export const StyledImageContainer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    height: 40vw;
    border-radius: ${theme.spacing(0.5)};

    img {
      object-fit: cover;
    }

    ${theme.breakpoints.up('md')} {
      height: 30vw;
      max-height: ${theme.spacing(50)};
    }
  `}
`;
