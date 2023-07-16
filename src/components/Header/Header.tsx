import { useState } from 'react';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import Link from '@components/Link';
import MainMenuDrawer from '@components/MainMenuDrawer';
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/zen">Sounds</Link>
            </li>
          </ul>
        </StyledNav>
        <StyledMenuButton onClick={toggleMainMenu} aria-label="Menu">
          <FormatListBulletedRoundedIcon />
        </StyledMenuButton>
      </StyledContainer>
      <MainMenuDrawer open={isMainMenuOpen} toggleMenu={toggleMainMenu} />
    </StyledAppBar>
  );
};

export default Header;
