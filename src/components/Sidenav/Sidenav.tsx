import { StyledDrawer } from './Sidenav.styled';
import { DrawerProps } from '@mui/material/Drawer';

type Props = DrawerProps;
const Sidenav = ({ anchor = 'left', children, ...rest }: Props) => {
  return (
    <StyledDrawer anchor={anchor} data-testid="sidenav" {...rest}>
      {children}
    </StyledDrawer>
  );
};

export default Sidenav;
