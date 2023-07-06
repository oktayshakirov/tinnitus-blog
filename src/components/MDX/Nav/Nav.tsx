import { ReactNode, useState } from 'react';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledHeader, StyledNav, StyledDivider } from './Nav.styled';

type Props = {
  children?: ReactNode;
};
/*
  This component is used as a table of contents in the MDX.
 */
const Nav = ({ children, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="toc-wrapper">
      <StyledDivider $position="top" />
      <StyledHeader>
        <Typography component="p">
          Article Navigation: Quick Access to Sections
        </Typography>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </StyledHeader>
      <Collapse in={isOpen}>
        <StyledNav {...rest}>{children}</StyledNav>
      </Collapse>
      <StyledDivider $position="bottom" />
    </div>
  );
};

export default Nav;
