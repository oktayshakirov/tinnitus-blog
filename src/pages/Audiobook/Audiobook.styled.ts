import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';

// Same visual language as the App page: it is the other product landing page
// on this site, and two of them should not look like different websites.
const gradientBackground = (theme: Theme) => css`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: ${theme.spacing(4)};
`;

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing(8)};
    max-width: 1200px;

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(4)};
    }
  `}
`;

export const HeaderSection = styled(Box)`
  ${({ theme }) => css`
    text-align: center;
    position: relative;
    padding: ${theme.spacing(4)};
    ${gradientBackground(theme)}

    h1 {
      background: linear-gradient(
        135deg,
        ${theme.palette.primary.main},
        ${theme.palette.secondary.main}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${theme.spacing(2)};
    }
  `}
`;

export const Section = styled(Box)`
  ${({ theme }) => css`
    margin: ${theme.spacing(8)} 0;
    padding: ${theme.spacing(4)};
    ${gradientBackground(theme)}

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(6)};
    }
  `}
`;

export const BadgeRow = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.spacing(1.5)};
    margin-top: ${theme.spacing(3)};

    a {
      transition: transform 0.2s ease-in-out;
      display: inline-block;

      &:hover {
        transform: translateY(-2px);
      }
    }
  `}
`;

export const FactsGrid = styled(Box)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing(2)};

    ${theme.breakpoints.down('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const Fact = styled(Box)`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacing(2)};
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: ${theme.spacing(2)};
  `}
`;

export const ChapterRow = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    gap: ${theme.spacing(1.5)};
    padding: ${theme.spacing(1.25)} 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    &:last-of-type {
      border-bottom: none;
    }

    .label {
      flex: 0 0 auto;
      min-width: 92px;
      opacity: 0.6;
      font-size: 0.85rem;
    }

    .title {
      flex: 1 1 auto;
    }

    .length {
      flex: 0 0 auto;
      opacity: 0.6;
      font-variant-numeric: tabular-nums;
      font-size: 0.9rem;
    }

    ${theme.breakpoints.down('sm')} {
      flex-wrap: wrap;

      .label {
        min-width: 0;
      }

      .title {
        flex: 1 1 100%;
        order: 3;
      }
    }
  `}
`;

// The free excerpt. Set apart from the page's own voice so it reads as the
// book talking, not as marketing copy about the book.
export const Excerpt = styled(Box)`
  ${({ theme }) => css`
    border-left: 3px solid ${theme.palette.primary.main};
    padding-left: ${theme.spacing(3)};
    margin: ${theme.spacing(3)} 0;

    p {
      margin-bottom: ${theme.spacing(2)};
      font-size: 1.05rem;
      line-height: 1.7;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  `}
`;
