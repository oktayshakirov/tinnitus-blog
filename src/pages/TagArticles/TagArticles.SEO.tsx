import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

type Props = {
  tag: string;
};

const TagArticlesSEO = ({ tag }: Props) => {
  const title = `Articles tagged with: ${tag} | ${DOMAIN_NAME}`;
  const description = `Explore articles, guides, and resources categorized under the "${tag}" tag. Find relevant content to help you manage and understand tinnitus better.`;
  const canonical = `${DOMAIN}/tags/${tag}`;
  const imageUrl = `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        url: canonical,
        title: title,
        description: description,
        images: [{ url: imageUrl, type: 'image/jpeg' }],
        siteName: DOMAIN_NAME,
      }}
    />
  );
};

export default TagArticlesSEO;
