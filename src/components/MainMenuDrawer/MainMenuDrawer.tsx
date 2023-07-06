import Link from 'next/link';
import { DrawerProps } from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Sidenav from '@components/Sidenav';
import { HEADER_MENU } from '@const/header-menu';
import {
  StyledWrapper,
  StyledLogo,
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
        <StyledLogo />
        <StyledCloseButton onClick={toggleMenu}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledWrapper>
      <StyledNav>
        {HEADER_MENU.map(({ label, path }) => (
          <Link key={label} href={path}>
            <span>{label}</span>
          </Link>
        ))}
      </StyledNav>
    </Sidenav>
  );
};

export default MainMenuDrawer;
