import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

// Width at which the full nav row (8 links) still fits inside the container.
// Bump this if links are added, otherwise the row overflows the viewport.
const NAV_FITS_QUERY = '@media (min-width: 760px)';

export const StyledAppBar = styled(AppBar)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    height: ${theme.spacing(8)};
    box-shadow: none;

    ${theme.breakpoints.up('sm')} {
      height: ${theme.spacing(10)};
    }
  `}
`;

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 25px 25px;
    margin-bottom: 18px;
    position: relative;

    ${theme.breakpoints.down('xs')} {
      padding: 0 16px;
    }
  `}
`;

export const StyledMenuButton = styled(IconButton)`
  ${({ theme }) => css`
    display: flex;
    color: white;
    position: absolute;
    right: 26px;

    ${NAV_FITS_QUERY} {
      display: none;
    }
  `}
`;

export const StyledNav = styled('nav')`
  ${({ theme }) => css`
    display: none;

    ${NAV_FITS_QUERY} {
      display: flex;
      align-items: center;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      gap: ${theme.spacing(1.5)};

      ${theme.breakpoints.up('lg')} {
        gap: ${theme.spacing(4)};
      }
    }

    li {
      list-style: none;
      font-family: sans-serif;
      font-weight: bold;
      position: relative;
      cursor: pointer;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 14px;
      background: #734b6d;
      color: white;
      font-weight: bold;
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
      border-radius: 11px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #a5729e;
        color: #ffffff;
      }

      ${theme.breakpoints.up('lg')} {
        font-size: 17px;
        width: 100px;
      }
    }
  `}
`;
