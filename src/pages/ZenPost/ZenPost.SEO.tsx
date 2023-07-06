import { ArticleJsonLd, NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};
const ZenPostSEO = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  slug,
  createdAt,
  updatedAt,
}: Props) => {
  const canonical = `${DOMAIN}/Zen/${slug}`;
  const imageUrl = `${DOMAIN}${image}`;

  return (
    <>
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
      {title && description && (
        <ArticleJsonLd
          type="BlogPosting"
          url={canonical}
          title={title}
          images={[imageUrl]}
          description={description}
          authorName={DOMAIN_NAME}
          publisherName={DOMAIN_NAME}
          datePublished={new Date(createdAt)?.toISOString()}
          dateModified={new Date(updatedAt)?.toISOString()}
        />
      )}
    </>
  );
};

export default ZenPostSEO;
