import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

export const StyledPagination = styled(Pagination)`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)} 0;
  `}
`;

export const StyledZenHeadline = styled(Typography)`
  ${({ theme }) => css`
    font-size: ${theme.typography.h4.fontSize};
    color: ${theme.palette.primary.main};

    margin: ${theme.spacing(2)} 0;
    font-weight: bold;
  `}
`;
