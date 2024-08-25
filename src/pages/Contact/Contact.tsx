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
            Have questions, suggestions, or need support? We’re here to help. At
            TinnitusHelp.me, we’re committed to providing valuable resources and
            insights to help you better understand and manage tinnitus. Your
            feedback is vital to our mission, helping us continually improve and
            grow.
          </p>

          <h2>Contact Information</h2>
          <p>
            For any inquiries, advertising opportunities, or partnership
            proposals, please don’t hesitate to get in touch:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <Link
                href="mailto:oktayshakirov@gmail.com"
                style={{ color: '#FFFF9B', textDecoration: 'none' }}
              >
                oktayshakirov@gmail.com
              </Link>
            </li>
            <li>
              <strong>Linkedin:</strong>{' '}
              <Link
                href="https://www.linkedin.com/in/oktayshakirov/"
                style={{ color: '#FFFF9B', textDecoration: 'none' }}
              >
                Oktay Shakirov
              </Link>
            </li>
          </ul>

          <h2>More about the developer of TinnitusHelp.me:</h2>
          <p>
            If you’re interested in my developer journey and want to explore
            more of my projects, check out my personal website:
          </p>
          <ul>
            <li>
              <strong>Website:</strong>{' '}
              <Link
                href="http://www.oktayshakirov.com"
                style={{ color: '#FFFF9B', textDecoration: 'none' }}
              >
                oktayshakirov.com
              </Link>
            </li>
          </ul>

          <h2>Feedback and Suggestions</h2>
          <p>
            We greatly value the thoughts and suggestions of our readers. If you
            have ideas on how we can enhance our content, website, or services,
            we’d love to hear them. Your input is crucial in helping us create a
            better experience for our community.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
