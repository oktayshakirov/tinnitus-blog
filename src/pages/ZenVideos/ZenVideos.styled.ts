import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledIntro = styled('p')`
  ${({ theme }) => css`
    max-width: 60ch;
    margin: 0 auto ${theme.spacing(4)};
    text-align: center;
    line-height: 1.7;
    color: ${theme.palette.text.secondary};
  `}
`;

export const StyledAlbum = styled('div')`
  ${({ theme }) => css`
    /* ZenSessions already opens with a top margin; this only separates albums
       from each other. */
    & + & {
      margin-top: ${theme.spacing(2)};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      color: ${theme.palette.primary.main};
    }
  `}
`;
