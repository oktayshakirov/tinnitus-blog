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
         <Headline>About TinnitusHelp.me</Headline>
         <p>
           Welcome to TinnitusHelp.me, a comprehensive online resource dedicated to empowering individuals affected by tinnitus. As a student and tinnitus sufferer myself, I have embarked on this journey to create a trusted source of information, support, and resources to help you better understand, manage, and cope with the challenges of tinnitus.
         </p>
         <p>
           My mission is to foster a community where knowledge is shared, and experiences are exchanged, enabling everyone to navigate the journey of living with tinnitus more effectively. Through extensive research and collaboration with medical professionals and researchers, I strive to provide accurate and up-to-date information on tinnitus management.
         </p>
         <p>
           At TinnitusHelp.me, you will find a diverse range of resources, including educational articles, news updates, and practical strategies for tinnitus management. I work tirelessly to curate reliable information from various sources and present it in an accessible and understandable manner.
         </p>
         <Divider style={{ margin: '20px 0' }} />
         <p>
           In addition to the comprehensive website, TinnitusHelp.me maintains an active presence on various social media platforms. This allows us to engage with our community, share insights, and provide support to individuals affected by tinnitus. Our goal is to create a supportive and inclusive environment where you can connect, learn, and find solace in knowing you are not alone in your journey.
         </p>
         <p>
           As someone who developed tinnitus in my twenties, I understand the challenges and frustrations that come with this condition. The initial shock and confusion can be overwhelming, and the search for answers can often feel like a daunting task. It was through my own research and exploration that I realized the importance of having a reliable and comprehensive resource for tinnitus-related information.
         </p>
         <p>
           At TinnitusHelp.me, I aim to be that resource. I have curated a wealth of information, tips, and strategies based on the latest research and personal experiences. My goal is to provide you with the tools you need to better understand your tinnitus, manage its symptoms, and ultimately find ways to thrive despite its presence.
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