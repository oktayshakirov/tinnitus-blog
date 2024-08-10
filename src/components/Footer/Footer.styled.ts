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
    flex-wrap: wrap; // Allow items to wrap to the next line if needed
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
