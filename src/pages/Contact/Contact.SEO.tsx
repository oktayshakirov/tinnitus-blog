import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const ContactSEO = () => {
  const title = `Contact Us | ${DOMAIN_NAME}`;
  const description =
    'Get in touch with us at Tinnitus Help. Whether you have questions, feedback, or need support, we are here to help with tinnitus-related inquiries.';
  const canonical = `${DOMAIN}/contact`;
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

export default ContactSEO;
