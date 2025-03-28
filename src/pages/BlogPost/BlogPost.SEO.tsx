import { ArticleJsonLd, NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
};
const BlogPostSEO = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  slug,
  createdAt,
  updatedAt,
  tags = [],
}: Props) => {
  const canonical = `${DOMAIN}/blog/${slug}`;
  const imageUrl = `${DOMAIN}${image}`;
  const fullTitle = `${title} | Tinnitus Help`;

  return (
    <>
      <NextSeo
        title={fullTitle}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: fullTitle,
          description: description,
          type: 'article',
          article: {
            publishedTime: new Date(createdAt)?.toISOString(),
            modifiedTime: new Date(updatedAt)?.toISOString(),
          },
          images: [{ url: imageUrl, type: 'image/jpeg', alt: title }],
          siteName: DOMAIN_NAME,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TinnitusHelp_me',
        }}
      />
      {title && description && (
        <ArticleJsonLd
          type="BlogPosting"
          url={canonical}
          title={fullTitle}
          images={[imageUrl]}
          description={description}
          authorName={DOMAIN_NAME}
          publisherName={DOMAIN_NAME}
          datePublished={new Date(createdAt)?.toISOString()}
          dateModified={new Date(updatedAt)?.toISOString()}
          keywords={tags}
        />
      )}
    </>
  );
};

export default BlogPostSEO;
