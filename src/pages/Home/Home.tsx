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
import { ArticleMeta } from '@types';

type HomeProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
};

const recommended = [
  {
    href: 'blog/what-is-tinnitus',
    src: '/images/anxiety-girl.jpg',
    alt: 'Anxious girl',
    title: 'What is Tinnitus?',
    description:
      'Learn about the perception of sound without an external source.',
  },
  {
    href: 'blog/managing-tinnitus',
    src: '/images/yoga-dog.jpg',
    alt: 'Yoga and Dog',
    title: 'Managing Tinnitus',
    description:
      'Discover effective strategies for managing tinnitus and improving your quality of life.',
  },
  {
    href: 'blog/the-power-of-white-noise',
    src: '/images/girl-with-headphones.jpg',
    alt: 'Girl with headphones',
    title: 'The Power of White Noise',
    description:
      'Exploring the benefits and applications of sound therapy for managing tinnitus.',
  },
  {
    href: 'blog/tinnitus-in-musicians',
    src: '/images/musician.jpg',
    alt: 'Musician',
    title: 'Tinnitus in Musicians',
    description:
      'Exploring the prevalence of tinnitus among musicians and DJs.',
  },
  {
    href: 'blog/tinnitus-in-history',
    src: '/images/tinnitus-history2.jpg',
    alt: 'Ancient Sculpture',
    title: 'Historical Contexts',
    description:
      'A journey through time, exploring how ancient civilizations perceived tinnitus.',
  },
  {
    href: 'blog/tinnitus-and-genetics',
    src: '/images/genetics.jpg',
    alt: 'Female Doctor',
    title: 'Tinnitus and Genetics',
    description:
      'Tracing the hereditary links and delving deep into the genetic fabric of tinnitus.',
  },
];

const Home = ({ latestPosts, latestZen }: HomeProps) => {
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
              <Logo />
            </StyledLogoContainer>
          </Grid>
        </StyledContainer>

        {/* Recommended Posts Tab */}
        <Container>
          <StyledTabContainer>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              Must Read Posts:
            </Typography>
            <Grid container spacing={2}>
              {recommended.map((article, index) => (
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
                    Show All Posts
                  </Button>
                </NextLink>
              </Typography>
            </StyledTextContainer>
          </StyledTabContainer>
        </Container>

        {/* Latest Posts Tab */}
        <Container>
          <StyledTabContainer>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              Latest Posts:
            </Typography>
            <Grid container spacing={2}>
              {latestPosts.map((article) => (
                <Grid item xs={12} sm={4} key={article.slug}>
                  <StyledCard>
                    <CardActionArea>
                      <NextLink href={`/blog/${article.slug}`} passHref>
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={310}
                          height={180}
                          layout="responsive"
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {article.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NextLink href={`/blog/${article.slug}`} passHref>
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
                    Discover the potential benefits of Tinnitus Sound Therapy,
                    which includes white noise, calming melodies and mindful
                    meditation. These therapeutic sounds may help in managing
                    tinnitus, enhancing relaxation, and promoting a sense of
                    inner balance.
                  </Typography>
                </Grid>
              </div>
            </StyledHeadingContainer>
          </Grid>
        </StyledContainer>

        <Container>
          <StyledTabContainer>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              Our Sound Therapy:
            </Typography>
            <Grid container spacing={2}>
              {latestZen.map((therapy) => (
                <Grid item xs={12} sm={4} key={therapy.slug}>
                  <StyledCard>
                    <CardActionArea>
                      <NextLink href={`/zen/${therapy.slug}`} passHref>
                        <Image
                          src={therapy.image}
                          alt={therapy.title}
                          width={310}
                          height={180}
                          layout="responsive"
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {therapy.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {therapy.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NextLink href={`/zen/${therapy.slug}`} passHref>
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
