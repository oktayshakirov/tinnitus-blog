import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Layout from '@components/Layout';
import HomeSEO from './Home.SEO';
import {
  StyledContainer,
  StyledHeadingContainer,
  StyledLogoContainer,
} from './Home.styled';

const Home = () => {
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
                  Living with tinnitus can be challenging, but you're not alone.
                  Discover valuable tips and resources to manage and cope with
                  tinnitus. Explore treatment options, lifestyle adjustments and
                  support. Empower yourself with comprehensive resources.
                  Everyone's experience with tinnitus is unique. Find strategies
                  that suit your needs.
                </Typography>
              </div>
            </StyledHeadingContainer>
            <StyledLogoContainer item md={6}>
              <Logo width={300} />
            </StyledLogoContainer>
          </Grid>
        </StyledContainer>
        <Container>
          <Typography component="h2" variant="h6">
            Explore Our Articles:
          </Typography>
          <Typography component="h2" variant="h6">
            Discover the fascinating world of perceiving sound in the absence of
            an external source.
          </Typography>
          <Typography component="h2" variant="h6">
            Tips for Managing Tinnitus:
          </Typography>
          <Typography component="h2" variant="h6">
            Find practical tips and strategies to reduce the impact of tinnitus
            on your daily life.
          </Typography>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
