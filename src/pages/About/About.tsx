import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from 'next/link';

const About = ({}: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Headline>About TinnitusHelp.me</Headline>
          <p>
            Welcome to TinnitusHelp.me, your go-to resource for everything
            related to tinnitus. As a student and someone living with tinnitus,
            I created this site to provide reliable information, support and
            resources to help you understand, manage and cope with tinnitus
            effectively.
          </p>
          <p>
            My mission is to build a community where knowledge and experiences
            about tinnitus are shared, making it easier for everyone to navigate
            life with this condition. Through extensive research and
            collaboration with medical experts, I aim to deliver accurate,
            up-to-date information on tinnitus management.
          </p>
          <p>
            On TinnitusHelp.me, you&apos;ll find a wide range of resources,
            including educational articles, news and practical tips for managing
            tinnitus. I carefully curate information from trusted sources,
            presenting it in a clear and accessible way.
          </p>
          <Divider style={{ margin: '20px 0' }} />
          <p>
            Having developed tinnitus in my twenties, I understand the
            challenges it brings—the initial shock, the confusion and the
            overwhelming search for answers. This site was born out of my
            personal journey to find reliable, comprehensive tinnitus
            information.
          </p>
          <p>
            At TinnitusHelp.me, my goal is to offer you the tools to understand
            your tinnitus, manage its symptoms and thrive despite its presence.
          </p>
          <Divider style={{ margin: '20px 0' }} />
          <p>
            Please also familiarize yourself with our
            <Link
              href="/privacy"
              style={{
                color: '#FFFF9B',
                textDecoration: 'none',
                marginLeft: '7px',
                marginRight: '7px',
              }}
            >
              Privacy Policy
            </Link>
            and
            <Link
              href="/terms"
              style={{
                color: '#FFFF9B',
                textDecoration: 'none',
                marginLeft: '7px',
                marginRight: '7px',
              }}
            >
              Terms of Use
            </Link>
            before using the site.
          </p>
          <Divider style={{ margin: '20px 0' }} />
          <p>
            If you have any questions, concerns, or requests regarding this
            privacy policy or our data practices, please contact us using the
            information provided on our{' '}
            <Link
              href="/contact"
              style={{
                color: '#FFFF9B',
                textDecoration: 'none',
                marginRight: '7px',
              }}
            >
              contact
            </Link>
            page.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default About;
