import { useState, useEffect } from 'react';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import Link from '@components/Link';
import MainMenuDrawer from '@components/MainMenuDrawer';
import {
  StyledAppBar,
  StyledContainer,
  StyledMenuButton,
  StyledNav,
} from './Header.styled';

function getIsAppFlag(): boolean {
  if (typeof window === 'undefined') return false;
  const urlParams = new URLSearchParams(window.location.search);
  return (
    urlParams.get('isApp') === 'true' ||
    !!window.isApp ||
    localStorage.getItem('isApp') === 'true'
  );
}

const Header = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isApp, setIsApp] = useState<boolean>(() => getIsAppFlag());

  const toggleMainMenu = () => {
    setIsMainMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const flag = getIsAppFlag();
    if (flag) {
      setIsApp(true);
      localStorage.setItem('isApp', 'true');
    }
  }, []);

  return (
    <StyledAppBar elevation={0} color="transparent" position="static">
      <StyledContainer>
        {!isApp && (
          <StyledMenuButton onClick={toggleMainMenu} aria-label="Menu">
            <FormatListBulletedRoundedIcon />
          </StyledMenuButton>
        )}
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
