import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

export const StyledBlockquote = styled('blockquote')`
  ${({ theme }) => css`
    line-height: 1.65;
    background: ${alpha(theme.palette.common.white, 0.05)};
    border-left: 4px solid ${theme.palette.primary.dark};
    margin: ${theme.spacing(3)} 0;
    padding: ${theme.spacing(1.5)} ${theme.spacing(2)} ${theme.spacing(1.5)}
      ${theme.spacing(2)};
    color: ${theme.palette.text.primary};

    ${theme.breakpoints.up('md')} {
      line-height: 1.7;
      padding: ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}
        ${theme.spacing(2.5)};
      margin: ${theme.spacing(4)} 0;
    }

    p {
      margin: 0;
    }
  `}
`;
