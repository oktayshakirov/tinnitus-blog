import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';
import { Author } from '@const/authors';

type Props = {
  author: Author;
};

const AuthorProfileSEO = ({ author }: Props) => {
  const title = `${author.name} | ${DOMAIN_NAME}`;
  const description = author.description;
  const canonical = `${DOMAIN}/authors/${author.slug}`;
  const imageUrl = author.image
    ? `${DOMAIN}${author.image}`
    : `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        type: 'profile',
        url: canonical,
        title: title,
        description: description,
        images: [{ url: imageUrl, type: 'image/png' }],
        siteName: DOMAIN_NAME,
      }}
    />
  );
};

export default AuthorProfileSEO;
