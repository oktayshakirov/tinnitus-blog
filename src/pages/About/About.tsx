import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from 'next/link';

const About = ({  }: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Headline>About Beyond Tinnitus</Headline>
          <p>
            Welcome to Beyond Tinnitus, your ultimate resource for exploring the world of tinnitus. As a software developer and tinnitus sufferer on a mission to make a positive impact, I&apos;ve embarked on this journey to share my insights, experiences, and discoveries surrounding tinnitus. Here, we dive into the realm of tinnitus with the aim of understanding, managing, and ultimately moving beyond its challenges.
          </p>
          <p>
            Beyond Tinnitus is more than just a blog &ndash; it&apos;s a platform dedicated to offering valuable insights, information, and relief to individuals dealing with tinnitus.
          </p>
          <p>
            This website includes informative articles that cover various aspects of tinnitus, from understanding its origins to exploring effective coping mechanisms. Whether you&apos;re a tinnitus sufferer or simply curious about the condition, our articles provide insights and perspectives that can help you better navigate this auditory challenge.
          </p>
          <Divider style={{ margin: '20px 0' }} />
          <p>
            To learn more about me and my journey as a software developer, you can visit <a href="https://oktayshakirov.com" style={{ color: '#FFFF9B', textDecoration: 'none' }}>My Website</a> or find me on <a href="https://www.linkedin.com/in/oktayshakirov/" style={{ color: '#FFFF9B', textDecoration: 'none' }}>LinkedIn</a>. There, you&apos;ll find my other projects.
          </p>
          <Divider style={{ margin: '20px 0' }} />
          <p>
            For inquiries or further information, you can reach out to me directly via email at <a href="mailto:oktayshakirov@gmail.com" style={{ color: '#FFFF9B', textDecoration: 'none' }}>oktayshakirov@gmail.com</a>. I highly value the feedback and insights of our readers.
          </p>
          <p>
  Please also familiarize yourself with our 
  <Link href="/privacy" style={{ color: '#FFFF9B', textDecoration: 'none', marginLeft: '7px', marginRight: '7px' }}>
    Privacy Policy
  </Link> 
  and 
  <Link href="/terms" style={{ color: '#FFFF9B', textDecoration: 'none', marginLeft: '7px', marginRight: '7px' }}>
    Terms of Use
  </Link> 
  before using the site.
</p>
        </Container>
      </Layout>
    </>
  );
};

export default About;
