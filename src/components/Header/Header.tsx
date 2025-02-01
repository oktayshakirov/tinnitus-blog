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
        <StyledMenuButton onClick={toggleMainMenu} aria-label="Menu">
          <FormatListBulletedRoundedIcon />
        </StyledMenuButton>
        <StyledNav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Posts</Link>
            </li>
            <li>
              <Link href="/zen">Sounds</Link>
            </li>
            <li>
              <Link href="/tags">Tags</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </StyledNav>
      </StyledContainer>
      <MainMenuDrawer open={isMainMenuOpen} toggleMenu={toggleMainMenu} />
    </StyledAppBar>
  );
};

export default Header;
