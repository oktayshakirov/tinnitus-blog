import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export const StyledMeta = styled('p')`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacing(3)};
    color: ${theme.palette.text.secondary};

    a {
      color: ${theme.palette.primary.main};
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const StyledChapters = styled('ul')`
  ${({ theme }) => css`
    list-style: none;
    margin: 0 0 ${theme.spacing(5)};
    padding: 0;

    a {
      display: inline-flex;
      align-items: center;
      /* 36px keeps the jump links a comfortable tap target without spacing a
         seven-chapter list out over a whole screen. */
      min-height: 36px;
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const StyledTimestamp = styled('span')`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(2)};
    font-variant-numeric: tabular-nums;
    color: ${theme.palette.primary.main};
  `}
`;

export const StyledToggle = styled('button')`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing(1)};
    min-height: 44px;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    cursor: pointer;
    color: ${theme.palette.primary.main};

    &::before {
      content: '';
      width: 0.45em;
      height: 0.45em;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg);
      transition: transform 150ms ease;
    }

    &[aria-expanded='true']::before {
      transform: rotate(-135deg);
    }
  `}
`;

export const StyledTranscript = styled('div', {
  shouldForwardProp: (prop) => prop !== 'shown',
})<{ shown?: boolean }>`
  ${({ theme, shown }) => css`
    /* display:none rather than unmounting - the words have to stay in the
       served HTML for this page to be worth having. */
    display: ${shown ? 'block' : 'none'};
    margin-bottom: ${theme.spacing(5)};

    h3 {
      /* Deliberately smaller than an article heading: at article scale an
         eight-part transcript reads as eight new articles. */
      margin: ${theme.spacing(4)} 0 ${theme.spacing(1)};
      font-size: 1.05rem;
      font-weight: 600;
      scroll-margin-top: ${theme.spacing(2)};
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: ${theme.palette.text.secondary};
    }
  `}
`;

export const StyledRelated = styled('div')`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(3)};
    grid-template-columns: 1fr;
    margin-top: ${theme.spacing(3)};

    ${theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${theme.breakpoints.up('md')} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;
