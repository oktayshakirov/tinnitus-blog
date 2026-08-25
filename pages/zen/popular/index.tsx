import PopularZenPage, {
  getStaticProps as pageStaticProps,
} from './page/[page]';
import { GetStaticProps } from 'next';

// /zen/popular is page 1 of the ranked listing; the paginated pages live
// under /zen/popular/page/N and share this component.
export const getStaticProps: GetStaticProps = (context) =>
  pageStaticProps({ ...context, params: { page: '1' } });

export default PopularZenPage;
