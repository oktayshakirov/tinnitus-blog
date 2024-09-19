import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const TagsSEO = () => {
  const title = `${DOMAIN_NAME} | Tags`;
  const description =
    'Explore various tinnitus-related topics and keywords through our comprehensive tags page. Quickly find articles, guides, and resources categorized by key terms to help you manage and understand tinnitus better. Discover the content that matters most to you, tailored to your specific needs and interests in tinnitus management and relief.';
  const canonical = `${DOMAIN}/tags`;
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

export default TagsSEO;
