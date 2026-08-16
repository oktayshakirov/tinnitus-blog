import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledIntro = styled('p')`
  ${({ theme }) => css`
    max-width: 60ch;
    margin: 0 auto ${theme.spacing(4)};
    text-align: center;
    line-height: 1.7;
    color: ${theme.palette.text.secondary};
  `}
`;

export const StyledGrid = styled('div')`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(3)};
    grid-template-columns: 1fr;

    ${theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${theme.breakpoints.up('md')} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;
