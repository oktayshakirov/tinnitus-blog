import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Logo2 from '@components/Logo2';
import Layout from '@components/Layout';
import HomeSEO from './Home.SEO';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import NextLink from 'next/link';
import {
  StyledContainer,
  StyledHeadingContainer,
  StyledLogoContainer,
  StyledCard,
  StyledTabContainer,
  StyledTextContainer,
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
                <Grid item xs={12} md={12}>
                  {' '}
                  <Typography component="h2" variant="h6">
                    Discover the fascinating world of perceiving sound in the
                    absence of an external source. Living with tinnitus can be
                    challenging, but you're not alone. Explore valuable tips and
                    resources to manage and cope with tinnitus. Everyone's
                    experience with tinnitus is unique.
                  </Typography>
                </Grid>
              </div>
            </StyledHeadingContainer>
            <StyledLogoContainer item md={6}>
              <Logo width={310} />
            </StyledLogoContainer>
          </Grid>
        </StyledContainer>

        {/* Blog Articles Tab */}
        <Container>
          <StyledTabContainer>
            <Grid container spacing={2}>
              {/* StyledCard Card 1 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/yoga-dog.jpg"
                      alt="Yoga and Dog"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Managing Tinnitus
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Discover effective strategies for managing tinnitus and
                        improving your quality of life.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/managing-tinnitus" passHref>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        startIcon={<ArticleIcon />}
                      >
                        Read More
                      </Button>
                    </NextLink>
                  </CardActions>
                </StyledCard>
              </Grid>

              {/* StyledCard Card 2 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/anxiety-girl.jpg"
                      alt="Anxious girl"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        What is Tinnitus ?
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Learn about the perception of sound without an external
                        source.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/what-is-tinnitus" passHref>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        startIcon={<ArticleIcon />}
                      >
                        Read More
                      </Button>
                    </NextLink>
                  </CardActions>
                </StyledCard>
              </Grid>

              {/* StyledCard Card 3 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/girl-with-headphones.jpg"
                      alt="Girl with headphones"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        The Power of White Noise
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Exploring the benefits and applications of sound therapy
                        for managing tinnitus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/the-power-of-white-noise" passHref>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        startIcon={<ArticleIcon />}
                      >
                        Read More
                      </Button>
                    </NextLink>
                  </CardActions>
                </StyledCard>
              </Grid>
            </Grid>
            <StyledTextContainer>
              <Typography component="h2" variant="h6" align="center">
                All you need to know about Tinnitus:{' '}
                <NextLink href="blog" passHref>
                  <Button
                    size="large"
                    variant="text"
                    sx={{ color: 'white', borderColor: 'white' }}
                    endIcon={<DoubleArrowRoundedIcon />}
                  >
                    See More Articles
                  </Button>
                </NextLink>
              </Typography>
            </StyledTextContainer>
          </StyledTabContainer>
        </Container>

        {/* Sound Therapy Tab */}
        <StyledContainer>
          <Grid container spacing={2}>
            <StyledLogoContainer item md={6}>
              <Logo2 width={310} />
            </StyledLogoContainer>
            <StyledHeadingContainer item md={6}>
              <div>
                <Typography component="h1" variant="h3" mb={{ xs: 2, md: 2 }}>
                  The Power of Sound
                </Typography>
                <Grid item xs={12} md={12}>
                  {' '}
                  <Typography component="h2" variant="h6">
                    Find relief and inner harmony with Tinnitus Sound Therapy,
                    featuring white noise, calming melodies, and mindful
                    meditation. Explore the transformative power of these
                    therapeutic sounds, alleviating tinnitus, enhancing
                    relaxation and restoring inner balance.
                  </Typography>
                </Grid>
              </div>
            </StyledHeadingContainer>
          </Grid>
        </StyledContainer>

        <Container>
          <StyledTabContainer>
            <Grid container spacing={2}>
              {/* StyledCard Card 1 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/happy-girl.jpg"
                      alt="Yoga and Dog"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Sound 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Discover effective strategies for managing tinnitus and
                        improving your quality of life.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/managing-tinnitus" passHref>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        startIcon={<AudiotrackIcon />}
                      >
                        Listen Now
                      </Button>
                    </NextLink>
                  </CardActions>
                </StyledCard>
              </Grid>

              {/* StyledCard Card 2 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/happy-girl.jpg"
                      alt="Anxious girl"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Sound 2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Learn about the perception of sound without an external
                        source.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/what-is-tinnitus" passHref>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        startIcon={<AudiotrackIcon />}
                      >
                        Listen Now
                      </Button>
                    </NextLink>
                  </CardActions>
                </StyledCard>
              </Grid>

              {/* StyledCard Card 3 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/images/happy-girl.jpg"
                      alt="Girl with headphones"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Sound 3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Exploring the benefits and applications of sound therapy
                        for managing tinnitus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/the-power-of-white-noise" passHref>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        startIcon={<AudiotrackIcon />}
                      >
                        Listen Now
                      </Button>
                    </NextLink>
                  </CardActions>
                </StyledCard>
              </Grid>
            </Grid>
            <StyledTextContainer>
              <Typography component="h2" variant="h6" align="center">
                Explore our Sound Therapy:{' '}
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
      </Layout>
    </>
  );
};

export default Home;
