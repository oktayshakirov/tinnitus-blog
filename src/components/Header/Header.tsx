import { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Link from '@components/Link';
import MainMenuDrawer from '@components/MainMenuDrawer';
import { HEADER_MENU } from '@const/header-menu';
import {
  StyledAppBar,
  StyledContainer,
  StyledMenuButton,
  StyledNav,
} from './Header.styled';

const Header = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const toggleMainMenu = () => {
    setIsMainMenuOpen((prevState) => !prevState);
  };

  return (
    <StyledAppBar elevation={0} color="transparent" position="static">
      <StyledContainer>
        <StyledNav>
          <ul>
            <li>
              <Link href="/">Home</Link> {}
            </li>
            {HEADER_MENU.map(({ label, path }) => (
              <li key={label}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </StyledNav>
        <StyledMenuButton onClick={toggleMainMenu} aria-label="Menu">
          Show menu
          <KeyboardDoubleArrowDownIcon />
        </StyledMenuButton>
      </StyledContainer>
      <MainMenuDrawer open={isMainMenuOpen} toggleMenu={toggleMainMenu} />
    </StyledAppBar>
  );
};

export default Header;
