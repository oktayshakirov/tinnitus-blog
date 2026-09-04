import { ReactNode, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListIcon from '@mui/icons-material/List';
import { StyledWrapper, StyledToggle, StyledNav } from './Nav.styled';

type Props = {
  children?: ReactNode;
};
/*
  This component is used as a table of contents in the MDX.
 */
const Nav = ({ children, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper id="toc-wrapper">
      <StyledToggle
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <ListIcon fontSize="small" />
          On this page
        </span>
        <KeyboardArrowDownIcon
          className={isOpen ? 'open' : undefined}
          fontSize="small"
        />
      </StyledToggle>
      <Collapse in={isOpen}>
        <StyledNav {...rest}>{children}</StyledNav>
      </Collapse>
    </StyledWrapper>
  );
};

export default Nav;
