import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@components/Link';
import MainMenuDrawer from '@components/MainMenuDrawer';
import { HEADER_MENU } from '@const/header-menu';
import {
  StyledAppBar,
  StyledContainer,
  StyledLogo,
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
        <div>
          <Link href="/">
            <StyledLogo />
          </Link>
        </div>

        <StyledNav>
          <ul>
            {HEADER_MENU.map(({ label, path }) => (
              <li key={label}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </StyledNav>
        <StyledMenuButton onClick={toggleMainMenu} aria-label="Menu">
          <MenuIcon />
        </StyledMenuButton>
      </StyledContainer>
      <MainMenuDrawer open={isMainMenuOpen} toggleMenu={toggleMainMenu} />
    </StyledAppBar>
  );
};

export default Header;
