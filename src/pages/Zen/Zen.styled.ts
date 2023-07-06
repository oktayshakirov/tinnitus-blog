import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

export const StyledPagination = styled(Pagination)`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)} 0;
  `}
`;
