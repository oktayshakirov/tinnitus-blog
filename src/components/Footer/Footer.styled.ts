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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing(1)};
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
