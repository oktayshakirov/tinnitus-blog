import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)} 0;

    ${theme.breakpoints.up('md')} {
      margin: ${theme.spacing(2)} 0 ${theme.spacing(4)};
    }
  `}
`;
