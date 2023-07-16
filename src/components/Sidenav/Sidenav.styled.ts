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
      background: rgba(255, 255, 255, 0.005);
      backdrop-filter: blur(35px);
      -webkit-backdrop-filter: blur(35px);

      ${theme.breakpoints.up('sm')} {
        width: ${theme.spacing(40)};
      }
    }
  `}
`;
