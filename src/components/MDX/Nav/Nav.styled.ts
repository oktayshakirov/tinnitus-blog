import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

export const StyledWrapper = styled('div')`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(3)};
  `}
`;

export const StyledToggle = styled('button')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing(1)};
    width: 100%;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    border: 1px solid ${alpha(theme.palette.common.white, 0.12)};
    border-radius: ${theme.spacing(1)};
    background-color: ${alpha(theme.palette.common.white, 0.05)};
    color: ${theme.palette.text.primary};
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    appearance: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.15s ease, border-color 0.15s ease;

    span {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(1)};
    }

    svg {
      transition: transform 0.2s ease;
    }

    svg.open {
      transform: rotate(180deg);
    }

    @media (hover: hover) {
      &:hover {
        border-color: ${alpha(theme.palette.primary.main, 0.5)};
      }
    }
  `}
`;

export const StyledNav = styled('nav')`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(1.5)};
    padding-left: ${theme.spacing(0.5)};

    ol {
      margin: 0;
      padding-left: ${theme.spacing(2)};

      li {
        list-style: none;
        margin: ${theme.spacing(0.5)} 0;

        ol {
          padding-left: ${theme.spacing(2)};
        }
      }

      a {
        display: inline-block;
        padding: ${theme.spacing(0.25)} 0;
      }
    }
  `}
`;
