import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { MDXComponents } from 'mdx/types';
import Link from '@components/MDX/Link';
import { H1, H2, H3, H4, H5, H6 } from '@components/MDX/Heading';
import Nav from '@components/MDX/Nav';
import Image from '@components/MDX/Image';
import Blockquote from '@components/MDX/Blockquote';
import Highlighter from '@components/MDX/Highlighter';
import AdComponent from '@components/MDX/AdComponent';

export const components: MDXComponents = {
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  nav: Nav,
  Image,
  Blockquote,
  Highlighter,
  AdComponent,
};

type Props = {
  content: MDXRemoteProps;
};
const MDXContent = ({ content }: Props) => {
  return <MDXRemote components={components} {...content} />;
};

export default MDXContent;
