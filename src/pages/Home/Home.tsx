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

const articles = [
  {
    href: 'blog/what-is-tinnitus',
    src: '/images/anxiety-girl.jpg',
    alt: 'Anxious girl',
    title: 'What is Tinnitus?',
    description: 'Learn about the perception of sound without an external source.',
  },
  {
    href: 'blog/managing-tinnitus',
    src: '/images/yoga-dog.jpg',
    alt: 'Yoga and Dog',
    title: 'Managing Tinnitus',
    description: 'Discover effective strategies for managing tinnitus and improving your quality of life.',
  },
  {
    href: 'blog/the-power-of-white-noise',
    src: '/images/girl-with-headphones.jpg',
    alt: 'Girl with headphones',
    title: 'The Power of White Noise',
    description: 'Exploring the benefits and applications of sound therapy for managing tinnitus.',
  },
  {
    href: 'blog/tinnitus-in-musicians',
    src: '/images/musician.jpg',
    alt: 'Musician',
    title: 'Tinnitus in Musicians',
    description: 'Exploring the prevalence of tinnitus among musicians and DJs.',
  },
  {
    href: 'blog/tinnitus-in-history',
    src: '/images/tinnitus-history2.jpg',
    alt: 'Ancient Sculpture',
    title: 'Historical Contexts',
    description: 'A journey through time, exploring how ancient civilizations perceived tinnitus.',
  },
  {
    href: 'blog/tinnitus-and-genetics',
    src: '/images/genetics.jpg',
    alt: 'Female Doctor',
    title: 'Tinnitus and Genetics',
    description: 'Tracing the hereditary links and delving deep into the genetic fabric of tinnitus.',
  },
];

const soundTherapies = [
  {
    href: 'zen/water-sounds',
    src: '/images/waterfall-man.jpg',
    alt: 'Zen 1 Playlist cover',
    title: 'Water Sounds',
    description: 'Water Sounds bring relaxation with calming consistent effect.',
    icon: <AudiotrackIcon />,
  },
  {
    href: 'zen/nature-sounds',
    src: '/images/zen-nature.jpg',
    alt: 'Zen 3 Playlist cover',
    title: 'Nature Inspired',
    description: 'Delve into the advantages and uses of nature-inspired sounds in sound therapy for tinnitus.',
    icon: <AudiotrackIcon />,
  },
  {
    href: 'zen/white-noise',
    src: '/images/zen-white.jpg',
    alt: 'Zen 2 Playlist cover',
    title: 'White Noise',
    description: 'White noise therapy utilizes a calming and constant sound to foster a sense of relaxation.',
    icon: <AudiotrackIcon />,
  },
];

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
                  Tinnitus Help 
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
              {articles.map((article, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <StyledCard>
                    <CardActionArea>
                      <NextLink href={article.href} passHref>
                        <Image
                          src={article.src}
                          alt={article.alt}
                          width={310}
                          height={180}
                          layout="responsive"
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {article.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NextLink href={article.href} passHref>
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
              ))}
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
              {soundTherapies.map((therapy, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <StyledCard>
                    <CardActionArea>
                      <NextLink href={therapy.href} passHref>
                        <Image
                          src={therapy.src}
                          alt={therapy.alt}
                          width={310}
                          height={180}
                          layout="responsive"
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {therapy.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {therapy.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NextLink href={therapy.href} passHref>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="secondary"
                          startIcon={therapy.icon}
                        >
                          Listen Now
                        </Button>
                      </NextLink>
                    </CardActions>
                  </StyledCard>
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
      </Layout>
    </>
  );
};

export default Home;
