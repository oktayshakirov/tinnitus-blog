import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

// Long-form reading settings for article bodies. Scoped to the direct children
// MDX emits so it never fights the styling inside Blockquote, Nav or Table.
export const StyledMDXContent = styled('div')`
  ${({ theme }) => css`
    font-size: 1.0625rem;
    line-height: 1.75;

    > p {
      margin: 0 0 ${theme.spacing(2.5)};
    }

    > ul,
    > ol {
      /* The browser default of 40px eats a tenth of a phone screen. */
      margin: 0 0 ${theme.spacing(2.5)};
      padding-left: ${theme.spacing(2.75)};
    }

    > ul > li,
    > ol > li {
      margin-bottom: ${theme.spacing(1)};
      padding-left: ${theme.spacing(0.25)};
    }

    > ul > li:last-of-type,
    > ol > li:last-of-type {
      margin-bottom: 0;
    }

    /* Colour alone is a weak signal for a link at this size. */
    > p a,
    > ul a,
    > ol a {
      text-decoration: underline !important;
      text-decoration-color: ${alpha(theme.palette.primary.main, 0.45)};
      text-underline-offset: 3px;
    }

    > hr {
      margin: ${theme.spacing(4)} 0;
      border: 0;
      border-top: 1px solid ${alpha(theme.palette.common.white, 0.12)};
    }

    ${theme.breakpoints.down('sm')} {
      /* Give headings clearly more space above than below so sections read
         as blocks rather than one continuous column. */
      > h2,
      > h3,
      > h4 {
        padding-top: ${theme.spacing(3)};
      }
    }

    ${theme.breakpoints.up('md')} {
      line-height: 1.7;
    }
  `}
`;
