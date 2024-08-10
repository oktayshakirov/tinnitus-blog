import React from 'react';
import Container from '@mui/material/Container';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from '@mui/material/Link';

const Contact = ({}: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Headline>Contact TinnitusHelp.me</Headline>

          <h2>We&apos;d Love to Hear from You</h2>
          <p>
            Whether you have questions, suggestions, or need support, we&apos;re
            here to help. At TinnitusHelp.me, we are dedicated to providing
            valuable resources and insights to help manage and understand
            tinnitus. Your feedback is essential in helping us improve our
            content and services.
          </p>

          <h2>Contact Information</h2>
          <p>
            For inquiries, advertising, or partnership opportunities, please
            feel free to reach out to us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <Link
                href="mailto:info@tinnitushelp.me"
                style={{ color: '#FFFF9B', textDecoration: 'none' }}
              >
                info@tinnitushelp.me
              </Link>
            </li>
            <li>
              <strong>Direct Contact:</strong>{' '}
              <Link
                href="mailto:oktayshakirov@gmail.com"
                style={{ color: '#FFFF9B', textDecoration: 'none' }}
              >
                oktayshakirov@gmail.com
              </Link>
            </li>
          </ul>

          <h2>Feedback and Suggestions</h2>
          <p>
            We highly value the feedback and insights of our readers. If you
            have any suggestions on how we can improve our content, website, or
            services, please don&apos;t hesitate to share them with us. Your
            input is crucial in helping us improve our content and community.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
