import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { css } from '@emotion/react';

export const StyledFooter = styled('footer')`
  ${({ theme }) => css`
    padding: ${theme.spacing(3)} 0;
  `}
`;

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(1)};

    @media (max-width: ${theme.breakpoints.values.sm}px) {
    }
  `}
`;

export const StyledCopyright = styled('div')`
  text-align: center;
`;

export const StyledText = styled('div')`
  ${({ theme }) => css`
    font-size: ${theme.typography.body2.fontSize};
    color: ${theme.palette.text.secondary};
  `}
`;

export const StyledIconContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};

    a {
      color: ${theme.palette.text.secondary};
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.palette.primary.main};
      }
    }

    svg {
      width: 24px;
      height: 24px;
    }
  `}
`;
