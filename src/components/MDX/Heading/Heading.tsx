import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';

const commonProps = {
  mt: 1.5,
  mb: 2,
  pt: 2,
};

type Props = {
  children?: ReactNode;
};

export const H1 = ({ children, ...rest }: Props) => (
  <Typography component="h1" variant="h3" {...commonProps} {...rest}>
    {children}
  </Typography>
);
export const H2 = ({ children, ...rest }: Props) => (
  <Typography component="h2" variant="h4" {...commonProps} {...rest}>
    {children}
  </Typography>
);
export const H3 = ({ children, ...rest }: Props) => (
  <Typography component="h3" variant="h5" {...commonProps} {...rest}>
    {children}
  </Typography>
);
export const H4 = ({ children, ...rest }: Props) => (
  <Typography component="h4" variant="h6" {...commonProps} {...rest}>
    {children}
  </Typography>
);
export const H5 = ({ children, ...rest }: Props) => (
  <Typography component="h5" variant="h6" {...commonProps} {...rest}>
    {children}
  </Typography>
);
export const H6 = ({ children, ...rest }: Props) => (
  <Typography component="h6" variant="h6" mt={1.5} mb={2} pt={2} {...rest}>
    {children}
  </Typography>
);
