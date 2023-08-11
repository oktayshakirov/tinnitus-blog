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
                    challenging, but you&#39;re not alone. Explore valuable tips
                    and resources to manage and cope with tinnitus.
                    Everyone&#39;s experience with tinnitus is unique.
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
                    <NextLink href="blog/managing-tinnitus" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/yoga-dog.jpg"
                        alt="Yoga and Dog"
                      />
                    </NextLink>
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
                    <NextLink href="blog/what-is-tinnitus" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/anxiety-girl.jpg"
                        alt="Anxious girl"
                      />
                    </NextLink>
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
                    <NextLink href="blog/the-power-of-white-noise" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/girl-with-headphones.jpg"
                        alt="Girl with headphones"
                      />
                    </NextLink>
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

              {/* StyledCard Card 4 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <NextLink href="blog/tinnitus-and-sleep" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/sleeping-kid.jpg"
                        alt="Sleeping Kid"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Sleep Challenges
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Intersecting Paths: Tinnitus, Sleep and Strategies for
                        Restful Nights.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/tinnitus-and-sleep" passHref>
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

              {/* StyledCard Card 5 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <NextLink
                      href="blog/what-role-does-the-brain-play-in-tinnitus"
                      passHref
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/screaming-man.jpg"
                        alt="Screaming man"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        The Brain&apos;s Impact
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Why Isn&apos;t the Ringing in Your Ear? The Neurological
                        Puzzle Within the Brain
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink
                      href="blog/what-role-does-the-brain-play-in-tinnitus"
                      passHref
                    >
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

              {/* StyledCard Card 6 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <NextLink href="blog/tinnitus-latest-research" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/doctor.jpg"
                        alt="Female Doctor"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Latest Tinnitus Researches
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Recent Scientific Studies, Potential New Treatments and
                        Innovative Technologies.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/tinnitus-latest-research" passHref>
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
                <NextLink href="blog" passHref>
                  <Button
                    size="large"
                    variant="text"
                    sx={{ color: 'white', borderColor: 'white' }}
                    endIcon={<DoubleArrowRoundedIcon />}
                  >
                    Show All Articles
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
                    <NextLink href="zen/nature-sounds" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/zen-nature.jpg"
                        alt="Zen 3 Playlist cover"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Nature Inspired
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Delve into the advantages and uses of nature-inspired
                        sounds in sound therapy for tinnitus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="zen/nature-sounds" passHref>
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
                    <NextLink href="zen/white-noise" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/zen-white.jpg"
                        alt="Zen 2 Playlist cover"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        White Noise
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        White noise therapy utilizes a calming and constant
                        sound to foster a sense of relaxation.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="zen/white-noise" passHref>
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
                    <NextLink href="zen/notched-sounds" passHref>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/images/zen-notched.png"
                        alt="Zen 1 Playlist cover"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Notched Sounds
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Notched sound therapy reduces tinnitus by using specific
                        5000hz - 9000hz frequencies.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="zen/notched-sounds" passHref>
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
