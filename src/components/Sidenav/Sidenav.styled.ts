import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';
import Drawer from '@mui/material/Drawer';

export const StyledDrawer = styled(Drawer)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${theme.breakpoints.up('md')} {
      display: none;
    }

    .MuiPaper-root {
      width: 100%;
      background: ${theme.palette.grey['900']};

      ${theme.breakpoints.up('sm')} {
        width: ${theme.spacing(40)};
      }
    }
  `}
`;
