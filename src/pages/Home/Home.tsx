import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Logo2 from '@components/Logo2';
import Layout from '@components/Layout';
import HomeSEO from './Home.SEO';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import NextLink from 'next/link';
import Image from 'next/image';
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
              <Logo  />
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
                    <NextLink href="blog/what-is-tinnitus" passHref>
                      <Image
                        src="/images/anxiety-girl.jpg"
                        alt="Anxious girl"
                        width={310}
                        height={180}
                        layout="responsive"
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
              {/* StyledCard Card 1 */}
                <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <NextLink href="blog/managing-tinnitus" passHref>
                      <Image
                        src="/images/yoga-dog.jpg"
                        alt="Yoga and Dog"
                        width={310}
                        height={180}
                        layout="responsive"
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

              {/* StyledCard Card 3 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <NextLink href="blog/the-power-of-white-noise" passHref>
                      <Image
                        src="/images/girl-with-headphones.jpg"
                        alt="Girl with headphones"
                        width={310}
                        height={180}
                        layout="responsive"
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
                    <NextLink href="blog/tinnitus-in-musicians" passHref>
                      <Image
                        src="/images/musician.jpg"
                        alt="Sleeping Kid"
                        width={310}
                        height={180}
                        layout="responsive"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Tinnitus in Musicians
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Exploring the Prevalence of Tinnitus Among Musicians and DJs.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/tinnitus-in-musicians" passHref>
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
                      href="blog/tinnitus-in-history"
                      passHref
                    >
                      <Image
                        src="/images/tinnitus-history2.jpg"
                        alt="Ancient Sculpture"
                        width={310}
                        height={180}
                        layout="responsive"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Historical Contexts
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      A journey through time, exploring how ancient civilizations perceived tinnitus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink
                      href="blog/tinnitus-in-history"
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
                    <NextLink href="blog/tinnitus-and-genetics" passHref>
                      <Image
                        src="/images/genetics.jpg"
                        alt="Female Doctor"
                        width={310}
                        height={180}
                        layout="responsive"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Tinnitus and Genetics
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Tracing the hereditary links and delving deep into the genetic fabric of tinnitus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="blog/tinnitus-and-genetics" passHref>
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
              <Logo2 />
            </StyledLogoContainer>
            <StyledHeadingContainer item md={6}>
              <div>
                <Typography component="h1" variant="h3" mb={{ xs: 2, md: 2 }}>
                  The Power of Sound
                </Typography>
                <Grid item xs={12} md={12}>
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
                    <NextLink href="zen/water-sounds" passHref>
                      <Image
                        src="/images/waterfall-man.jpg"
                        alt="Zen 1 Playlist cover"
                        width={310}
                        height={180}
                        layout="responsive"
                      />
                    </NextLink>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Water Sounds
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Water Sounds bring relaxation with calming consistent effect.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NextLink href="zen/water-sounds" passHref>
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
                    <NextLink href="zen/nature-sounds" passHref>
                      <Image
                        src="/images/zen-nature.jpg"
                        alt="Zen 3 Playlist cover"
                        width={310}
                        height={180}
                        layout="responsive"
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

              {/* StyledCard Card 3 */}
              <Grid item xs={12} sm={4}>
                <StyledCard>
                  <CardActionArea>
                    <NextLink href="zen/white-noise" passHref>
                      <Image
                        src="/images/zen-white.jpg"
                        alt="Zen 2 Playlist cover"
                        width={310}
                        height={180}
                        layout="responsive"
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
