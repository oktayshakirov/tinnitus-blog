import NextImage from 'next/image';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Layout from '@components/Layout';
import NotFoundSEO from './NotFound.SEO';
import {
  StyledContainer,
  StyledMascotWrap,
  StyledMessage,
  StyledActions,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <NotFoundSEO />
      <Layout>
        <StyledContainer maxWidth="sm">
          <StyledMascotWrap>
            <NextImage
              src="/logo-scared.png"
              alt=""
              width={128}
              height={128}
              priority
            />
          </StyledMascotWrap>
          <Typography component="h1" variant="h3" mb={2}>
            Page Not Found
          </Typography>
          <StyledMessage>
            We couldn&apos;t find the page you were looking for. It may have
            been moved, renamed, or never existed.
          </StyledMessage>
          <StyledActions>
            <NextLink href="/" passHref>
              <Button variant="contained">Go Home</Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                Browse Articles
              </Button>
            </NextLink>
          </StyledActions>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default NotFound;
