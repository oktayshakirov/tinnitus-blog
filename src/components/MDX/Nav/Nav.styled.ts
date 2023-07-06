import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

export const StyledHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled('nav')`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(2)};

    ol {
      margin: 0;
      padding-left: ${theme.spacing(2)};

      li {
        list-style: none;
        margin: ${theme.spacing(0.5)} 0;

        ol {
          padding-left: ${theme.spacing(2)};
        }
      }

      a {
        display: inline-block;
        padding: ${theme.spacing(0.25)} 0;
      }
    }
  `}
`;

export const StyledDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== '$position',
})<{ $position: 'top' | 'bottom' }>`
  ${({ theme, $position }) => css`
    ${$position === 'top' &&
    css`
      margin-bottom: ${theme.spacing(1)};
    `};

    ${$position === 'bottom' &&
    css`
      margin-top: ${theme.spacing(1)};
    `};
  `}
`;
