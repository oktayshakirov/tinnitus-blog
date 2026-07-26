import React from 'react';
import { StyledContainer } from './FAQ.styled';
import Divider from '@mui/material/Divider';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from 'next/link';
import { Typography, Box, Paper } from '@mui/material';
import FAQSEO from './FAQ.SEO';
import { SITE_FAQ } from '@const/faq';

const FAQ = () => {
  return (
    <>
      <FAQSEO />
      <Layout>
        <StyledContainer>
          <Headline>Frequently Asked Questions</Headline>
          <Typography variant="body1" gutterBottom>
            Straight answers to the questions people ask most about tinnitus -
            what it is, what actually helps, when to see a doctor, and what you
            will find on this site. Nothing here is medical advice, and we will
            never tell you there is a guaranteed cure.
          </Typography>
          <Divider sx={{ margin: '20px 0' }} />

          {SITE_FAQ.map((entry) => (
            <Box
              key={entry.question}
              component={Paper}
              elevation={3}
              sx={{
                padding: '20px',
                marginBottom: '20px',
                backgroundColor: '#5B3964',
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                {entry.question}
              </Typography>
              <Typography variant="body1" component="div">
                {entry.render ?? entry.answer}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ margin: '20px 0' }} />

          <Typography variant="body2">
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
          </Typography>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default FAQ;
