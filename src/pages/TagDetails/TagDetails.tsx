import Container from '@mui/material/Container';
import Layout from '@components/Layout';
import { Props } from '@pages/tags/[slug]';

const TagDetails = ({ slug }: Props) => {
  return (
    <>
      <Layout>
        <Container>Tag details: {slug}</Container>
      </Layout>
    </>
  );
};

export default TagDetails;
