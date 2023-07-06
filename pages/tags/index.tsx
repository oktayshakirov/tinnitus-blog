import Tags from '@ui/pages/Tags';

export type Props = {
  tags: string[];
};

const ZenPage = (props: Props) => <Tags {...props} tags={['relationship']} />;

export default ZenPage;
