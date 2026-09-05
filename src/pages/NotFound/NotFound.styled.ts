import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: ${theme.spacing(6)};
    padding-bottom: ${theme.spacing(8)};

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(10)};
      padding-bottom: ${theme.spacing(12)};
    }
  `}
`;

export const StyledMascotWrap = styled('div')`
  ${({ theme }) => css`
    width: ${theme.spacing(16)};
    height: ${theme.spacing(16)};
    margin-bottom: ${theme.spacing(3)};

    img {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const StyledMessage = styled('p')`
  ${({ theme }) => css`
    max-width: 480px;
    line-height: 1.7;
    opacity: 0.85;
    margin-bottom: ${theme.spacing(4)};
  `}
`;

export const StyledActions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacing(2)};
  `}
`;
