import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledDisclaimer = styled('aside')`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)} 0 0;
    padding: ${theme.spacing(2)};
    border-left: 3px solid ${theme.palette.primary.main};
    border-radius: ${theme.shape.borderRadius}px;
    background-color: rgba(255, 255, 255, 0.03);

    p {
      margin: 0;
      color: ${theme.palette.text.secondary};
    }
  `}
`;
