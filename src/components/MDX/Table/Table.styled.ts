import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

export const StyledTable = styled('table')`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacing(3)} 0;
    border-collapse: collapse;
    background: ${alpha(theme.palette.common.white, 0.03)};
    border-radius: ${theme.spacing(1)};
    display: table;

    th,
    td {
      padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
      border: 1px solid ${alpha(theme.palette.common.white, 0.1)};
      text-align: left;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    tr td,
    tr th {
      width: auto;
    }

    tr:first-of-type th:nth-last-of-type(-n + 3):first-of-type,
    tr:first-of-type th:nth-last-of-type(-n + 3):first-of-type ~ th {
      width: ${100 / 3}%;
    }

    tr:first-of-type th:nth-last-of-type(-n + 2):first-of-type,
    tr:first-of-type th:nth-last-of-type(-n + 2):first-of-type ~ th {
      width: 50%;
    }

    /* Style headers */
    th {
      background: ${alpha(theme.palette.common.white, 0.05)};
      font-weight: 600;
      color: ${theme.palette.primary.main};
    }

    tr:hover {
      background: ${alpha(theme.palette.common.white, 0.02)};
    }

    ${theme.breakpoints.down('md')} {
      th,
      td {
        padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
        font-size: 0.875rem;
      }
    }

    ${theme.breakpoints.down('sm')} {
      th,
      td {
        padding: ${theme.spacing(0.75)} ${theme.spacing(1)};
        font-size: 0.8125rem;
      }
    }

    @media (max-width: 600px) {
      &:has(th:nth-of-type(4)) {
        display: block;
        overflow-x: auto;
        width: 100%;
      }

      &:not(:has(th:nth-of-type(4))) {
        display: table;
        width: 100%;
      }
    }
  `}
`;
