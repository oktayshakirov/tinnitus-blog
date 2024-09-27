import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Logo from '@components/Logo';
import Logo2 from '@components/Logo2';
import Layout from '@components/Layout';
import HomeSEO from './Home.SEO';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
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
import {
  FaSpotify,
  FaYoutube,
  FaApple,
  FaAmazon,
  FaDeezer,
} from 'react-icons/fa';
import { Divider } from '@mui/material';

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
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
              Must Read Posts:
            </Typography>
            <Grid container spacing={2}>
              {featuredPosts.map((article) => (
                <Grid item xs={12} sm={4} key={article.slug}>
                  <StyledCard>
                    <CardActionArea>
                      <NextLink href={`/blog/${article.slug}`} passHref>
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={350}
                          height={220}
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom component="h2" variant="h6">
                          {article.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {article.description}
                        </Typography>
                        <Divider sx={{ margin: '16px 0' }} />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '8px',
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {article.readingTime.text}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {article.date}
                          </Typography>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </StyledTabContainer>
        </Container>
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
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
                          width={350}
                          height={220}
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom component="h2" variant="h6">
                          {article.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {article.description}
                        </Typography>
                        <Divider sx={{ margin: '16px 0' }} />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '8px',
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {article.readingTime.text}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {article.date}
                          </Typography>
                        </div>
                      </CardContent>
                    </CardActionArea>
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
        <StyledContainer>
          <Grid container spacing={2}>
            <StyledLogoContainer item md={6}>
              <Logo2 />
            </StyledLogoContainer>
            <StyledHeadingContainer item md={6}>
              <div>
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
              </div>
            </StyledHeadingContainer>
          </Grid>
        </StyledContainer>
        <Container>
          <StyledTabContainer>
            <Typography gutterBottom variant="h4" align="center">
              Latest Sounds:
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
                          width={350}
                          height={220}
                        />
                      </NextLink>
                      <CardContent>
                        <Typography gutterBottom component="h2" variant="h6">
                          {therapy.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {therapy.description}
                        </Typography>
                        <Divider sx={{ margin: '16px 0' }} />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            padding: '8px 0',
                          }}
                        >
                          <FaSpotify size={24} />
                          <FaYoutube size={24} />
                          <FaApple size={24} />
                          <FaAmazon size={24} />
                          <FaDeezer size={24} />
                        </div>
                      </CardContent>
                    </CardActionArea>
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
