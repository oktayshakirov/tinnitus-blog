import { ReactNode } from 'react';
import { StyledBlockquote } from './Blockquote.styled';

type Props = {
  children: ReactNode;
};
const Blockquote = ({ children }: Props) => (
  <StyledBlockquote>{children}</StyledBlockquote>
);

export default Blockquote;
