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
  faqSchema,
  personSchema,
  FaqItem,
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
  faq?: FaqItem[];
  /** Health content is typed as MedicalWebPage; opt out for culture/history posts. */
  medical?: boolean;
  video?: SiteVideo | null;
};

const BlogPostSEO = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  slug,
  createdAt,
  updatedAt,
  tags = [],
  faq = [],
  medical = true,
  video = null,
}: Props) => {
  const canonical = `${DOMAIN}/blog/${slug}`;
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
          medical,
          author,
        })
      : null,
    breadcrumbSchema([
      { name: 'Home', url: DOMAIN },
      { name: 'Blog', url: `${DOMAIN}/blog` },
      { name: title ?? slug, url: canonical },
    ]),
    faq.length ? faqSchema(faq) : null,
    videoObjectSchema(video, DOMAIN),
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
          type: 'article',
          article: {
            publishedTime: new Date(createdAt)?.toISOString(),
            modifiedTime: new Date(updatedAt)?.toISOString(),
            authors: [`${DOMAIN}/authors/${author.slug}`],
            tags,
          },
          images: [{ url: imageUrl, type: imageType, alt: title }],
          siteName: DOMAIN_NAME,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: TWITTER_HANDLE,
        }}
        additionalMetaTags={[{ name: 'author', content: author.name }]}
      />
      <JsonLd id={`blog-${slug}`} data={graph} />
    </>
  );
};

export default BlogPostSEO;
