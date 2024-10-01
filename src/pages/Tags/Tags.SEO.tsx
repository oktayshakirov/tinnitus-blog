import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const TagsSEO = () => {
  const title = `${DOMAIN_NAME} | Tags`;
  const description =
    'Explore tinnitus topics on our tags page. Find articles, guides and resources categorized by key terms to help you manage and understand tinnitus better.';
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
