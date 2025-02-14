import Box from '@mui/material/Box';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import TagsSEO from './Tags.SEO';
import AdComponent from '@components/AdComponent';
import { StyledContainer } from './Tags.styled';
import { Grid, Button } from '@mui/material';
import Link from 'next/link';

const CardTags = ({ tags }: { tags: string[] }) => (
  <Box mt={4}>
    <Grid container spacing={3}>
      {tags.map((tag) => (
        <Grid item key={tag} xs={12} sm={6} md={4} lg={3}>
          <Link href={`/tags/${tag}`} passHref legacyBehavior>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                textTransform: 'uppercase',
                borderRadius: '12px',
                padding: '16px',
                fontSize: '1.1rem',
              }}
            >
              {tag}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Tags = ({ tags }: Props) => (
  <>
    <TagsSEO />
    <Layout>
      <StyledContainer>
        <Headline>Tags</Headline>
        <CardTags tags={tags} />
        <Box pt={4}>
          <AdComponent />
        </Box>
      </StyledContainer>
    </Layout>
  </>
);

export default Tags;
