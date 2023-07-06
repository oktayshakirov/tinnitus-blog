import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { StyledDivider } from './Headline.styled';

type Props = {
  children: ReactNode;
};
const Headline = ({ children }: Props) => (
  <Grid container>
    <Grid item xs={0} md={3} />
    <Grid item xs={12} md={9}>
      <Typography component="h1" variant="h3" mb={{ xs: 2, md: 2 }}>
        {children}
      </Typography>
      <StyledDivider />
    </Grid>
  </Grid>
);

export default Headline;
