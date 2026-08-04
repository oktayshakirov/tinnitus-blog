import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

export const StyledTabs = styled('nav')`
  ${({ theme }) => css`
    /* inline-flex ignores auto margins, which left this hard against the
       left edge; a fit-content block centres in the listing column. */
    display: flex;
    width: fit-content;
    margin: 0 auto ${theme.spacing(3)};
    padding: ${theme.spacing(0.5)};
    border: 1px solid ${alpha(theme.palette.common.white, 0.12)};
    border-radius: ${theme.spacing(1)};
    background-color: ${alpha(theme.palette.common.white, 0.05)};

    a {
      display: inline-flex;
      align-items: center;
      min-height: 40px;
      padding: 0 ${theme.spacing(2)};
      border-radius: ${theme.spacing(0.75)};
      font-size: 0.875rem;
      color: ${theme.palette.text.primary};
      transition: background-color 0.15s ease, color 0.15s ease;
    }

    a[aria-current='page'] {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.black};
      font-weight: 600;
    }

    @media (hover: hover) {
      a:not([aria-current='page']):hover {
        color: ${theme.palette.primary.main};
      }
    }
  `}
`;
