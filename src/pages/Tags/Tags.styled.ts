import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(5)};

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(5)};
    }
  `}
`;

export const StyledCardTags = styled(Box)`
  margin: ${({ theme }) => theme.spacing(4, 4, 2, 4)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${({ theme }) => theme.spacing(4, 0, 2, 0)};
  }
`;

export const StyledButton = styled(Button)`
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.06);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 25px 0 25px 0;
  font-size: 1rem;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const StyledTabContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    padding: ${theme.spacing(3)};
  `}
`;
