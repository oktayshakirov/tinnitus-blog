import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(5)};

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(5)};
      padding-bottom: ${theme.spacing(10)};
    }
  `}
`;

export const StyledTabContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    padding: ${theme.spacing(3)};
  `}
`;
