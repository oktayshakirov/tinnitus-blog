import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Logo from '@components/Logo';

export const StyledAppBar = styled(AppBar)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    height: ${theme.spacing(8)};

    ${theme.breakpoints.up('sm')} {
      height: ${theme.spacing(10)};
    }
  `}
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  ${({ theme }) => css`
    width: ${theme.spacing(4)};

    ${theme.breakpoints.up('sm')} {
      width: ${theme.spacing(4.5)};
    }
  `}
`;

export const StyledMenuButton = styled(IconButton)`
  ${({ theme }) => css`
    display: flex;

    ${theme.breakpoints.up('sm')} {
      display: none;
    }
  `}
`;

export const StyledNav = styled('nav')`
  ${({ theme }) => css`
    display: none;

    ${theme.breakpoints.up('sm')} {
      display: block;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      gap: ${theme.spacing(5)};
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${theme.palette.common.white};
    }
  `}
`;
