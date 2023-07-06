import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Layout from '@components/Layout';
import MDXContent from '@components/MDX';
import HomeSEO from './Home.SEO';
import {
  StyledContainer,
  StyledHeadingContainer,
  StyledLogoContainer,
} from './Home.styled';
import { Props } from '@pages/index';

const Home = ({ content }: Props) => {
  return (
    <>
      <HomeSEO />
      <Layout>
        <StyledContainer>
          <Grid container spacing={2}>
            <StyledHeadingContainer item md={6}>
              <div>
                <Typography component="h1" variant="h3" mb={{ xs: 2, md: 2 }}>
                Beyond the Buzz
                </Typography>
                <Typography component="h2" variant="h6">
                Living with tinnitus can be challenging, but you're not alone. Discover valuable tips and resources to manage and cope with tinnitus. Explore treatment options, lifestyle adjustments and support. Empower yourself with comprehensive resources. Everyone's experience with tinnitus is unique. Find strategies that suit your needs.
                </Typography>
              </div>
            </StyledHeadingContainer>
            <StyledLogoContainer item md={6}>
              <Logo width={300} />
            </StyledLogoContainer>
          </Grid>
        </StyledContainer>
        <Container>
          <Grid container>
            <Grid item xs={0} sm={1} md={2} />
            <Grid item xs={12} sm={10} md={8}>
              <MDXContent content={content} />
            </Grid>
            <Grid item xs={0} sm={1} md={2} />
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
