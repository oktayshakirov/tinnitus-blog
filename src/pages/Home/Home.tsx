import { useEffect, useState } from 'react';
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
import ArticleCard from '@components/ArticleCard';
import {
  StyledContainer,
  StyledHeadingContainer,
  StyledLogoContainer,
  StyledTabContainer,
  StyledTextContainer,
} from './Home.styled';
import { ArticleMeta } from '@types';
import AdComponent from '@components/AdComponent';

type HomeProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
  featuredPosts: ArticleMeta[];
};

function getIsAppFlag(): boolean {
  if (typeof window === 'undefined') return false;
  const urlParams = new URLSearchParams(window.location.search);
  return (
    urlParams.get('isApp') === 'true' ||
    !!window.isApp ||
    localStorage.getItem('isApp') === 'true'
  );
}

const Home = ({ latestPosts, latestZen, featuredPosts }: HomeProps) => {
  const [isApp, setIsApp] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const flag = getIsAppFlag();
    if (flag) {
      setIsApp(true);
      localStorage.setItem('isApp', 'true');
    }
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <HomeSEO />
      <Layout>
        {!isApp && (
          <StyledContainer>
            <Grid container spacing={2}>
              <StyledHeadingContainer item md={6}>
                <Box>
                  <Typography component="h1" variant="h3" mb={{ xs: 2, md: 2 }}>
                    Tinnitus Help
                  </Typography>
                  <Grid item xs={12} md={12}>
                    <Typography component="h2" variant="h6">
                      Discover the fascinating world of perceiving sound in the
                      absence of an external source. Living with tinnitus can be
                      challenging, but you&#39;re not alone. Explore valuable
                      tips and resources to manage and cope with tinnitus.
                      Everyone&#39;s experience with tinnitus is unique.
                    </Typography>
                  </Grid>
                </Box>
              </StyledHeadingContainer>
              <StyledLogoContainer item md={6}>
                <Logo />
              </StyledLogoContainer>
            </Grid>
          </StyledContainer>
        )}
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
                <Grid item xs={12} sm={6} md={4} key={article.slug}>
                  <ArticleCard article={article} index={index} withTags />
                </Grid>
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
                <Grid item xs={12} sm={6} md={4} key={article.slug}>
                  <ArticleCard article={article} index={index} withTags />
                </Grid>
              ))}
            </Grid>
          </StyledTabContainer>
        </Container>
        {!isApp && (
          <StyledContainer>
            <Grid container spacing={2}>
              <StyledLogoContainer item md={6}>
                <Logo2 />
              </StyledLogoContainer>
              <StyledHeadingContainer item md={6}>
                <Box>
                  <Typography component="h2" variant="h3" mb={{ xs: 2, md: 2 }}>
                    The Power of Sound
                  </Typography>
                  <Grid item xs={12} md={12}>
                    <Typography component="h2" variant="h6">
                      Discover the potential benefits of Tinnitus Sound Therapy,
                      which includes white noise, calming melodies and mindful
                      meditation. These therapeutic sounds may help in managing
                      tinnitus, enhancing relaxation, and promoting a sense of
                      inner balance.
                    </Typography>
                  </Grid>
                </Box>
              </StyledHeadingContainer>
            </Grid>
          </StyledContainer>
        )}
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
              Latest Sounds:
            </Typography>
            <Grid container spacing={4}>
              {latestZen.map((sounds, index) => (
                <Grid item xs={12} sm={6} md={4} key={sounds.slug}>
                  <ArticleCard article={sounds} index={index} />
                </Grid>
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
