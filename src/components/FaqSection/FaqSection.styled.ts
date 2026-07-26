import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)} 0 ${theme.spacing(2)};
  `}
`;

export const StyledItem = styled('div')`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
    border-radius: ${theme.shape.borderRadius}px;
    background-color: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);

    h3 {
      margin: 0 0 ${theme.spacing(1)};
    }

    p {
      margin: 0;
      color: ${theme.palette.text.secondary};
    }
  `}
`;
