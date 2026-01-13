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
    margin: ${theme.spacing(2)} 0 0;

    ${theme.breakpoints.up('md')} {
      margin: ${theme.spacing(4)} 0 0;
    }
  `}
`;

export const StyledDate = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(0.5)};
  `}
`;

export const StyledMetaRow = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
    margin: ${theme.spacing(1)} 0 0 0;
    flex-wrap: wrap;
  `}
`;

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)} 0;
  `}
`;
