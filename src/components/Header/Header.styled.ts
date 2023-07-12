import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

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
  height: 70px;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 25px 25px;
  margin-bottom: 18px;
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
      color: white;
      font-family: sans-serif;
      font-weight: bold;
      position: relative;
      cursor: pointer;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      text-decoration: none;
      font-size: 17px;
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
    }
  `}
`;
