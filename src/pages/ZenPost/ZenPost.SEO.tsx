import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import {
  DEFAULT_OG_IMAGE,
  DOMAIN,
  DOMAIN_NAME,
  TWITTER_HANDLE,
} from '@const/general';
import { getDefaultAuthor } from '@const/authors';
import {
  articleSchema,
  breadcrumbSchema,
  buildGraph,
  personSchema,
} from '@lib/schema';
import { videoObjectSchema, SiteVideo } from '@lib/videos';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  sessions?: SiteVideo[];
};
const ZenPostSEO = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  slug,
  createdAt,
  updatedAt,
  tags = [],
  sessions = [],
}: Props) => {
  const canonical = `${DOMAIN}/zen/${slug}`;
  const imageUrl = `${DOMAIN}${image}`;
  const imageType = image.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const fullTitle = `${title} | Tinnitus Help`;
  const author = getDefaultAuthor();

  const graph = buildGraph([
    personSchema(author),
    title
      ? articleSchema({
          url: canonical,
          headline: title,
          description,
          image: imageUrl,
          datePublished: new Date(createdAt).toISOString(),
          dateModified: new Date(updatedAt).toISOString(),
          keywords: tags,
          author,
        })
      : null,
    breadcrumbSchema([
      { name: 'Home', url: DOMAIN },
      { name: 'Relief Sounds', url: `${DOMAIN}/zen` },
      { name: title ?? slug, url: canonical },
    ]),
    // One node per session. These pages are the only ones on the site where
    // video is genuinely the page's main content, which is the condition
    // Google's August 2023 change put on the video rich result.
    ...sessions.map((session) => videoObjectSchema(session, DOMAIN)),
  ]);

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
          images: [{ url: imageUrl, type: imageType, alt: title }],
          siteName: DOMAIN_NAME,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: TWITTER_HANDLE,
        }}
      />
      <JsonLd id={`zen-${slug}`} data={graph} />
    </>
  );
};

export default ZenPostSEO;
