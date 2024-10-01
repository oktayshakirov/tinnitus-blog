import Container from '@mui/material/Container';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import ArticleTags from '@components/ArticleTags';
import TagsSEO from './Tags.SEO';
import AdComponent from '@components/AdComponent';

const Tags = ({ tags }: Props) => {
  return (
    <>
      <TagsSEO />
      <Layout>
        <Container>
          <Headline>Tags</Headline>
          <ArticleTags tags={tags} />
        </Container>
        <Container>
          <AdComponent />
        </Container>
      </Layout>
    </>
  );
};

export default Tags;
