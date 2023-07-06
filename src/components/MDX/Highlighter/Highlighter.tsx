import { ReactNode } from 'react';
import { StyledHighlighter } from './Highlighter.styled';

type Props = {
  children: ReactNode;
} & {
  onlyText?: boolean;
};
const Highlighter = ({ children, onlyText }: Props) => (
  <StyledHighlighter $onlyText={onlyText}>{children}</StyledHighlighter>
);

export default Highlighter;
