import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Layout from '@components/Layout';
import HomeSEO from './Home.SEO';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import NextLink from 'next/link';
import {
  StyledContainer,
  StyledHeadingContainer,
  StyledLogoContainer,
  StyledCard,
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
                  {/* Wrap the text content in a Grid item */}
                  <Typography component="h2" variant="h6">
                    Living with tinnitus can be challenging, but you're not
                    alone. Discover valuable tips and resources to manage and
                    cope with tinnitus. Explore treatment options, lifestyle
                    adjustments and support. Empower yourself with comprehensive
                    resources. Everyone's experience with tinnitus is unique.
                    Find strategies that suit your needs.
                  </Typography>
                </Grid>
              </div>
            </StyledHeadingContainer>
            <StyledLogoContainer item md={6}>
              <Logo width={300} />
            </StyledLogoContainer>
          </Grid>
        </StyledContainer>
        <Container>
          <Typography component="h2" variant="h6" align="center">
            Discover the fascinating world of perceiving sound in the absence of
            an external source :
          </Typography>
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
        </Container>
      </Layout>
    </>
  );
};

export default Home;
