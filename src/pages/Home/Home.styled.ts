import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

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

export const StyledHeadingContainer = styled(Grid)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing(3)};

    h2 {
      color: ${theme.palette.text.secondary};
    }

    ${theme.breakpoints.up('md')} {
      margin-bottom: ${theme.spacing(0)};
    }
  `}
`;

export const StyledLogoContainer = styled(Grid)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacing(2)};
    flex: 1;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;

    ${theme.breakpoints.up('md')} {
      margin-top: ${theme.spacing(0)};
    }

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

export const StyledCard = styled(Card)`
  ${({ theme }) => css`
    max-width: 345px;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px 0 25px 0;
    margin: auto;
    margin-top: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(3)};
  `}
`;

export const StyledTabContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    margin-bottom: ${theme.spacing(6)};
    padding: ${theme.spacing(3)};
  `}
`;

export const StyledTextContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.09);
    border-radius: 25px;
    padding: ${theme.spacing(1)};
  `}
`;
