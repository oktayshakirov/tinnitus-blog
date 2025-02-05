import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

export const StyledPagination = styled(Pagination)`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)} 0;
  `}
`;

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
