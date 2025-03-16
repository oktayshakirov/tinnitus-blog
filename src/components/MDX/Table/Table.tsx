import { ReactNode } from 'react';
import { StyledTable } from './Table.styled';

type Props = {
  children?: ReactNode;
};

const Table = ({ children, ...rest }: Props) => (
  <StyledTable {...rest}>{children}</StyledTable>
);

export default Table;
