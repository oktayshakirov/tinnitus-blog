import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    height: ${theme.spacing(40)};

    ${theme.breakpoints.up('md')} {
      display: flex;
      align-items: center;
      height: ${theme.spacing(70)};
    }
  `}
`;

export const StyledHeadingContainer = styled(Grid)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacing(10)};

    h2 {
      color: ${theme.palette.text.secondary};
    }

    ${theme.breakpoints.up('md')} {
      margin-top: 0;
    }
  `}
`;

export const StyledLogoContainer = styled(Grid)`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacing(6)};
    right: ${theme.spacing(2)};
    opacity: 0.015;

    ${theme.breakpoints.up('md')} {
      display: flex;
      justify-content: center;
      position: static;
      opacity: 1;
    }
  `}
`;
