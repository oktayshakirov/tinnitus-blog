import PopularBlogPage, {
  getStaticProps as pageStaticProps,
} from './page/[page]';
import { GetStaticProps } from 'next';

// /blog/popular is page 1 of the ranked listing; the paginated pages live
// under /blog/popular/page/N and share this component.
export const getStaticProps: GetStaticProps = (context) =>
  pageStaticProps({ ...context, params: { page: '1' } });

export default PopularBlogPage;
