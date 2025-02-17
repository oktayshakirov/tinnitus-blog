import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(3)};
    padding-bottom: ${theme.spacing(0)};

    ${theme.breakpoints.up('md')} {
      padding-bottom: ${theme.spacing(5)};
    }
  `}
`;

export const StyledHeadingContainer = styled(Grid)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    h1,
    h2 {
      text-align: center;
      font-size: 3rem;
      ${theme.breakpoints.up('md')} {
        text-align: left;
        font-size: 3.5rem;
      }
    }

    h3 {
      color: ${theme.palette.text.secondary};
      text-align: center;
      font-size: 0.9rem;
      ${theme.breakpoints.up('md')} {
        text-align: left;
        font-size: 1.3rem;
      }
    }
  `}
`;

export const StyledLogoContainer = styled(Grid)`
  ${({}) => css`
    display: flex;
    justify-content: center;
    flex: 1;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;

    animation: floating 3s ease-in-out infinite;

    @keyframes floating {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `}
`;

export const StyledTabContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    margin-bottom: ${theme.spacing(5)};
    margin-top: ${theme.spacing(5)};
    padding: ${theme.spacing(3)};
  `}
`;

export const StyledTextContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.09);
    border-radius: 25px;
    padding: ${theme.spacing(1)};
    margin-top: ${theme.spacing(3)};
  `}
`;

export const StyledGrid = styled(Grid)`
  ${({}) => css`
    display: flex;
  `}
`;

StyledGrid.defaultProps = {
  item: true,
  xs: 12,
  sm: 6,
  md: 4,
};
