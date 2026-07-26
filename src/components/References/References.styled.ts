import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)} 0 ${theme.spacing(2)};
  `}
`;

export const StyledList = styled('ol')`
  ${({ theme }) => css`
    padding-left: ${theme.spacing(2.5)};
    margin: 0;

    li {
      margin-bottom: ${theme.spacing(1)};
      color: ${theme.palette.text.secondary};
      font-size: 0.95rem;
    }

    a {
      color: ${theme.palette.primary.light};
    }
  `}
`;
