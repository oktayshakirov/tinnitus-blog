import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Logo2 from '@components/Logo2';
import Layout from '@components/Layout';
import HomeSEO from './Home.SEO';
import { Button, Box } from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import NextLink from 'next/link';
import {
  StyledContainer,
  StyledHeadingContainer,
  StyledLogoContainer,
  StyledTabContainer,
  StyledTextContainer,
  StyledGrid,
} from './Home.styled';
import { ArticleMeta } from '@types';
import AdComponent from '@components/AdComponent';
import ArticleCard from '@components/ArticleCard';

type HomeProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
  featuredPosts: ArticleMeta[];
};

const Home = ({ latestPosts, latestZen, featuredPosts }: HomeProps) => {
  return (
    <>
      <HomeSEO />
      <Layout>
        <StyledContainer>
          <Grid container spacing={2}>
            <StyledHeadingContainer item md={6}>
              <Box>
                <Typography component="h1" variant="h3" mb={2}>
                  Tinnitus Help
                </Typography>
                <Grid item xs={12} md={12}>
                  <Typography component="h3" variant="h6">
                    Discover the fascinating phenomenon of tinnitus – perceiving
                    sound without any external source. Living with this
                    condition can be challenging, but you’re not alone. Explore
                    valuable tips to help you manage and cope, because
                    everyone’s experience is unique.
                  </Typography>
                </Grid>
              </Box>
            </StyledHeadingContainer>
            <StyledLogoContainer item md={6}>
              <Logo />
            </StyledLogoContainer>
          </Grid>
        </StyledContainer>
        <Container>
          <AdComponent />
        </Container>
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
              Latest Posts:
            </Typography>
            <Grid container spacing={4}>
              {latestPosts.map((article, index) => (
                <StyledGrid key={article.slug}>
                  <ArticleCard article={article} index={index} />
                </StyledGrid>
              ))}
            </Grid>
            <StyledTextContainer>
              <Typography component="h2" variant="h6" align="center">
                <NextLink href="/blog" passHref>
                  <Button
                    size="large"
                    variant="text"
                    sx={{ color: 'white', borderColor: 'white' }}
                    endIcon={<DoubleArrowRoundedIcon />}
                  >
                    Show All Posts
                  </Button>
                </NextLink>
              </Typography>
            </StyledTextContainer>
          </StyledTabContainer>
        </Container>
        <Container>
          <AdComponent />
        </Container>
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
              Must Read Posts:
            </Typography>
            <Grid container spacing={4}>
              {featuredPosts.map((article, index) => (
                <StyledGrid key={article.slug}>
                  <ArticleCard article={article} index={index} />
                </StyledGrid>
              ))}
            </Grid>
          </StyledTabContainer>
        </Container>
        <Container>
          <AdComponent />
        </Container>
        <StyledContainer>
          <Grid container spacing={2}>
            <StyledLogoContainer item md={6}>
              <Logo2 />
            </StyledLogoContainer>
            <StyledHeadingContainer item md={6}>
              <Box>
                <Typography component="h2" variant="h3" mb={2}>
                  Tinnitus Zen
                </Typography>
                <Grid item xs={12} md={12}>
                  <Typography component="h3" variant="h6">
                    Experience sound therapy’s benefits for tinnitus by blending
                    white noise, calming melodies and natural ambiance. These
                    soothing sounds may ease your condition and boost overall
                    well-being.
                  </Typography>
                </Grid>
              </Box>
            </StyledHeadingContainer>
          </Grid>
        </StyledContainer>
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
              Latest Sounds:
            </Typography>
            <Grid container spacing={4}>
              {latestZen.map((sounds, index) => (
                <StyledGrid key={sounds.slug}>
                  <ArticleCard article={sounds} index={index} />
                </StyledGrid>
              ))}
            </Grid>
            <StyledTextContainer>
              <Typography component="h2" variant="h6" align="center">
                <NextLink href="zen" passHref>
                  <Button
                    size="large"
                    variant="text"
                    sx={{ color: 'white', borderColor: 'white' }}
                    startIcon={<SpatialTrackingIcon />}
                  >
                    Zen Library
                  </Button>
                </NextLink>
              </Typography>
            </StyledTextContainer>
          </StyledTabContainer>
        </Container>
        <Container>
          <AdComponent />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
