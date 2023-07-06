import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const TagsSEO = () => {
  // TODO FIX META INFO
  const title = "Beyond the Buzz | Tags";
  const description =
    'What is Tinnitus? How can I find relief from its effects? The ultimate guide to modern tinnitus management will provide answers to these inquiries and more.';
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
