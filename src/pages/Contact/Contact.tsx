import React from 'react';
import Container from '@mui/material/Container';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';

const Contact = ({}: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Headline>Contact TinnitusHelp.me</Headline>
          <h2>Contact us at info@tinnitushelp.me</h2>
          <p>
            For inquiries or further information, you can reach out to me
            directly via email at oktayshakirov@gmail.com. I highly value the
            feedback and insights of our readers.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
