import Tags from '@ui/pages/Tags';
import { getAllTags } from '@lib/mdx';

export type Props = {
  tags: string[];
};

export const getStaticProps = async () => {
  const tags = getAllTags();
  return {
    props: { tags },
  };
};

const TagsPage = ({ tags }: Props) => <Tags tags={tags} />;

export default TagsPage;
