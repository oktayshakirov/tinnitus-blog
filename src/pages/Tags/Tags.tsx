import { Box, Grid, Container } from '@mui/material';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import TagsSEO from './Tags.SEO';
import AdComponent from '@components/AdComponent';
import {
  StyledContainer,
  StyledCardTags,
  StyledButton,
  StyledTabContainer,
  HighlightContainer,
} from './Tags.styled';
import Link from 'next/link';

const Tags = ({ tags }: Props) => (
  <>
    <TagsSEO />
    <Layout>
      <StyledContainer>
        <StyledTabContainer>
          <HighlightContainer>
            <Headline>
              <i
                className="fi fi-hashtag"
                style={{
                  fontSize: '0.8em',
                  marginRight: '0.5em',
                }}
              />
              TAGS
            </Headline>
          </HighlightContainer>
          <StyledCardTags>
            <Grid container spacing={3}>
              {tags.map((tag) => (
                <Grid item key={tag} xs={6} sm={4} md={3} lg={2}>
                  <Link href={`/tags/${tag}`} passHref legacyBehavior>
                    <StyledButton variant="outlined">{tag}</StyledButton>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </StyledCardTags>
        </StyledTabContainer>
        <Container>
          <Box pt={3}>
            <AdComponent />
          </Box>
        </Container>
      </StyledContainer>
    </Layout>
  </>
);

export default Tags;
