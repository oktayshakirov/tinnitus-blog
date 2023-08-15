import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';

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
            Beyond Tinnitus is more than just a blog – it&apos;s a platform dedicated to offering valuable insights, information, and relief to individuals dealing with tinnitus.
          </p>
          <p>
            This website includes informative articles that cover various aspects of tinnitus, from understanding its origins to exploring effective coping mechanisms. Whether you&apos;re a tinnitus sufferer or simply curious about the condition, our articles provide insights and perspectives that can help you better navigate this auditory challenge.
          </p>
          <Divider style={{ margin: '20px 0' }} />
          <p>
            Beyond Tinnitus is an open-source project, and I invite you to be a part of this endeavor. If you&apos;re a developer, designer, content creator, or anyone passionate about tinnitus awareness, you can contribute to the growth of this platform. Feel free to explore the GitHub repository where the code for this blog resides. Your contributions can help enhance the user experience, add new features, and improve the overall impact of Beyond Tinnitus.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="https://github.com/oktayshakirov/tinnitus-blog">
              <img src="./github.png" alt="GitHub Repository" />
            </a>
          </div>
          <p style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            * To learn more about me and my journey as a software developer, you can visit <a href="https://oktayshakirov.com" style={{ color: 'blue'}}>my portfolio</a> or find me on <a href="https://www.linkedin.com/in/oktayshakirov/" style={{ color: 'blue' }}>LinkedIn</a>.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default About;
