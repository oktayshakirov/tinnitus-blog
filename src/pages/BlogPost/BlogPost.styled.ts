import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(5)};

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(5)};
      padding-bottom: ${theme.spacing(0)};
    }
  `}
`;

export const StyledHeadline = styled('div')`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)} 0 ${theme.spacing(4)};

    ${theme.breakpoints.up('md')} {
      margin: ${theme.spacing(4)} 0 ${theme.spacing(6)};
    }
  `}
`;

export const StyledDate = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    margin: 0 0 ${theme.spacing(1)} 0;
  `}
`;

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)} 0;
  `}
`;
