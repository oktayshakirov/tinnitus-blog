import type { GetStaticPaths, GetStaticProps } from 'next';
import AuthorProfile from '@ui/pages/AuthorProfile';
import { AUTHORS, getAuthorBySlug, Author } from '@const/authors';

export type Props = {
  author: Author;
};

const AuthorProfilePage = (props: Props) => <AuthorProfile {...props} />;

const getStaticPaths: GetStaticPaths = async () => {
  const paths = AUTHORS.map((author) => ({
    params: { slug: author.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { notFound: true };
  }

  return {
    props: { author },
  };
};

export { getStaticProps, getStaticPaths };
export default AuthorProfilePage;
