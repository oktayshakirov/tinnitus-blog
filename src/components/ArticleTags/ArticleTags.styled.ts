import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledTags = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.spacing(2)};
  `}
`;

export const StyledTag = styled('span')`
  text-transform: uppercase;

  a {
    text-decoration: none;
  }
`;
