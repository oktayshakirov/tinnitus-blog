import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(5)};

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(5)};
    }
  `}
`;

export const StyledTabContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    padding: ${theme.spacing(3)};

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(4)};
    }

    h2 {
      margin-top: ${theme.spacing(3)};
      margin-bottom: ${theme.spacing(2)};
      color: ${theme.palette.text.primary};

      &:first-of-type {
        margin-top: ${theme.spacing(2)};
      }
    }

    p {
      line-height: 1.7;
      margin-bottom: ${theme.spacing(2)};
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin: ${theme.spacing(2)} 0;

      li {
        margin-bottom: ${theme.spacing(1.5)};
        padding-left: ${theme.spacing(2)};
        position: relative;

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${theme.palette.primary.main};
          font-size: 1.2em;
        }

        strong {
          color: ${theme.palette.text.primary};
          margin-right: ${theme.spacing(1)};
        }
      }
    }
  `}
`;

export const StyledSocialSection = styled(Box)`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)} 0;
    padding: ${theme.spacing(3)};
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    text-align: center;
  `}
`;

export const StyledSocialTitle = styled('h3')`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.palette.text.primary};
    font-size: 1.2rem;
  `}
`;

export const StyledIconContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.spacing(2.5)};
    margin-top: ${theme.spacing(2)};

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.palette.text.secondary};
      transition: all 0.3s ease;
      padding: ${theme.spacing(1)};
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.05);

      &:hover {
        color: ${theme.palette.primary.main};
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
      }
    }

    svg {
      width: 28px;
      height: 28px;
    }
  `}
`;

export const StyledContactInfo = styled(Box)`
  ${({ theme }) => css`
    margin: ${theme.spacing(3)} 0;
    padding: ${theme.spacing(2.5)};
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    border-left: 3px solid ${theme.palette.primary.main};
  `}
`;
