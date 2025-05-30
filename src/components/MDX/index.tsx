import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { MDXComponents } from 'mdx/types';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';
import Link from '@components/MDX/Link';
import { H1, H2, H3, H4, H5, H6 } from '@components/MDX/Heading';
import Nav from '@components/MDX/Nav';
import Image from '@components/MDX/Image';
import Blockquote from '@components/MDX/Blockquote';
import Highlighter from '@components/MDX/Highlighter';
import AdComponent from '@components/MDX/AdComponent';
import StreamingPlatforms from './StreamingPlatforms';
import Table from '@components/MDX/Table';

const StyledMDXWrapper = styled('div')`
  ${({ theme }) => css`
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: ${theme.palette.text.primary};

    p {
      margin: ${theme.spacing(2)} 0;
    }

    ul,
    ol {
      margin: ${theme.spacing(2)} 0;
      padding-left: ${theme.spacing(3)};
    }

    li {
      margin: ${theme.spacing(1)} 0;
    }

    a {
      color: ${theme.palette.primary.main};
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${theme.palette.primary.light};
      }
    }
  `}
`;

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
  StreamingPlatforms,
  table: Table,
};

type Props = {
  content: MDXRemoteProps;
};

const MDXContent = ({ content }: Props) => {
  return (
    <StyledMDXWrapper>
      <MDXRemote components={components} {...content} />
    </StyledMDXWrapper>
  );
};

export default MDXContent;
