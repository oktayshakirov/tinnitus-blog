import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from 'next/link';
import { Typography, Box, Paper } from '@mui/material';

const FAQ = () => {
  return (
    <Layout>
      <Container>
        <Headline>Frequently Asked Questions</Headline>
        <Typography variant="body1" gutterBottom>
          Welcome to the Beyond Tinnitus FAQ section. Here you will find answers to common questions about tinnitus, our content, and the resources we offer. Whether you are new to tinnitus or looking for specific information, we hope you find these answers helpful.
        </Typography>
        <Divider sx={{ margin: '20px 0' }} />
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>What is tinnitus?</Typography>
          <Typography variant="body1">Tinnitus is the perception of noise or ringing in the ears when no external sound is present. It is often a symptom of an underlying condition such as hearing loss, ear injury, or a circulatory system disorder.</Typography>
        </Box>
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>How can I manage my tinnitus symptoms?</Typography>
          <Typography variant="body1">Managing tinnitus symptoms can involve various approaches including sound therapy, cognitive behavioral therapy, lifestyle changes, and medical treatments. We provide detailed articles and resources on each of these methods.</Typography>
        </Box>
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>What types of sound therapy do you offer?</Typography>
          <Typography variant="body1">We offer a variety of sound therapy options such as zen sounds, white noise, and water noises. These can be streamed on platforms like Spotify, Apple Music, Amazon Music, and YouTube to help you find relief.</Typography>
        </Box>
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Where can I find your sound therapy tracks?</Typography>
          <Typography variant="body1">Our sound therapy tracks are available on popular streaming platforms including Spotify, Apple Music, Amazon Music, YouTube and all other 30+ streaming platforms. You can find links to these tracks on our website.</Typography>
        </Box>
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Can tinnitus be cured?</Typography>
          <Typography variant="body1">Currently, there is no cure for tinnitus, but there are many effective treatments and coping strategies that can help manage the symptoms and improve your quality of life. Our blog provides information on these methods.</Typography>
        </Box>
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>How can I stay updated with your latest articles and news?</Typography>
          <Typography variant="body1">You can stay updated by subscribing to our newsletter or following us on our social media channels. We regularly post new articles, updates, and helpful tips for managing tinnitus.</Typography>
        </Box>
        
        <Box component={Paper} elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>How can I contact you for more information?</Typography>
          <Typography variant="body1">If you have any questions or need further information, feel free to reach out to us via email at <a href="mailto:oktayshakirov@gmail.com" style={{ color: '#FFFF9B', textDecoration: 'none' }}>oktayshakirov@gmail.com</a>. We value the feedback and insights from our readers.</Typography>
        </Box>
        
        <Divider sx={{ margin: '20px 0' }} />
        
        <Typography variant="body2">
          Please also familiarize yourself with our 
          <Link href="/privacy" style={{ color: '#FFFF9B', textDecoration: 'none', marginLeft: '7px', marginRight: '7px' }}>
            Privacy Policy
          </Link> 
          and 
          <Link href="/terms" style={{ color: '#FFFF9B', textDecoration: 'none', marginLeft: '7px', marginRight: '7px' }}>
            Terms of Use
          </Link> 
          before using the site.
        </Typography>
      </Container>
    </Layout>
  );
};

export default FAQ;
