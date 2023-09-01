import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';

const Terms = ({ }: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Headline>Terms of Use for Beyond the Buzz</Headline>
          <p>
            Welcome to Beyond the Buzz. This blog is created and managed by an individual based in Germany, Europe. These terms and conditions outline the rules and regulations for the use of this blog. By accessing this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use this website.
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>1. Content Ownership and Rights:</Headline>
          <p>
            All content on this blog is original and created by the owner of Beyond the Buzz. This includes text, graphics, images, and other material. The images used on this blog are royalty-free. The content is for informational purposes only, focusing on tinnitus and related topics, and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
          </p>

          <Headline>2. License to Use:</Headline>
          <p>
            The intellectual property rights for all material on Beyond the Buzz are owned by the blog&apos;s creator. Visitors are allowed to view and print pages from this website for personal, non-commercial use, subject to the restrictions set out below and elsewhere in these terms and conditions.
          </p>

          <Headline>3. Restrictions:</Headline>
          <p>
            Visitors to Beyond the Buzz are specifically restricted from:
            <ul>
              <li>Republishing material from this website without proper attribution.</li>
              <li>Selling, renting, or sub-licensing material from this website.</li>
              <li>Reproducing, duplicating, or copying material from this blog for commercial purposes.</li>
              <li>Redistributing content from this blog without explicit permission (unless the content is specifically made for redistribution).</li>
            </ul>
          </p>

          <Headline>4. Third-party links:</Headline>
          <p>
            The blog includes links to third-party websites such as Spotify, Apple Music, Amazon, etc., for sound therapy and white noise streaming. These sites have their own terms and conditions and privacy policies. Beyond the Buzz does not assume responsibility or liability for the content or activities of these linked sites.
          </p>

          <Headline>5. Limitation of Liability:</Headline>
          <p>
            Beyond the Buzz, or its creator, will not be held liable for any damages arising out of or in connection with the use of this website. This includes, without limitation, damages for loss of profit, data, or goodwill. The blog&apos;s owner shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to a visitor&apos;s use of this blog.
          </p>

          <Headline>6. Changes to the Terms of Use:</Headline>
          <p>
            The blog&apos;s creator reserves the right to update, change, or replace any part of these Terms of Use by posting updates and/or changes to the website. It is the visitor&apos;s responsibility to check this page periodically for changes.
          </p>

          <Headline>7. Governing Law:</Headline>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
          </p>

          <Headline>8. Contact:</Headline>
          <p>
            If you have any queries or concerns regarding any of the terms mentioned here, please feel free to contact the blog&apos;s creator.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Terms;
