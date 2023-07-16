import Link from 'next/link';
import { DrawerProps } from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Sidenav from '@components/Sidenav';
import {
  StyledWrapper,
  StyledCloseButton,
  StyledNav,
} from './MainMenuDrawer.styled';

type Props = {
  toggleMenu: () => void;
} & DrawerProps;
const MainMenuDrawer = ({ open, toggleMenu, ...rest }: Props) => {
  return (
    <Sidenav open={open} onClose={toggleMenu} {...rest}>
      <StyledWrapper>
        Beyond the Buzz
        <StyledCloseButton onClick={toggleMenu}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledWrapper>
      <StyledNav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/zen">Sounds</Link>
      </StyledNav>
    </Sidenav>
  );
};

export default MainMenuDrawer;
