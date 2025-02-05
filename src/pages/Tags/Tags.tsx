import Box from '@mui/material/Box';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import ArticleTags from '@components/ArticleTags';
import TagsSEO from './Tags.SEO';
import AdComponent from '@components/AdComponent';
import { StyledContainer } from './Tags.styled';

const Tags = ({ tags }: Props) => {
  return (
    <>
      <TagsSEO />
      <Layout>
        <StyledContainer>
          <Headline>Tags</Headline>
          <ArticleTags tags={tags} />
          <Box pt={4}>
            <AdComponent />
          </Box>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Tags;
