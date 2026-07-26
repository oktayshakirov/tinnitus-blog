import {
  DOMAIN,
  DOMAIN_NAME,
  LOGO_URL,
  SOCIAL_PROFILES,
} from '@const/general';
import { Author, getDefaultAuthor } from '@const/authors';

/**
 * Stable @id values so every node on the page points at the same entities
 * instead of Google having to guess they are the same organisation/site.
 */
export const ORGANIZATION_ID = `${DOMAIN}/#organization`;
export const WEBSITE_ID = `${DOMAIN}/#website`;

export type FaqItem = {
  question: string;
  answer: string;
};

export const organizationSchema = () => ({
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: DOMAIN_NAME,
  url: DOMAIN,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
  },
  sameAs: SOCIAL_PROFILES,
  description:
    'Tinnitus Help is an independent resource offering research-backed articles, relief soundscapes and tools for people living with tinnitus.',
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: DOMAIN,
  name: DOMAIN_NAME,
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en',
});

export const personSchema = (author: Author) => ({
  '@type': 'Person',
  '@id': `${DOMAIN}/authors/${author.slug}#person`,
  name: author.name,
  url: `${DOMAIN}/authors/${author.slug}`,
  image: `${DOMAIN}${author.image}`,
  jobTitle: author.role,
  description: author.description,
  sameAs: Object.values(author.social).filter(Boolean),
});

export const breadcrumbSchema = (
  crumbs: { name: string; url: string }[]
) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const faqSchema = (faq: FaqItem[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

type ArticleSchemaArgs = {
  url: string;
  headline: string;
  description?: string;
  image: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
  /**
   * Health topics are YMYL: typing them as MedicalWebPage and declaring the
   * medical audience tells Google this is health content written for patients.
   */
  medical?: boolean;
  author?: Author;
};

export const articleSchema = ({
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  keywords = [],
  medical = false,
  author = getDefaultAuthor(),
}: ArticleSchemaArgs) => {
  const article: Record<string, unknown> = {
    '@type': medical ? ['Article', 'MedicalWebPage'] : 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    image: [image],
    url,
    datePublished,
    dateModified,
    author: { '@id': `${DOMAIN}/authors/${author.slug}#person` },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: url,
    inLanguage: 'en',
  };

  if (keywords.length) {
    article.keywords = keywords.join(', ');
  }

  if (medical) {
    article.audience = {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    };
    article.reviewedBy = { '@id': ORGANIZATION_ID };
  }

  return article;
};

/**
 * Wraps nodes in a single @graph so the whole page ships one script tag and
 * every entity can cross-reference the others by @id.
 */
export const buildGraph = (nodes: unknown[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
